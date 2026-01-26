export type SupportedLanguage = 'de' | 'en' | 'es' | 'fr';

export function getLanguageFromLocale(locale: string): SupportedLanguage {
    const lang = locale.toLowerCase().split('-')[0];
    const country = locale.toLowerCase().split('-')[1];

    // Check country first for more accurate detection
    if (country === 'de' || country === 'at' || country === 'ch') return 'de';
    if (country === 'es' || country === 'mx' || country === 'ar') return 'es';
    if (country === 'fr' || country === 'be' || country === 'ca') return 'fr';

    // Then check language
    if (lang === 'de') return 'de';
    if (lang === 'es') return 'es';
    if (lang === 'fr') return 'fr';

    // Default to English
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

export interface AGBContent {
    title: string;
    lastUpdated: string;
    version: string;
    languageLabel: string;
    allRightsReserved: string;
    privacyLink: string;
    homeLink: string;
    disclaimer: string;
    severabilityNotice: {
        title: string;
        text: string;
    };
    contact: {
        title: string;
        text: string;
    };
    sections: Section[];
}

export const agbContent: Record<SupportedLanguage, AGBContent> = {
    // ==================== GERMAN ====================
    de: {
        title: 'Allgemeine Geschäftsbedingungen (AGB)',
        lastUpdated: 'Stand',
        version: 'Version',
        languageLabel: 'Sprache',
        allRightsReserved: 'Alle Rechte vorbehalten.',
        privacyLink: 'Datenschutz',
        homeLink: 'Startseite',
        disclaimer: '',
        severabilityNotice: {
            title: 'Salvatorische Klausel',
            text: 'Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt. Die unwirksame Bestimmung wird durch eine wirksame ersetzt, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.'
        },
        contact: {
            title: 'Kontakt',
            text: 'Bei Fragen zu diesen AGB wenden Sie sich bitte an:\n\nTim Heck KitchenHeroes Marke Serilo\nNeue Straße 19a, 35096 Weimar\nE-Mail: info@serilo.de'
        },
        sections: [
            {
                number: 1,
                title: 'Geltungsbereich',
                subsections: [
                    { number: 1, title: 'Anbieter', content: 'Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für die Nutzung der mobilen Applikation "Serilo" (nachfolgend "App") für iOS und Android.' },
                    { number: 2, title: 'Anwendungsbereich', content: 'Diese AGB regeln das Vertragsverhältnis zwischen dem Anbieter der App und den Nutzern. Mit der Installation, Registrierung oder Nutzung der App erklären Sie sich mit diesen AGB einverstanden.' },
                    { number: 3, title: 'Änderungen der AGB', content: 'Der Anbieter behält sich vor, diese AGB jederzeit zu ändern. Nutzer werden über Änderungen in der App informiert. Die fortgesetzte Nutzung der App nach Inkrafttreten der Änderungen gilt als Zustimmung.' }
                ]
            },
            {
                number: 2,
                title: 'Leistungsbeschreibung',
                subsections: [
                    { number: 1, title: 'Kernfunktionen', content: 'Serilo ist eine Outdoor- und Wellness-App mit folgenden Funktionen:', list: ['Routengenerierung: Automatische Erstellung von Spazier- und Wanderrouten', 'Walk-Tracking: GPS-basierte Aufzeichnung Ihrer Spaziergänge', 'Stimmungs-Tracking: Erfassung Ihrer Stimmung vor und nach Spaziergängen', 'Achievements & Badges: Gamification-Elemente zur Motivation', 'Statistiken & Insights: Auswertung Ihrer Aktivitäten'] },
                    { number: 2, title: 'Premium-Funktionen (Serilo+)', content: 'Zusätzliche Premium-Funktionen umfassen:', list: ['Tägliche Balance-Score-Analyse', 'Premium Scenic Routes mit POI-Integration', 'Vollständige Mood-Kurve (7 Tage)', 'Unbegrenzte Daten-Historie', 'Datenexport (CSV/PDF)'] },
                    { number: 3, title: 'Verfügbarkeit', content: 'Der Anbieter bemüht sich um eine hohe Verfügbarkeit der App, garantiert jedoch keine ununterbrochene Verfügbarkeit.' }
                ]
            },
            {
                number: 3,
                title: 'Registrierung und Nutzerkonto',
                subsections: [
                    { number: 1, title: 'Registrierung', content: 'Die Nutzung bestimmter Funktionen erfordert eine Registrierung über E-Mail, Google-Konto oder Apple-ID.' },
                    { number: 2, title: 'Angaben', content: 'Bei der Registrierung sind wahrheitsgemäße Angaben zu machen (Name/Pseudonym, E-Mail-Adresse).' },
                    { number: 3, title: 'Kontosicherheit', content: 'Der Nutzer ist für die Vertraulichkeit seiner Zugangsdaten verantwortlich.' },
                    { number: 4, title: 'Mindestalter', content: 'Die Nutzung ist Personen ab 16 Jahren gestattet. Bei Nutzern unter 18 Jahren ist die Zustimmung eines Erziehungsberechtigten erforderlich.' }
                ]
            },
            {
                number: 4,
                title: 'Routen und Navigation',
                subsections: [
                    { number: 1, title: 'Routengenerierung', content: 'Die App generiert Routen basierend auf Ihrem GPS-Standort und der gewünschten Dauer.' },
                    { number: 2, title: 'Wichtige Hinweise', content: 'DIE GENERIERTEN ROUTEN DIENEN AUSSCHLIESSLICH ALS VORSCHLÄGE UND ORIENTIERUNGSHILFE.', warning: 'Der Anbieter kann nicht garantieren, dass Routen über öffentliche Wege führen, gefahrlos begehbar sind oder die Kartendaten aktuell sind.' },
                    { number: 3, title: 'Eigenverantwortung', content: 'Der Nutzer trägt die volle Verantwortung für die Prüfung der Route, Beachtung örtlicher Gegebenheiten, Anpassung an Wetterbedingungen und die Einhaltung von Eigentums- und Betretungsrechten.' }
                ]
            },
            {
                number: 5,
                title: 'Gesundheit und körperliche Aktivität',
                subsections: [
                    { number: 1, title: 'Keine medizinische Beratung', content: 'Die App ist KEIN MEDIZINPRODUKT und ersetzt keine ärztliche Beratung.', warning: 'Die Stimmungserfassung und Aktivitätsstatistiken dienen ausschließlich zur persönlichen Reflexion und Motivation.' },
                    { number: 2, title: 'Haftungsausschluss', content: 'Der Anbieter übernimmt keine Haftung für Verletzungen, Unfälle oder Gesundheitsschäden, die im Zusammenhang mit der Nutzung der App entstehen.' },
                    { number: 3, title: 'Vor der Nutzung', content: 'Vor Beginn eines neuen Bewegungsprogramms sollten Nutzer bei bestehenden gesundheitlichen Einschränkungen einen Arzt konsultieren.' }
                ]
            },
            {
                number: 6,
                title: 'GPS und Standortdaten',
                subsections: [
                    { number: 1, title: 'GPS-Nutzung', content: 'Die App nutzt GPS zur Routengenerierung und zum Walk-Tracking. Die Genauigkeit kann variieren.' },
                    { number: 2, title: 'Hintergrund-Tracking', content: 'Mit Ihrer Zustimmung kann die App Ihren Standort auch im Hintergrund erfassen.' },
                    { number: 3, title: 'Keine Garantie', content: 'Der Anbieter garantiert keine bestimmte GPS-Genauigkeit.' }
                ]
            },
            {
                number: 7,
                title: 'Premium-Abonnements (Serilo+)',
                subsections: [
                    { number: 1, title: 'Verfügbare Abonnements', content: 'Serilo+ ist als monatliches oder jährliches Abonnement erhältlich. Preise werden vor dem Kauf angezeigt.' },
                    { number: 2, title: 'Zahlungsabwicklung', content: 'Die Zahlung erfolgt über Apple App Store (iOS) oder Google Play Store (Android).' },
                    { number: 3, title: 'Automatische Verlängerung', content: 'Abonnements verlängern sich automatisch, sofern nicht 24 Stunden vor Ablauf gekündigt wird.' },
                    { number: 4, title: 'Kündigung', content: 'Die Kündigung erfolgt über die Abo-Verwaltung des jeweiligen App Stores.' },
                    { number: 5, title: 'Widerrufsrecht', content: 'Bei digitalen Inhalten kann das Widerrufsrecht mit Ihrer Zustimmung vor Ablauf der Widerrufsfrist entfallen.' }
                ]
            },
            {
                number: 8,
                title: 'Nutzungspflichten',
                subsections: [
                    { number: 1, title: 'Erlaubte Nutzung', content: 'Die App darf ausschließlich für private, nicht-kommerzielle Zwecke genutzt werden.' },
                    { number: 2, title: 'Verbotene Nutzung', content: 'Untersagt sind:', list: ['Manipulation der App oder ihrer Systeme', 'Umgehung von Sicherheitsmaßnahmen', 'Reverse Engineering oder Dekompilierung', 'Nutzung für illegale Zwecke', 'Kommerzielle Nutzung ohne Genehmigung'] },
                    { number: 3, title: 'Verstöße', content: 'Bei Verstößen ist der Anbieter berechtigt, den Zugang zu sperren.' }
                ]
            },
            {
                number: 9,
                title: 'Geistiges Eigentum',
                subsections: [
                    { number: 1, title: 'Rechte des Anbieters', content: 'Alle Rechte an der App liegen beim Anbieter.' },
                    { number: 2, title: 'Nutzungsrechte', content: 'Mit der Installation erhält der Nutzer ein nicht-exklusives, nicht übertragbares Nutzungsrecht für private Zwecke.' }
                ]
            },
            {
                number: 10,
                title: 'Haftungsbeschränkung',
                subsections: [
                    { number: 1, title: 'Haftungsumfang', content: 'Der Anbieter haftet nur für Schäden bei Vorsatz oder grober Fahrlässigkeit. Bei leichter Fahrlässigkeit nur bei Verletzung wesentlicher Vertragspflichten.' },
                    { number: 2, title: 'Ausschluss', content: 'Der Anbieter haftet nicht für:', list: ['Schäden durch Nutzung von Routen', 'Gesundheitsschäden durch körperliche Aktivität', 'Schäden durch fehlerhafte GPS-Daten', 'Indirekte Schäden oder Datenverlust', 'Schäden durch höhere Gewalt'] },
                    { number: 3, title: 'Haftungshöhe', content: 'Die Haftung ist begrenzt auf den Betrag, den der Nutzer in den letzten 12 Monaten bezahlt hat.' }
                ]
            },
            {
                number: 11,
                title: 'Drittanbieter-Dienste',
                subsections: [
                    { number: 1, title: 'Verwendete Dienste', content: 'Die App nutzt folgende Drittanbieter:', list: ['Supabase: Datenbank und Authentifizierung', 'StadiaMaps/Valhalla: Routing', 'Mapbox: Kartendarstellung', 'RevenueCat: Abonnementverwaltung', 'PostHog: Anonymisierte Analyse (EU-Server)'] },
                    { number: 2, title: 'Nutzungsbedingungen', content: 'Für Drittanbieter-Dienste gelten ergänzend deren Nutzungsbedingungen.' }
                ]
            },
            {
                number: 12,
                title: 'Kontolöschung',
                subsections: [
                    { number: 1, title: 'Recht auf Löschung', content: 'Nutzer können ihr Konto jederzeit unter Profil → Einstellungen → Konto löschen anfordern.' },
                    { number: 2, title: 'Löschungsprozess', content: 'Die Löschung erfolgt gemäß DSGVO Art. 17 innerhalb von 30 Tagen.' }
                ]
            },
            {
                number: 13,
                title: 'Änderungen der App',
                subsections: [
                    { number: 1, title: 'Updates', content: 'Der Anbieter behält sich vor, die App jederzeit zu ändern oder einzuschränken.' },
                    { number: 2, title: 'Einstellung', content: 'Bei vollständiger Einstellung werden aktive Abonnements anteilig erstattet.' }
                ]
            },
            {
                number: 14,
                title: 'Schlussbestimmungen',
                subsections: [
                    { number: 1, title: 'Anwendbares Recht', content: 'Es gilt das Recht der Bundesrepublik Deutschland. Für Verbraucher gelten ergänzend die zwingenden Verbraucherschutzvorschriften ihres Wohnsitzlandes.' },
                    { number: 2, title: 'Gerichtsstand', content: 'Für Unternehmer ist der Sitz des Anbieters Gerichtsstand. Für Verbraucher gilt der gesetzliche Gerichtsstand.' },
                    { number: 3, title: 'Salvatorische Klausel', content: 'Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.' },
                    { number: 4, title: 'Online-Streitbeilegung', content: 'Die EU-Kommission stellt eine OS-Plattform bereit: https://ec.europa.eu/consumers/odr/' }
                ]
            }
        ]
    },

    // ==================== ENGLISH ====================
    en: {
        title: 'Terms and Conditions',
        lastUpdated: 'Last Updated',
        version: 'Version',
        languageLabel: 'Language',
        allRightsReserved: 'All rights reserved.',
        privacyLink: 'Privacy Policy',
        homeLink: 'Home',
        disclaimer: '',
        severabilityNotice: {
            title: 'Severability Clause',
            text: 'If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect. The invalid provision shall be replaced by a valid one that most closely reflects the economic purpose of the invalid provision.'
        },
        contact: {
            title: 'Contact',
            text: 'For questions about these Terms, please contact:\n\nTim Heck KitchenHeroes Marke Serilo\nNeue Straße 19a, 35096 Weimar\nE-Mail: info@serilo.de'
        },
        sections: [
            {
                number: 1,
                title: 'Scope of Application',
                subsections: [
                    { number: 1, title: 'Provider', content: 'These Terms and Conditions (hereinafter "Terms") apply to the use of the mobile application "Serilo" (hereinafter "App") for iOS and Android.' },
                    { number: 2, title: 'Application', content: 'These Terms govern the contractual relationship between the App provider and users. By installing, registering, or using the App, you agree to these Terms.' },
                    { number: 3, title: 'Changes to Terms', content: 'The provider reserves the right to modify these Terms at any time. Users will be notified of changes in the App. Continued use after changes take effect constitutes acceptance.' }
                ]
            },
            {
                number: 2,
                title: 'Service Description',
                subsections: [
                    { number: 1, title: 'Core Features', content: 'Serilo is an outdoor and wellness app with the following features:', list: ['Route Generation: Automatic creation of walking and hiking routes', 'Walk Tracking: GPS-based recording of your walks', 'Mood Tracking: Recording your mood before and after walks', 'Achievements & Badges: Gamification elements for motivation', 'Statistics & Insights: Analysis of your activities'] },
                    { number: 2, title: 'Premium Features (Serilo+)', content: 'Additional premium features include:', list: ['Daily Balance Score Analysis', 'Premium Scenic Routes with POI Integration', 'Complete Mood Curve (7 days)', 'Unlimited Data History', 'Data Export (CSV/PDF)'] },
                    { number: 3, title: 'Availability', content: 'The provider strives for high availability but does not guarantee uninterrupted access.' }
                ]
            },
            {
                number: 3,
                title: 'Registration and User Account',
                subsections: [
                    { number: 1, title: 'Registration', content: 'Certain features require registration via email, Google account, or Apple ID.' },
                    { number: 2, title: 'Information', content: 'Truthful information must be provided during registration (name/pseudonym, email address).' },
                    { number: 3, title: 'Account Security', content: 'Users are responsible for keeping their login credentials confidential.' },
                    { number: 4, title: 'Minimum Age', content: 'Use is permitted for persons 16 years and older. Users under 18 require parental consent.' }
                ]
            },
            {
                number: 4,
                title: 'Routes and Navigation',
                subsections: [
                    { number: 1, title: 'Route Generation', content: 'The App generates routes based on your GPS location and desired duration.' },
                    { number: 2, title: 'Important Notice', content: 'GENERATED ROUTES ARE SUGGESTIONS AND GUIDANCE ONLY.', warning: 'The provider cannot guarantee that routes follow public paths, are safe to walk, or that map data is current.' },
                    { number: 3, title: 'User Responsibility', content: 'Users bear full responsibility for checking routes, observing local conditions, adapting to weather, and respecting property rights.' }
                ]
            },
            {
                number: 5,
                title: 'Health and Physical Activity',
                subsections: [
                    { number: 1, title: 'No Medical Advice', content: 'The App is NOT A MEDICAL DEVICE and does not replace medical consultation.', warning: 'Mood tracking and activity statistics are for personal reflection and motivation only.' },
                    { number: 2, title: 'Liability Disclaimer', content: 'The provider assumes no liability for injuries, accidents, or health issues arising from App use.' },
                    { number: 3, title: 'Before Use', content: 'Users with health conditions should consult a doctor before starting a new exercise program.' }
                ]
            },
            {
                number: 6,
                title: 'GPS and Location Data',
                subsections: [
                    { number: 1, title: 'GPS Usage', content: 'The App uses GPS for route generation and walk tracking. Accuracy may vary.' },
                    { number: 2, title: 'Background Tracking', content: 'With your consent, the App may track your location in the background.' },
                    { number: 3, title: 'No Guarantee', content: 'The provider does not guarantee specific GPS accuracy.' }
                ]
            },
            {
                number: 7,
                title: 'Premium Subscriptions (Serilo+)',
                subsections: [
                    { number: 1, title: 'Available Subscriptions', content: 'Serilo+ is available as monthly or yearly subscription. Prices are displayed before purchase.' },
                    { number: 2, title: 'Payment', content: 'Payment is processed through Apple App Store (iOS) or Google Play Store (Android).' },
                    { number: 3, title: 'Auto-Renewal', content: 'Subscriptions renew automatically unless cancelled at least 24 hours before expiration.' },
                    { number: 4, title: 'Cancellation', content: 'Cancellation is done through the respective App Store subscription management.' },
                    { number: 5, title: 'Right of Withdrawal', content: 'For digital content, the right of withdrawal may expire with your consent before the withdrawal period ends.' }
                ]
            },
            {
                number: 8,
                title: 'Usage Obligations',
                subsections: [
                    { number: 1, title: 'Permitted Use', content: 'The App may only be used for private, non-commercial purposes.' },
                    { number: 2, title: 'Prohibited Use', content: 'The following are prohibited:', list: ['Manipulation of the App or its systems', 'Circumventing security measures', 'Reverse engineering or decompilation', 'Use for illegal purposes', 'Commercial use without permission'] },
                    { number: 3, title: 'Violations', content: 'The provider may block access in case of violations.' }
                ]
            },
            {
                number: 9,
                title: 'Intellectual Property',
                subsections: [
                    { number: 1, title: 'Provider Rights', content: 'All rights to the App belong to the provider.' },
                    { number: 2, title: 'User Rights', content: 'Installation grants users a non-exclusive, non-transferable license for private use.' }
                ]
            },
            {
                number: 10,
                title: 'Limitation of Liability',
                subsections: [
                    { number: 1, title: 'Scope', content: 'The provider is only liable for damages caused by intent or gross negligence. For slight negligence, only for breach of essential contractual obligations.' },
                    { number: 2, title: 'Exclusions', content: 'The provider is not liable for:', list: ['Damages from route usage', 'Health issues from physical activity', 'Damages from faulty GPS data', 'Indirect damages or data loss', 'Damages from force majeure'] },
                    { number: 3, title: 'Liability Cap', content: 'Liability is limited to the amount paid by the user in the last 12 months.' }
                ]
            },
            {
                number: 11,
                title: 'Third-Party Services',
                subsections: [
                    { number: 1, title: 'Services Used', content: 'The App uses the following third-party services:', list: ['Supabase: Database and authentication', 'StadiaMaps/Valhalla: Routing', 'Mapbox: Map display', 'RevenueCat: Subscription management', 'PostHog: Anonymous analytics (EU servers)'] },
                    { number: 2, title: 'Terms', content: 'Third-party service terms additionally apply.' }
                ]
            },
            {
                number: 12,
                title: 'Account Deletion',
                subsections: [
                    { number: 1, title: 'Right to Deletion', content: 'Users can request account deletion at any time under Profile → Settings → Delete Account.' },
                    { number: 2, title: 'Deletion Process', content: 'Deletion occurs within 30 days in accordance with GDPR Art. 17.' }
                ]
            },
            {
                number: 13,
                title: 'App Changes',
                subsections: [
                    { number: 1, title: 'Updates', content: 'The provider reserves the right to modify or limit the App at any time.' },
                    { number: 2, title: 'Discontinuation', content: 'Active subscriptions will be prorated upon complete discontinuation.' }
                ]
            },
            {
                number: 14,
                title: 'Final Provisions',
                subsections: [
                    { number: 1, title: 'Applicable Law', content: 'German law applies. For consumers, mandatory consumer protection laws of their country of residence additionally apply.' },
                    { number: 2, title: 'Jurisdiction', content: 'For businesses, the provider\'s registered office is the place of jurisdiction. For consumers, statutory jurisdiction applies.' },
                    { number: 3, title: 'Severability', content: 'If any provision of these Terms is invalid, the remaining provisions remain unaffected.' },
                    { number: 4, title: 'Online Dispute Resolution', content: 'The EU Commission provides an ODR platform: https://ec.europa.eu/consumers/odr/' }
                ]
            }
        ]
    },

    // ==================== SPANISH ====================
    es: {
        title: 'Términos y Condiciones',
        lastUpdated: 'Última actualización',
        version: 'Versión',
        languageLabel: 'Idioma',
        allRightsReserved: 'Todos los derechos reservados.',
        privacyLink: 'Política de Privacidad',
        homeLink: 'Inicio',
        disclaimer: '',
        severabilityNotice: {
            title: 'Cláusula de Salvaguarda',
            text: 'Si alguna disposición de estos Términos resulta inválida o inaplicable, las disposiciones restantes permanecerán en pleno vigor y efecto. La disposición inválida será reemplazada por una válida que refleje más fielmente el propósito económico de la disposición inválida.'
        },
        contact: {
            title: 'Contacto',
            text: 'Para preguntas sobre estos Términos, por favor contacte:\n\nTim Heck KitchenHeroes Marke Serilo\nNeue Straße 19a, 35096 Weimar\nE-Mail: info@serilo.de'
        },
        sections: [
            {
                number: 1,
                title: 'Ámbito de Aplicación',
                subsections: [
                    { number: 1, title: 'Proveedor', content: 'Estos Términos y Condiciones (en adelante "Términos") se aplican al uso de la aplicación móvil "Serilo" (en adelante "App") para iOS y Android.' },
                    { number: 2, title: 'Aplicación', content: 'Estos Términos regulan la relación contractual entre el proveedor de la App y los usuarios. Al instalar, registrarse o usar la App, usted acepta estos Términos.' },
                    { number: 3, title: 'Cambios en los Términos', content: 'El proveedor se reserva el derecho de modificar estos Términos en cualquier momento. Los usuarios serán notificados de los cambios en la App.' }
                ]
            },
            {
                number: 2,
                title: 'Descripción del Servicio',
                subsections: [
                    { number: 1, title: 'Funciones Principales', content: 'Serilo es una aplicación de bienestar y actividades al aire libre con las siguientes funciones:', list: ['Generación de Rutas: Creación automática de rutas para caminar', 'Seguimiento de Caminatas: Registro GPS de tus caminatas', 'Seguimiento del Estado de Ánimo: Registro de tu estado de ánimo', 'Logros e Insignias: Elementos de gamificación', 'Estadísticas e Información: Análisis de tus actividades'] },
                    { number: 2, title: 'Funciones Premium (Serilo+)', content: 'Las funciones premium adicionales incluyen:', list: ['Análisis diario de Balance Score', 'Rutas Scenic Premium con integración de POI', 'Curva de Estado de Ánimo completa (7 días)', 'Historial de datos ilimitado', 'Exportación de datos (CSV/PDF)'] },
                    { number: 3, title: 'Disponibilidad', content: 'El proveedor se esfuerza por una alta disponibilidad pero no garantiza acceso ininterrumpido.' }
                ]
            },
            {
                number: 3,
                title: 'Registro y Cuenta de Usuario',
                subsections: [
                    { number: 1, title: 'Registro', content: 'Ciertas funciones requieren registro mediante correo electrónico, cuenta de Google o Apple ID.' },
                    { number: 2, title: 'Información', content: 'Se debe proporcionar información veraz durante el registro (nombre/seudónimo, correo electrónico).' },
                    { number: 3, title: 'Seguridad de la Cuenta', content: 'Los usuarios son responsables de mantener confidenciales sus credenciales de acceso.' },
                    { number: 4, title: 'Edad Mínima', content: 'El uso está permitido para personas de 16 años o más. Los menores de 18 años requieren consentimiento de los padres.' }
                ]
            },
            {
                number: 4,
                title: 'Rutas y Navegación',
                subsections: [
                    { number: 1, title: 'Generación de Rutas', content: 'La App genera rutas basadas en su ubicación GPS y duración deseada.' },
                    { number: 2, title: 'Aviso Importante', content: 'LAS RUTAS GENERADAS SON SOLO SUGERENCIAS Y ORIENTACIÓN.', warning: 'El proveedor no puede garantizar que las rutas sigan caminos públicos, sean seguras o que los datos del mapa estén actualizados.' },
                    { number: 3, title: 'Responsabilidad del Usuario', content: 'Los usuarios asumen toda la responsabilidad de verificar las rutas, observar las condiciones locales y respetar los derechos de propiedad.' }
                ]
            },
            {
                number: 5,
                title: 'Salud y Actividad Física',
                subsections: [
                    { number: 1, title: 'Sin Consejo Médico', content: 'La App NO ES UN DISPOSITIVO MÉDICO y no reemplaza la consulta médica.', warning: 'El seguimiento del estado de ánimo y las estadísticas de actividad son solo para reflexión personal y motivación.' },
                    { number: 2, title: 'Descargo de Responsabilidad', content: 'El proveedor no asume responsabilidad por lesiones, accidentes o problemas de salud derivados del uso de la App.' },
                    { number: 3, title: 'Antes del Uso', content: 'Los usuarios con condiciones de salud deben consultar a un médico antes de comenzar un nuevo programa de ejercicios.' }
                ]
            },
            {
                number: 6,
                title: 'GPS y Datos de Ubicación',
                subsections: [
                    { number: 1, title: 'Uso de GPS', content: 'La App usa GPS para la generación de rutas y el seguimiento de caminatas. La precisión puede variar.' },
                    { number: 2, title: 'Seguimiento en Segundo Plano', content: 'Con su consentimiento, la App puede rastrear su ubicación en segundo plano.' },
                    { number: 3, title: 'Sin Garantía', content: 'El proveedor no garantiza una precisión GPS específica.' }
                ]
            },
            {
                number: 7,
                title: 'Suscripciones Premium (Serilo+)',
                subsections: [
                    { number: 1, title: 'Suscripciones Disponibles', content: 'Serilo+ está disponible como suscripción mensual o anual. Los precios se muestran antes de la compra.' },
                    { number: 2, title: 'Pago', content: 'El pago se procesa a través de Apple App Store (iOS) o Google Play Store (Android).' },
                    { number: 3, title: 'Renovación Automática', content: 'Las suscripciones se renuevan automáticamente a menos que se cancelen al menos 24 horas antes del vencimiento.' },
                    { number: 4, title: 'Cancelación', content: 'La cancelación se realiza a través de la gestión de suscripciones de la App Store correspondiente.' },
                    { number: 5, title: 'Derecho de Desistimiento', content: 'Para contenido digital, el derecho de desistimiento puede expirar con su consentimiento antes de que termine el período de desistimiento.' }
                ]
            },
            {
                number: 8,
                title: 'Obligaciones de Uso',
                subsections: [
                    { number: 1, title: 'Uso Permitido', content: 'La App solo puede usarse para fines privados y no comerciales.' },
                    { number: 2, title: 'Uso Prohibido', content: 'Está prohibido:', list: ['Manipulación de la App o sus sistemas', 'Eludir medidas de seguridad', 'Ingeniería inversa o descompilación', 'Uso para fines ilegales', 'Uso comercial sin permiso'] },
                    { number: 3, title: 'Violaciones', content: 'El proveedor puede bloquear el acceso en caso de violaciones.' }
                ]
            },
            {
                number: 9,
                title: 'Propiedad Intelectual',
                subsections: [
                    { number: 1, title: 'Derechos del Proveedor', content: 'Todos los derechos de la App pertenecen al proveedor.' },
                    { number: 2, title: 'Derechos del Usuario', content: 'La instalación otorga a los usuarios una licencia no exclusiva e intransferible para uso privado.' }
                ]
            },
            {
                number: 10,
                title: 'Limitación de Responsabilidad',
                subsections: [
                    { number: 1, title: 'Alcance', content: 'El proveedor solo es responsable por daños causados por dolo o negligencia grave.' },
                    { number: 2, title: 'Exclusiones', content: 'El proveedor no es responsable de:', list: ['Daños por uso de rutas', 'Problemas de salud por actividad física', 'Daños por datos GPS defectuosos', 'Daños indirectos o pérdida de datos', 'Daños por fuerza mayor'] },
                    { number: 3, title: 'Límite de Responsabilidad', content: 'La responsabilidad está limitada al monto pagado por el usuario en los últimos 12 meses.' }
                ]
            },
            {
                number: 11,
                title: 'Servicios de Terceros',
                subsections: [
                    { number: 1, title: 'Servicios Utilizados', content: 'La App utiliza los siguientes servicios de terceros:', list: ['Supabase: Base de datos y autenticación', 'StadiaMaps/Valhalla: Enrutamiento', 'Mapbox: Visualización de mapas', 'RevenueCat: Gestión de suscripciones', 'PostHog: Análisis anónimo (servidores UE)'] },
                    { number: 2, title: 'Términos', content: 'Los términos de servicios de terceros también aplican.' }
                ]
            },
            {
                number: 12,
                title: 'Eliminación de Cuenta',
                subsections: [
                    { number: 1, title: 'Derecho a Eliminación', content: 'Los usuarios pueden solicitar la eliminación de su cuenta en Perfil → Configuración → Eliminar Cuenta.' },
                    { number: 2, title: 'Proceso de Eliminación', content: 'La eliminación se realiza dentro de 30 días de acuerdo con el RGPD Art. 17.' }
                ]
            },
            {
                number: 13,
                title: 'Cambios en la App',
                subsections: [
                    { number: 1, title: 'Actualizaciones', content: 'El proveedor se reserva el derecho de modificar o limitar la App en cualquier momento.' },
                    { number: 2, title: 'Discontinuación', content: 'Las suscripciones activas se prorratearán en caso de discontinuación completa.' }
                ]
            },
            {
                number: 14,
                title: 'Disposiciones Finales',
                subsections: [
                    { number: 1, title: 'Ley Aplicable', content: 'Se aplica la ley alemana. Para consumidores, también aplican las leyes de protección al consumidor de su país de residencia.' },
                    { number: 2, title: 'Jurisdicción', content: 'Para empresas, la sede del proveedor es el lugar de jurisdicción. Para consumidores, aplica la jurisdicción legal.' },
                    { number: 3, title: 'Divisibilidad', content: 'Si alguna disposición de estos Términos es inválida, las disposiciones restantes no se ven afectadas.' },
                    { number: 4, title: 'Resolución de Disputas en Línea', content: 'La Comisión de la UE proporciona una plataforma ODR: https://ec.europa.eu/consumers/odr/' }
                ]
            }
        ]
    },

    // ==================== FRENCH ====================
    fr: {
        title: 'Conditions Générales d\'Utilisation',
        lastUpdated: 'Dernière mise à jour',
        version: 'Version',
        languageLabel: 'Langue',
        allRightsReserved: 'Tous droits réservés.',
        privacyLink: 'Politique de Confidentialité',
        homeLink: 'Accueil',
        disclaimer: '',
        severabilityNotice: {
            title: 'Clause de Sauvegarde',
            text: 'Si une disposition des présentes Conditions est jugée invalide ou inapplicable, les autres dispositions resteront pleinement en vigueur. La disposition invalide sera remplacée par une disposition valide qui reflète au mieux l\'objectif économique de la disposition invalide.'
        },
        contact: {
            title: 'Contact',
            text: 'Pour toute question concernant ces Conditions, veuillez contacter :\n\nTim Heck KitchenHeroes Marke Serilo\nNeue Straße 19a, 35096 Weimar\nE-Mail: info@serilo.de'
        },
        sections: [
            {
                number: 1,
                title: 'Champ d\'Application',
                subsections: [
                    { number: 1, title: 'Fournisseur', content: 'Les présentes Conditions Générales d\'Utilisation (ci-après "Conditions") s\'appliquent à l\'utilisation de l\'application mobile "Serilo" (ci-après "App") pour iOS et Android.' },
                    { number: 2, title: 'Application', content: 'Ces Conditions régissent la relation contractuelle entre le fournisseur de l\'App et les utilisateurs. En installant, vous inscrivant ou utilisant l\'App, vous acceptez ces Conditions.' },
                    { number: 3, title: 'Modifications des Conditions', content: 'Le fournisseur se réserve le droit de modifier ces Conditions à tout moment. Les utilisateurs seront informés des changements dans l\'App.' }
                ]
            },
            {
                number: 2,
                title: 'Description du Service',
                subsections: [
                    { number: 1, title: 'Fonctionnalités Principales', content: 'Serilo est une application de bien-être et d\'activités en plein air avec les fonctionnalités suivantes :', list: ['Génération d\'Itinéraires : Création automatique d\'itinéraires de marche', 'Suivi de Marche : Enregistrement GPS de vos promenades', 'Suivi de l\'Humeur : Enregistrement de votre humeur', 'Succès et Badges : Éléments de gamification', 'Statistiques et Insights : Analyse de vos activités'] },
                    { number: 2, title: 'Fonctionnalités Premium (Serilo+)', content: 'Les fonctionnalités premium supplémentaires incluent :', list: ['Analyse quotidienne du Balance Score', 'Routes Scenic Premium avec intégration POI', 'Courbe d\'Humeur complète (7 jours)', 'Historique de données illimité', 'Export de données (CSV/PDF)'] },
                    { number: 3, title: 'Disponibilité', content: 'Le fournisseur s\'efforce d\'assurer une haute disponibilité mais ne garantit pas un accès ininterrompu.' }
                ]
            },
            {
                number: 3,
                title: 'Inscription et Compte Utilisateur',
                subsections: [
                    { number: 1, title: 'Inscription', content: 'Certaines fonctionnalités nécessitent une inscription via e-mail, compte Google ou Apple ID.' },
                    { number: 2, title: 'Informations', content: 'Des informations véridiques doivent être fournies lors de l\'inscription (nom/pseudonyme, adresse e-mail).' },
                    { number: 3, title: 'Sécurité du Compte', content: 'Les utilisateurs sont responsables de la confidentialité de leurs identifiants de connexion.' },
                    { number: 4, title: 'Âge Minimum', content: 'L\'utilisation est autorisée pour les personnes de 16 ans et plus. Les mineurs de moins de 18 ans nécessitent le consentement parental.' }
                ]
            },
            {
                number: 4,
                title: 'Itinéraires et Navigation',
                subsections: [
                    { number: 1, title: 'Génération d\'Itinéraires', content: 'L\'App génère des itinéraires basés sur votre position GPS et la durée souhaitée.' },
                    { number: 2, title: 'Avis Important', content: 'LES ITINÉRAIRES GÉNÉRÉS SONT UNIQUEMENT DES SUGGESTIONS ET DES ORIENTATIONS.', warning: 'Le fournisseur ne peut garantir que les itinéraires suivent des chemins publics, sont sûrs à parcourir ou que les données cartographiques sont à jour.' },
                    { number: 3, title: 'Responsabilité de l\'Utilisateur', content: 'Les utilisateurs assument l\'entière responsabilité de vérifier les itinéraires, d\'observer les conditions locales et de respecter les droits de propriété.' }
                ]
            },
            {
                number: 5,
                title: 'Santé et Activité Physique',
                subsections: [
                    { number: 1, title: 'Pas de Conseil Médical', content: 'L\'App N\'EST PAS UN DISPOSITIF MÉDICAL et ne remplace pas une consultation médicale.', warning: 'Le suivi de l\'humeur et les statistiques d\'activité sont uniquement destinés à la réflexion personnelle et à la motivation.' },
                    { number: 2, title: 'Clause de Non-Responsabilité', content: 'Le fournisseur n\'assume aucune responsabilité pour les blessures, accidents ou problèmes de santé résultant de l\'utilisation de l\'App.' },
                    { number: 3, title: 'Avant Utilisation', content: 'Les utilisateurs ayant des problèmes de santé doivent consulter un médecin avant de commencer un nouveau programme d\'exercices.' }
                ]
            },
            {
                number: 6,
                title: 'GPS et Données de Localisation',
                subsections: [
                    { number: 1, title: 'Utilisation du GPS', content: 'L\'App utilise le GPS pour la génération d\'itinéraires et le suivi de marche. La précision peut varier.' },
                    { number: 2, title: 'Suivi en Arrière-Plan', content: 'Avec votre consentement, l\'App peut suivre votre position en arrière-plan.' },
                    { number: 3, title: 'Aucune Garantie', content: 'Le fournisseur ne garantit pas une précision GPS spécifique.' }
                ]
            },
            {
                number: 7,
                title: 'Abonnements Premium (Serilo+)',
                subsections: [
                    { number: 1, title: 'Abonnements Disponibles', content: 'Serilo+ est disponible en abonnement mensuel ou annuel. Les prix sont affichés avant l\'achat.' },
                    { number: 2, title: 'Paiement', content: 'Le paiement est traité via Apple App Store (iOS) ou Google Play Store (Android).' },
                    { number: 3, title: 'Renouvellement Automatique', content: 'Les abonnements se renouvellent automatiquement sauf annulation au moins 24 heures avant l\'expiration.' },
                    { number: 4, title: 'Annulation', content: 'L\'annulation s\'effectue via la gestion des abonnements de l\'App Store concerné.' },
                    { number: 5, title: 'Droit de Rétractation', content: 'Pour le contenu numérique, le droit de rétractation peut expirer avec votre consentement avant la fin du délai de rétractation.' }
                ]
            },
            {
                number: 8,
                title: 'Obligations d\'Utilisation',
                subsections: [
                    { number: 1, title: 'Utilisation Autorisée', content: 'L\'App ne peut être utilisée qu\'à des fins privées et non commerciales.' },
                    { number: 2, title: 'Utilisation Interdite', content: 'Les éléments suivants sont interdits :', list: ['Manipulation de l\'App ou de ses systèmes', 'Contournement des mesures de sécurité', 'Rétro-ingénierie ou décompilation', 'Utilisation à des fins illégales', 'Utilisation commerciale sans autorisation'] },
                    { number: 3, title: 'Violations', content: 'Le fournisseur peut bloquer l\'accès en cas de violations.' }
                ]
            },
            {
                number: 9,
                title: 'Propriété Intellectuelle',
                subsections: [
                    { number: 1, title: 'Droits du Fournisseur', content: 'Tous les droits sur l\'App appartiennent au fournisseur.' },
                    { number: 2, title: 'Droits de l\'Utilisateur', content: 'L\'installation accorde aux utilisateurs une licence non exclusive et non transférable pour un usage privé.' }
                ]
            },
            {
                number: 10,
                title: 'Limitation de Responsabilité',
                subsections: [
                    { number: 1, title: 'Portée', content: 'Le fournisseur n\'est responsable que des dommages causés par une intention délibérée ou une négligence grave.' },
                    { number: 2, title: 'Exclusions', content: 'Le fournisseur n\'est pas responsable de :', list: ['Dommages liés à l\'utilisation des itinéraires', 'Problèmes de santé liés à l\'activité physique', 'Dommages liés à des données GPS défectueuses', 'Dommages indirects ou perte de données', 'Dommages dus à un cas de force majeure'] },
                    { number: 3, title: 'Plafond de Responsabilité', content: 'La responsabilité est limitée au montant payé par l\'utilisateur au cours des 12 derniers mois.' }
                ]
            },
            {
                number: 11,
                title: 'Services Tiers',
                subsections: [
                    { number: 1, title: 'Services Utilisés', content: 'L\'App utilise les services tiers suivants :', list: ['Supabase : Base de données et authentification', 'StadiaMaps/Valhalla : Routage', 'Mapbox : Affichage de cartes', 'RevenueCat : Gestion des abonnements', 'PostHog : Analyse anonyme (serveurs UE)'] },
                    { number: 2, title: 'Conditions', content: 'Les conditions des services tiers s\'appliquent également.' }
                ]
            },
            {
                number: 12,
                title: 'Suppression de Compte',
                subsections: [
                    { number: 1, title: 'Droit à la Suppression', content: 'Les utilisateurs peuvent demander la suppression de leur compte dans Profil → Paramètres → Supprimer le Compte.' },
                    { number: 2, title: 'Processus de Suppression', content: 'La suppression s\'effectue dans les 30 jours conformément à l\'article 17 du RGPD.' }
                ]
            },
            {
                number: 13,
                title: 'Modifications de l\'App',
                subsections: [
                    { number: 1, title: 'Mises à Jour', content: 'Le fournisseur se réserve le droit de modifier ou de limiter l\'App à tout moment.' },
                    { number: 2, title: 'Arrêt', content: 'Les abonnements actifs seront remboursés au prorata en cas d\'arrêt complet.' }
                ]
            },
            {
                number: 14,
                title: 'Dispositions Finales',
                subsections: [
                    { number: 1, title: 'Droit Applicable', content: 'Le droit allemand s\'applique. Pour les consommateurs, les lois de protection des consommateurs de leur pays de résidence s\'appliquent également.' },
                    { number: 2, title: 'Juridiction', content: 'Pour les entreprises, le siège du fournisseur est le lieu de juridiction. Pour les consommateurs, la juridiction légale s\'applique.' },
                    { number: 3, title: 'Divisibilité', content: 'Si une disposition des présentes Conditions est invalide, les autres dispositions restent non affectées.' },
                    { number: 4, title: 'Résolution des Litiges en Ligne', content: 'La Commission européenne fournit une plateforme RLL : https://ec.europa.eu/consumers/odr/' }
                ]
            }
        ]
    }
};
