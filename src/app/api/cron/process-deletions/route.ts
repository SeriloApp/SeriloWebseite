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

export async function GET(request: NextRequest) {
    // Security: Prüfe Vercel Cron Secret
    const authHeader = request.headers.get('authorization');

    // Debug logging
    console.log('[Cron] Auth Header present:', !!authHeader);
    console.log('[Cron] CRON_SECRET present:', !!process.env.CRON_SECRET);

    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json(
            { error: 'Unauthorized' },
            { status: 401 }
        );
    }

    console.log('[Cron] Starting account deletion processing...');

    try {
        // 1. Hole alle pending deletions
        const { data: deletions, error: fetchError } = await supabaseAdmin
            .from('account_deletions')
            .select('*')
            .eq('status', 'pending')
            .order('requested_at', { ascending: true });

        if (fetchError) {
            console.error('[Cron] Error fetching deletions:', fetchError);
            return NextResponse.json(
                { error: 'Failed to fetch pending deletions' },
                { status: 500 }
            );
        }

        if (!deletions || deletions.length === 0) {
            console.log('[Cron] No pending deletions found');
            return NextResponse.json({
                success: true,
                message: 'No pending deletions',
                processed: 0
            });
        }

        console.log(`[Cron] Found ${deletions.length} pending deletion(s)`);

        let successCount = 0;
        let failCount = 0;

        // 2. Verarbeite jede Löschung
        for (const deletion of deletions) {
            try {
                console.log(`[Cron] Processing deletion for user ${deletion.user_id}`);

                // Status auf "processing" setzen
                await supabaseAdmin
                    .from('account_deletions')
                    .update({ status: 'processing' })
                    .eq('id', deletion.id);

                // Avatar aus Storage löschen (falls vorhanden)
                try {
                    const { data: avatars } = await supabaseAdmin
                        .storage
                        .from('avatars')
                        .list(deletion.user_id);

                    if (avatars && avatars.length > 0) {
                        const filePaths = avatars.map(file => `${deletion.user_id}/${file.name}`);
                        await supabaseAdmin.storage.from('avatars').remove(filePaths);
                        console.log(`[Cron] Deleted ${filePaths.length} avatar(s)`);
                    }
                } catch (storageError) {
                    console.error('[Cron] Avatar deletion error:', storageError);
                    // Nicht blockierend
                }

                // Auth User löschen - CASCADE übernimmt den Rest!
                const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(
                    deletion.user_id
                );

                if (deleteError) {
                    throw deleteError;
                }

                // Status auf "completed" setzen
                await supabaseAdmin
                    .from('account_deletions')
                    .update({
                        status: 'completed',
                        processed_at: new Date().toISOString()
                    })
                    .eq('id', deletion.id);

                console.log(`[Cron] ✅ Successfully deleted account ${deletion.user_id}`);
                successCount++;

            } catch (error) {
                console.error(`[Cron] ❌ Failed to delete account ${deletion.user_id}:`, error);

                // Status auf "failed" setzen
                await supabaseAdmin
                    .from('account_deletions')
                    .update({
                        status: 'failed',
                        error_message: error instanceof Error ? error.message : 'Unknown error',
                        processed_at: new Date().toISOString()
                    })
                    .eq('id', deletion.id);

                failCount++;
            }
        }

        console.log(`[Cron] Finished. Success: ${successCount}, Failed: ${failCount}`);

        return NextResponse.json({
            success: true,
            message: 'Processing completed',
            processed: deletions.length,
            successful: successCount,
            failed: failCount
        });

    } catch (error) {
        console.error('[Cron] Fatal error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
