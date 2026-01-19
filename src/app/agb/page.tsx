import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AGB - Serilo',
    description: 'Allgemeine Geschäftsbedingungen von Serilo.',
};

export default function AgbPage() {
    return (
        <main className="min-h-screen w-full bg-black text-white p-6 md:p-12 font-sans selection:bg-purple-500/30">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Allgemeine Geschäftsbedingungen
                </h1>

                <div className="space-y-8 text-zinc-300 leading-relaxed">
                    <p className="text-sm text-zinc-500">Stand: {new Date().toLocaleDateString('de-DE')}</p>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">1. Geltungsbereich</h2>
                        <p>
                            Für die Geschäftsbeziehung zwischen Serilo (nachfolgend „Anbieter“) und dem Kunden (nachfolgend „Kunde“)
                            gelten ausschließlich die nachfolgenden Allgemeinen Geschäftsbedingungen in ihrer zum Zeitpunkt der Bestellung
                            gültigen Fassung.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">2. Vertragsgegenstand</h2>
                        <p>
                            Gegenstand des Vertrages ist die Nutzung der vom Anbieter bereitgestellten Software-as-a-Service (SaaS) Plattform.
                            Der Umfang der Leistungen ergibt sich aus der Leistungsbeschreibung auf der Website.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">3. Vertragsschluss</h2>
                        <p>
                            Der Vertrag kommt durch die Registrierung des Kunden und die Bestätigung durch den Anbieter zustande.
                            Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot, sondern einen
                            unverbindlichen Online-Katalog dar.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">4. Haftungsbeschränkung</h2>
                        <p>
                            Der Anbieter haftet für Vorsatz und grobe Fahrlässigkeit. Ferner haftet der Anbieter für die fahrlässige
                            Verletzung von Pflichten, deren Erfüllung die ordnungsgemäße Durchführung des Vertrages überhaupt erst
                            ermöglicht, deren Verletzung die Erreichung des Vertragszwecks gefährdet und auf deren Einhaltung Sie
                            als Kunde regelmäßig vertrauen dürfen.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">5. Schlussbestimmungen</h2>
                        <p>
                            Auf Verträge zwischen dem Anbieter und den Kunden findet das Recht der Bundesrepublik Deutschland unter
                            Ausschluss des UN-Kaufrechts Anwendung.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
