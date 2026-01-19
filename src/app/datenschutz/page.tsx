import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutz - Serilo',
  description: 'Datenschutzerklärung von Serilo.',
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen w-full bg-black text-white p-6 md:p-12 font-sans selection:bg-purple-500/30">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-zinc-300 leading-relaxed">
          <p className="text-sm text-zinc-500">Stand: {new Date().toLocaleDateString('de-DE')}</p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-medium text-white/90">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
              wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
              werden können.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. Datenerfassung auf unserer Website</h2>

            <h3 className="text-lg font-medium text-white/90">Cookies</h3>
            <p>
              Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem
              Endgerät keinen Schaden an. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
            </p>

            <h3 className="text-lg font-medium text-white/90">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien,
              die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-400">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. Analyse-Tools und Werbung</h2>
            <p>
              Soweit Sie Ihre Einwilligung erklärt haben, wird auf dieser Website Google Analytics eingesetzt,
              ein Webanalysedienst der Google LLC.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten,
              deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder
              Löschung dieser Daten.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
