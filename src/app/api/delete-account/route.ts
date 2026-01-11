import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabaseAdmin = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    }
);

// Helper für CORS Headers
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function POST(request: NextRequest) {
    try {
        // 1. Token validieren
        const authHeader = request.headers.get('authorization');
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return NextResponse.json(
                { error: 'Missing authorization header' },
                { status: 401, headers: corsHeaders }
            );
        }

        const token = authHeader.replace('Bearer ', '');
        const { data: { user }, error: authError } = await supabaseAdmin.auth.getUser(token);

        if (authError || !user) {
            return NextResponse.json(
                { error: 'Invalid token' },
                { status: 401, headers: corsHeaders }
            );
        }

        // 2. Request Body validieren
        const body = await request.json();
        const { userId, email } = body;

        if (!userId || !email) {
            return NextResponse.json(
                { error: 'Missing userId or email' },
                { status: 400, headers: corsHeaders }
            );
        }

        if (user.id !== userId) {
            return NextResponse.json(
                { error: 'Cannot delete another users account' },
                { status: 403, headers: corsHeaders }
            );
        }

        // 3. Status auf "processing" setzen
        const { error: updateError } = await supabaseAdmin
            .from('account_deletions')
            .update({ status: 'processing' })
            .eq('user_id', userId)
            .eq('status', 'pending');

        if (updateError) {
            console.error('[Delete Account] Failed to update status:', updateError);
        }

        // 4. Avatar aus Storage löschen (falls vorhanden)
        try {
            const { data: avatars } = await supabaseAdmin.storage.from('avatars').list(userId);
            if (avatars && avatars.length > 0) {
                const filePaths = avatars.map(file => `${userId}/${file.name}`);
                await supabaseAdmin.storage.from('avatars').remove(filePaths);
                console.log(`[Delete Account] Deleted ${filePaths.length} avatar(s) for user ${userId}`);
            }
        } catch (storageError) {
            console.error('[Delete Account] Avatar deletion error:', storageError);
            // Nicht blockierend
        }

        // 5. Auth User löschen - CASCADE macht den Rest!
        const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(userId);

        if (deleteError) {
            // Fehler: Status auf "failed" setzen
            await supabaseAdmin
                .from('account_deletions')
                .update({
                    status: 'failed',
                    error_message: deleteError.message,
                    processed_at: new Date().toISOString()
                })
                .eq('user_id', userId);

            console.error(`[Delete Account] ❌ Failed to delete user ${userId}:`, deleteError.message);

            return NextResponse.json(
                { error: 'Failed to delete account' },
                { status: 500, headers: corsHeaders }
            );
        }

        // 6. Erfolg: Status auf "completed" setzen
        await supabaseAdmin
            .from('account_deletions')
            .update({
                status: 'completed',
                processed_at: new Date().toISOString()
            })
            .eq('user_id', userId);

        console.log(`[Delete Account] ✅ Successfully deleted account`, {
            userId,
            email,
            timestamp: new Date().toISOString()
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Account deletion completed'
            },
            { status: 200, headers: corsHeaders }
        );

    } catch (error) {
        console.error('[Delete Account] Internal error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500, headers: corsHeaders }
        );
    }
}

// CORS Preflight
export async function OPTIONS() {
    return new NextResponse(null, {
        status: 200,
        headers: corsHeaders,
    });
}
