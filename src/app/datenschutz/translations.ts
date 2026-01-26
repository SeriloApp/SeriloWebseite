export type SupportedLanguage = 'de' | 'en' | 'es' | 'fr';

export function getLanguageFromLocale(locale: string): SupportedLanguage {
    const lang = locale.toLowerCase().split('-')[0];
    const country = locale.toLowerCase().split('-')[1];

    if (country === 'de' || country === 'at' || country === 'ch') return 'de';
    if (country === 'es' || country === 'mx' || country === 'ar') return 'es';
    if (country === 'fr' || country === 'be' || country === 'ca') return 'fr';

    if (lang === 'de') return 'de';
    if (lang === 'es') return 'es';
    if (lang === 'fr') return 'fr';

    return 'en';
}

export interface Subsection {
    number: number;
    title?: string;
    content?: string;
    list?: string[];
    warning?: string;
}

export interface Section {
    number: number;
    title: string;
    subsections: Subsection[];
}

export interface PrivacyContent {
    title: string;
    lastUpdatedLabel: string;
    date: string;
    versionLabel: string;
    version: string;
    languageLabel: string;
    allRightsReserved: string;
    termsLink: string;
    homeLink: string;
    disclaimer: string;
    contact: {
        title: string;
        text: string;
    };
    sections: Section[];
}

const germanContent: PrivacyContent = {
    title: 'Datenschutzerklärung',
    lastUpdatedLabel: 'Stand',
    date: '26. Januar 2026',
    versionLabel: 'Version',
    version: '1.0',
    languageLabel: 'Sprache',
    allRightsReserved: 'Alle Rechte vorbehalten.',
    termsLink: 'AGB',
    homeLink: 'Startseite',
    disclaimer: '',
    contact: {
        title: 'Kontakt',
        text: 'Bei Fragen zum Datenschutz wenden Sie sich bitte an:\n\nTim Heck KitchenHeroes Marke Serilo\nNeue Straße 19a, 35096 Weimar\nE-Mail: info@serilo.de\nWebsite: https://www.serilo.de/datenschutz'
    },
    sections: [
        {
            number: 1,
            title: 'Einleitung',
            subsections: [
                {
                    number: 1,
                    content: 'Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Diese Datenschutzerklärung informiert Sie darüber, welche Daten wir bei der Nutzung der mobilen Applikation "Serilo" (nachfolgend "App") erheben, wie wir diese verwenden und welche Rechte Sie haben.'
                }
            ]
        },
        {
            number: 2,
            title: 'Verantwortlicher',
            subsections: [
                {
                    number: 1,
                    content: 'Verantwortlicher für die Datenverarbeitung im Sinne der Datenschutz-Grundverordnung (DSGVO):',
                    list: [
                        'Tim Heck KitchenHeroes Marke Serilo',
                        'Neue Straße 19a, 35096 Weimar',
                        'info@serilo.de',
                        'Website: https://www.serilo.de'
                    ]
                }
            ]
        },
        {
            number: 3,
            title: 'Erhobene Daten',
            subsections: [
                {
                    number: 1,
                    title: 'Pflichtangaben bei der Registrierung',
                    content: 'Bei der Registrierung erheben wir folgende Daten:',
                    list: [
                        'Name (oder Pseudonym): Personalisierung, Anzeige im Profil (Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO)',
                        'E-Mail-Adresse: Kontoverwaltung, Passwort-Wiederherstellung (Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO)',
                        'Land: Lokalisierung der App (Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO)',
                        'Bevorzugte Sprache: Spracheinstellungen (Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO)'
                    ]
                },
                {
                    number: 2,
                    title: 'Optionale Profildaten',
                    list: [
                        'Profilbild: Personalisierung (Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO - Einwilligung)'
                    ]
                },
                {
                    number: 3,
                    title: 'Standortdaten (GPS)',
                    content: 'Die App erhebt Standortdaten für folgende Funktionen:',
                    list: [
                        'Routengenerierung: Einmaliger Standort (Temporär gespeichert, Rechtsgrundlage: Vertrag)',
                        'Walk-Tracking: GPS-Koordinaten während des Walks (Dauerhaft in Route gespeichert, Rechtsgrundlage: Einwilligung)',
                        'Hintergrund-Tracking: GPS-Koordinaten im Hintergrund (Dauerhaft in Route gespeichert, Rechtsgrundlage: Einwilligung)',
                        'Turn-by-Turn-Navigation (Premium): Echtzeit-Standort (Temporär, Rechtsgrundlage: Einwilligung)'
                    ],
                    warning: 'WICHTIG: Sie können die Standortfreigabe jederzeit in den Geräteeinstellungen widerrufen. Ohne Standortzugriff sind Routengenerierung und Walk-Tracking nicht möglich.'
                },
                {
                    number: 4,
                    title: 'Nutzungsdaten (Walks & Aktivitäten)',
                    content: 'Bei der Nutzung der App erheben wir:',
                    list: [
                        'Abgeschlossene Spaziergänge: Statistiken, Insights, Achievements',
                        'Routendaten (Distanz, Dauer, Koordinaten): Walk-Historie, Favoriten',
                        'Stimmungsdaten (Mood vor/nach Walk): Mood-Tracking, Insights',
                        'Schrittzählung: Aktivitätsstatistiken',
                        'Badges & Achievements: Gamification',
                        'Streak-Daten: Motivation',
                        'Wöchentliche Insights: Balance Score'
                    ]
                },
                {
                    number: 5,
                    title: 'Gerätedaten',
                    list: [
                        'Gerätetyp & Betriebssystem: App-Optimierung, Fehlerbehebung (Rechtsgrundlage: Berechtigte Interessen)',
                        'App-Version: Support, Updates (Rechtsgrundlage: Berechtigte Interessen)'
                    ]
                },
                {
                    number: 6,
                    title: 'Bewegungsdaten (Motion)',
                    list: [
                        'Schrittzähler: Schätzung der Schritte während Walks (Rechtsgrundlage: Einwilligung)',
                        'Aktivitätserkennung: Erkennung ob Sie gehen/laufen/stehen (Rechtsgrundlage: Einwilligung)'
                    ]
                },
                {
                    number: 7,
                    title: 'Präferenzen und Einstellungen',
                    list: [
                        'Theme (Hell/Dunkel/System)',
                        'Benachrichtigungs-Einstellungen',
                        'Distanz-Einheit (km/mi)',
                        'Kartenstil',
                        'Haptik-Einstellungen'
                    ]
                }
            ]
        },
        {
            number: 4,
            title: 'Rechtsgrundlagen der Verarbeitung',
            subsections: [
                {
                    number: 1,
                    content: 'Wir verarbeiten Ihre Daten auf folgenden Rechtsgrundlagen:',
                    list: [
                        'Art. 6 Abs. 1 lit. a DSGVO (Einwilligung): Standortdaten, Profilbild, Bewegungsdaten',
                        'Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung): Registrierung, App-Funktionen, Abonnementverwaltung',
                        'Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen): Anonymisierte Nutzungsanalysen, Fehlerbehebung'
                    ]
                }
            ]
        },
        {
            number: 5,
            title: 'Drittanbieter und Datenübermittlung',
            subsections: [
                {
                    number: 1,
                    title: 'Übersicht der Drittanbieter',
                    list: [
                        'Supabase: Backend, Datenbank, Authentifizierung (EU-Server)',
                        'Google Sign-In: Authentifizierung (USA/SCCs)',
                        'Apple Sign-In: Authentifizierung (USA/SCCs)',
                        'StadiaMaps/Valhalla: Routing (Free) (EU)',
                        'Mapbox: Kartendarstellung, Routing (Premium) (USA/SCCs)',
                        'RevenueCat: Abonnementverwaltung (USA/SCCs)',
                        'PostHog: Anonyme Nutzungsanalyse (EU-Server)'
                    ]
                },
                {
                    number: 2,
                    title: 'StadiaMaps/Valhalla (Routing für Free-Nutzer)',
                    content: 'Zweck: Berechnung von Spazierrouten.\nDatenschutz: https://stadiamaps.com/privacy/',
                    list: [
                        'Übermittelte Daten: Start- und Wegpunkte der Route (GPS_Koordinaten)',
                        'Speicherung: Keine dauerhafte Speicherung bei StadiaMaps'
                    ]
                },
                {
                    number: 3,
                    title: 'Mapbox (Karten & Premium-Routing)',
                    content: 'Zweck: Kartendarstellung, POI-Suche, Premium-Routing.\nDatenschutz: https://www.mapbox.com/legal/privacy',
                    list: [
                        'Übermittelte Daten: Anzeigebereich der Karte, Routing-Anfragen',
                        'Speicherung: Gemäß Mapbox Privacy Policy'
                    ]
                },
                {
                    number: 4,
                    title: 'Supabase (Backend & Datenbank)',
                    content: 'Zweck: Speicherung aller Nutzerdaten, Authentifizierung.\nStandort: EU-Rechenzentrum.\nDatenschutz: https://supabase.com/privacy'
                },
                {
                    number: 5,
                    title: 'RevenueCat (In-App-Käufe)',
                    content: 'Zweck: Verwaltung von Premium-Abonnements.\nDatenschutz: https://www.revenuecat.com/privacy/',
                    list: [
                        'Übermittelte Daten: User-ID, Kaufstatus, Abonnement-Informationen'
                    ]
                },
                {
                    number: 6,
                    title: 'PostHog (Nutzungsanalyse)',
                    content: 'Zweck: Anonymisierte Analyse der App-Nutzung (z.B. Onboarding-Funnel).\nStandort: EU-Region.\nDatenschutz: https://posthog.com/privacy',
                    list: [
                        'Erfasste Events: Onboarding-Fortschritt, Paywall-Aufrufe, Registrierung (alle anonymisiert)',
                        'NICHT erfasst: Standortdaten, persönliche Daten, Walks, Moods'
                    ]
                },
                {
                    number: 7,
                    title: 'Google Sign-In / Apple Sign-In',
                    content: 'Zweck: Vereinfachte Registrierung und Anmeldung.\nDatenschutz: https://policies.google.com/privacy (Google), https://www.apple.com/legal/privacy/ (Apple)',
                    list: [
                        'Übermittelte Daten: Name und E-Mail-Adresse'
                    ]
                }
            ]
        },
        {
            number: 6,
            title: 'Datenübermittlung in Drittländer',
            subsections: [
                {
                    number: 1,
                    content: 'Einige unserer Dienstleister haben ihren Sitz außerhalb der EU (insbesondere USA). Die Datenübermittlung erfolgt auf Basis von:',
                    list: [
                        'EU-U.S. Data Privacy Framework (soweit anwendbar)',
                        'Standardvertragsklauseln (SCCs)',
                        'Angemessenheitsbeschlüsse'
                    ]
                },
                {
                    number: 2,
                    content: 'Wir setzen prioritär EU-basierte Dienstleister ein (z.B. PostHog EU, Supabase EU).'
                }
            ]
        },
        {
            number: 7,
            title: 'Speicherdauer',
            subsections: [
                {
                    number: 1,
                    list: [
                        'Nutzerkonto & Profildaten: Bis zur Kontolöschung',
                        'Walks & Routen: Bis zur Kontolöschung',
                        'Stimmungsdaten: Bis zur Kontolöschung',
                        'Badges & Achievements: Bis zur Kontolöschung',
                        'Standortdaten (während Walk): Dauerhaft in Route gespeichert',
                        'Standortdaten (Echtzeit): Nur während der Nutzung, nicht gespeichert',
                        'Analytics-Daten (PostHog): Anonymisiert, gemäß PostHog-Richtlinien',
                        'Abonnement-Daten (RevenueCat): Gemäß RevenueCat-Richtlinien'
                    ]
                }
            ]
        },
        {
            number: 8,
            title: 'Ihre Rechte (DSGVO)',
            subsections: [
                { number: 1, title: 'Auskunftsrecht (Art. 15 DSGVO)', content: 'Sie haben das Recht, Auskunft über Ihre gespeicherten Daten zu verlangen.' },
                { number: 2, title: 'Berichtigungsrecht (Art. 16 DSGVO)', content: 'Sie haben das Recht, unrichtige Daten korrigieren zu lassen.' },
                { number: 3, title: 'Löschungsrecht (Art. 17 DSGVO)', content: 'Sie haben das Recht, die Löschung Ihrer Daten zu verlangen ("Recht auf Vergessenwerden").', list: ['Kontolöschung über Profil → Einstellungen', 'Frist: 30 Tage', 'Sofortiger Logout nach Anfrage', 'Gelöscht werden: Profil, Walks, Routen, Moods, Badges, Avatar, Einstellungen'] },
                { number: 4, title: 'Recht auf Einschränkung (Art. 18 DSGVO)', content: 'Sie haben das Recht, die Einschränkung der Verarbeitung zu verlangen.' },
                { number: 5, title: 'Recht auf Datenübertragbarkeit (Art. 20 DSGVO)', content: 'Sie haben das Recht, Ihre Daten in einem strukturierten, maschinenlesbaren Format zu erhalten.', list: ['Premium-Nutzer können Daten als CSV/PDF exportieren'] },
                { number: 6, title: 'Widerspruchsrecht (Art. 21 DSGVO)', content: 'Sie haben das Recht, der Verarbeitung Ihrer Daten zu widersprechen.' },
                { number: 7, title: 'Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)', content: 'Sie können erteilte Einwilligungen jederzeit widerrufen.', list: ['Standortzugriff: Geräteeinstellungen', 'Benachrichtigungen: App- oder Geräteeinstellungen', 'Bewegungsdaten: Geräteeinstellungen'] },
                { number: 8, title: 'Beschwerderecht', content: 'Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.' }
            ]
        },
        {
            number: 9,
            title: 'Berechtigungen der App',
            subsections: [
                { number: 1, title: 'Standortzugriff', list: ['Zugriff bei Nutzung: Routengenerierung, Walk-Tracking', 'Zugriff im Hintergrund: Kontinuierliches Walk-Tracking'] },
                { number: 2, title: 'Kamera & Fotos', list: ['Kamera: Profilbild aufnehmen', 'Fotos: Profilbild auswählen'] },
                { number: 3, title: 'Bewegungsdaten', list: ['Motion & Fitness / Activity Recognition: Schrittzählung, Aktivitätserkennung'] },
                { number: 4, title: 'Benachrichtigungen', list: ['Push-Benachrichtigungen: Walk-Erinnerungen, Achievement-Benachrichtigungen'] }
            ]
        },
        {
            number: 10,
            title: 'Datensicherheit',
            subsections: [
                { number: 1, title: 'Technische Maßnahmen', list: ['Verschlüsselung (HTTPS/TLS)', 'Sichere Speicherung (EU-Rechenzentren)', 'Zugriffskontrolle (Row-Level-Security)', 'Sichere Token-basierte Authentifizierung'] },
                { number: 2, title: 'Organisatorische Maßnahmen', list: ['Zugriff nur bei technischer Notwendigkeit', 'Regelmäßige Sicherheitsüberprüfungen', 'Keine sensiblen Daten in Logs'] }
            ]
        },
        {
            number: 11,
            title: 'Keine Weitergabe an Dritte',
            subsections: [
                { number: 1, content: 'Wir verkaufen, vermieten oder teilen Ihre persönlichen Daten NICHT mit Dritten zu Werbezwecken. Daten werden nur an die genannten Dienstleister übermittelt, die für den Betrieb der App erforderlich sind.' }
            ]
        },
        {
            number: 12,
            title: 'Push-Benachrichtigungen',
            subsections: [
                { number: 1, title: 'Arten', list: ['Walk-Erinnerungen', 'Achievements', 'Turn-by-Turn (Premium)'] },
                { number: 2, title: 'Deaktivierung', content: 'Jederzeit deaktivierbar in den App-Einstellungen oder Geräteeinstellungen.' }
            ]
        },
        {
            number: 13,
            title: 'Minderjährige',
            subsections: [
                { number: 1, content: 'Die App ist für Personen ab 16 Jahren bestimmt. Wir erheben wissentlich keine Daten von Kindern unter 16 Jahren.' }
            ]
        },
        {
            number: 14,
            title: 'Änderungen der Datenschutzerklärung',
            subsections: [
                { number: 1, content: 'Wir behalten uns vor, diese Erklärung anzupassen. Die aktuelle Version ist stets in der App und auf der Website verfügbar. Bei wesentlichen Änderungen informieren wir Sie.' }
            ]
        },
        {
            number: 15,
            title: 'Kontakt',
            subsections: [
                { number: 1, content: 'Bei Fragen zum Datenschutz wenden Sie sich bitte an die oben genannte Kontaktadresse oder per E-Mail.' }
            ]
        },
        {
            number: 16,
            title: 'Weitere Informationen',
            subsections: [
                { number: 1, title: 'Cookies', content: 'Die mobile App verwendet keine Cookies.' },
                { number: 2, title: 'Tracking', content: 'Die App verwendet KEIN Werbe-Tracking oder Werbe-IDs. Die Analyse über PostHog dient nur der Produktverbesserung.' },
                { number: 3, title: 'Standort-Tracking', content: 'Standortdaten werden NICHT an Werbenetzwerke oder Datenbroker übermittelt.' }
            ]
        }
    ]
};

export const privacyContent: Record<SupportedLanguage, PrivacyContent> = {
    de: germanContent,
    en: germanContent, // Using German as fallback/default as requested by user providing only German text
    es: germanContent,
    fr: germanContent
};
