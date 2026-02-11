export type SupportedLanguage = 'de' | 'en' | 'es' | 'fr';

export function getLanguageFromLocale(locale: string): SupportedLanguage {
    const lang = locale.split('-')[0].toLowerCase();
    if (lang === 'de') return 'de';
    if (lang === 'es') return 'es';
    if (lang === 'fr') return 'fr';
    return 'en';
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface SupportContent {
    languageLabel: string;
    title: string;
    subtitle: string;
    contactTitle: string;
    contactText: string;
    emailLabel: string;
    responseTime: string;
    faqTitle: string;
    faqSubtitle: string;
    faq: FAQItem[];
    contactFormTitle: string;
    contactFormSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailInputLabel: string;
    emailInputPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    sendingButton: string;
    successMessage: string;
    errorMessage: string;
    privacyLink: string;
    agbLink: string;
    homeLink: string;
    allRightsReserved: string;
}

export const supportContent: Record<SupportedLanguage, SupportContent> = {
    de: {
        languageLabel: 'Sprache',
        title: 'Support & Hilfe',
        subtitle: 'Wir sind für dich da. Finde Antworten auf häufige Fragen oder kontaktiere uns direkt.',
        contactTitle: 'Kontakt',
        contactText: 'Unser Support-Team hilft dir gerne bei allen Fragen rund um Serilo.',
        emailLabel: 'E-Mail Support',
        responseTime: 'Antwortzeit: Innerhalb von 24 Stunden',
        faqTitle: 'Häufig gestellte Fragen',
        faqSubtitle: 'Hier findest du Antworten auf die häufigsten Fragen.',
        faq: [
            {
                question: 'Was ist Serilo?',
                answer: 'Serilo ist eine innovative Navigations-App, die dir hilft, sicher und effizient an dein Ziel zu kommen. Mit intelligenter Routenplanung und Echtzeit-Updates bieten wir dir das beste Navigationserlebnis.'
            },
            {
                question: 'Auf welchen Geräten kann ich Serilo nutzen?',
                answer: 'Serilo ist derzeit für iOS verfügbar. Eine Android-Version ist in Planung. Du benötigst iOS 16 oder höher, um die App nutzen zu können.'
            },
            {
                question: 'Ist Serilo kostenlos?',
                answer: 'Serilo bietet eine kostenlose Testphase an. Danach kannst du zwischen verschiedenen Abonnement-Optionen wählen. Details findest du in der App unter den Einstellungen.'
            },
            {
                question: 'Wie kann ich mein Konto löschen?',
                answer: 'Du kannst dein Konto jederzeit in der App unter Profil → Einstellungen → Konto löschen entfernen. Alle deine Daten werden dann innerhalb von 30 Tagen vollständig gelöscht.'
            },
            {
                question: 'Welche Berechtigungen benötigt die App?',
                answer: 'Serilo benötigt Zugriff auf deinen Standort, um dir Navigationsanweisungen geben zu können. Die Standortdaten werden nur während der aktiven Navigation verwendet und nicht an Dritte weitergegeben.'
            },
            {
                question: 'Wie kann ich mein Abonnement kündigen?',
                answer: 'Du kannst dein Abonnement jederzeit über die Einstellungen deines Apple-Kontos verwalten und kündigen. Gehe dazu auf deinem iPhone zu Einstellungen → Apple-ID → Abonnements.'
            },
            {
                question: 'Ich habe ein technisches Problem. Was soll ich tun?',
                answer: 'Bitte kontaktiere unser Support-Team per E-Mail an info@serilo.de. Beschreibe dein Problem so genau wie möglich und teile uns dein Gerätemodell und die iOS-Version mit.'
            }
        ],
        contactFormTitle: 'Nachricht senden',
        contactFormSubtitle: 'Hast du eine Frage, die hier nicht beantwortet wird? Schreib uns!',
        nameLabel: 'Name',
        namePlaceholder: 'Dein Name',
        emailInputLabel: 'E-Mail',
        emailInputPlaceholder: 'deine@email.de',
        subjectLabel: 'Betreff',
        subjectPlaceholder: 'Worum geht es?',
        messageLabel: 'Nachricht',
        messagePlaceholder: 'Beschreibe dein Anliegen...',
        sendButton: 'Nachricht senden',
        sendingButton: 'Wird gesendet...',
        successMessage: 'Deine Nachricht wurde erfolgreich gesendet! Wir melden uns in Kürze bei dir.',
        errorMessage: 'Es gab einen Fehler. Bitte sende deine Anfrage direkt an info@serilo.de.',
        privacyLink: 'Datenschutz',
        agbLink: 'AGB',
        homeLink: 'Startseite',
        allRightsReserved: 'Alle Rechte vorbehalten.'
    },
    en: {
        languageLabel: 'Language',
        title: 'Support & Help',
        subtitle: 'We\'re here to help. Find answers to common questions or contact us directly.',
        contactTitle: 'Contact',
        contactText: 'Our support team is happy to assist you with any questions about Serilo.',
        emailLabel: 'Email Support',
        responseTime: 'Response time: Within 24 hours',
        faqTitle: 'Frequently Asked Questions',
        faqSubtitle: 'Find answers to the most common questions here.',
        faq: [
            {
                question: 'What is Serilo?',
                answer: 'Serilo is an innovative navigation app that helps you reach your destination safely and efficiently. With intelligent route planning and real-time updates, we provide you with the best navigation experience.'
            },
            {
                question: 'On which devices can I use Serilo?',
                answer: 'Serilo is currently available for iOS. An Android version is planned. You need iOS 16 or later to use the app.'
            },
            {
                question: 'Is Serilo free?',
                answer: 'Serilo offers a free trial period. After that, you can choose from various subscription options. You can find details in the app under Settings.'
            },
            {
                question: 'How can I delete my account?',
                answer: 'You can delete your account at any time in the app under Profile → Settings → Delete Account. All your data will be completely deleted within 30 days.'
            },
            {
                question: 'What permissions does the app require?',
                answer: 'Serilo requires access to your location to provide navigation instructions. Location data is only used during active navigation and is not shared with third parties.'
            },
            {
                question: 'How can I cancel my subscription?',
                answer: 'You can manage and cancel your subscription at any time through your Apple account settings. Go to Settings → Apple ID → Subscriptions on your iPhone.'
            },
            {
                question: 'I have a technical problem. What should I do?',
                answer: 'Please contact our support team via email at info@serilo.de. Describe your problem as precisely as possible and let us know your device model and iOS version.'
            }
        ],
        contactFormTitle: 'Send a Message',
        contactFormSubtitle: 'Have a question that isn\'t answered here? Write to us!',
        nameLabel: 'Name',
        namePlaceholder: 'Your name',
        emailInputLabel: 'Email',
        emailInputPlaceholder: 'your@email.com',
        subjectLabel: 'Subject',
        subjectPlaceholder: 'What is it about?',
        messageLabel: 'Message',
        messagePlaceholder: 'Describe your concern...',
        sendButton: 'Send Message',
        sendingButton: 'Sending...',
        successMessage: 'Your message has been sent successfully! We\'ll get back to you shortly.',
        errorMessage: 'There was an error. Please send your request directly to info@serilo.de.',
        privacyLink: 'Privacy Policy',
        agbLink: 'Terms of Service',
        homeLink: 'Home',
        allRightsReserved: 'All rights reserved.'
    },
    es: {
        languageLabel: 'Idioma',
        title: 'Soporte y Ayuda',
        subtitle: 'Estamos aquí para ayudarte. Encuentra respuestas a preguntas frecuentes o contáctanos directamente.',
        contactTitle: 'Contacto',
        contactText: 'Nuestro equipo de soporte está encantado de ayudarte con cualquier pregunta sobre Serilo.',
        emailLabel: 'Soporte por Email',
        responseTime: 'Tiempo de respuesta: Dentro de 24 horas',
        faqTitle: 'Preguntas Frecuentes',
        faqSubtitle: 'Encuentra aquí las respuestas a las preguntas más comunes.',
        faq: [
            {
                question: '¿Qué es Serilo?',
                answer: 'Serilo es una aplicación de navegación innovadora que te ayuda a llegar a tu destino de forma segura y eficiente. Con planificación inteligente de rutas y actualizaciones en tiempo real, te ofrecemos la mejor experiencia de navegación.'
            },
            {
                question: '¿En qué dispositivos puedo usar Serilo?',
                answer: 'Serilo está disponible actualmente para iOS. Se está planificando una versión para Android. Necesitas iOS 16 o superior para usar la aplicación.'
            },
            {
                question: '¿Es Serilo gratuito?',
                answer: 'Serilo ofrece un período de prueba gratuito. Después, puedes elegir entre varias opciones de suscripción. Puedes encontrar detalles en la aplicación en Configuración.'
            },
            {
                question: '¿Cómo puedo eliminar mi cuenta?',
                answer: 'Puedes eliminar tu cuenta en cualquier momento en la aplicación en Perfil → Configuración → Eliminar cuenta. Todos tus datos se eliminarán completamente en un plazo de 30 días.'
            },
            {
                question: '¿Qué permisos requiere la aplicación?',
                answer: 'Serilo requiere acceso a tu ubicación para proporcionar instrucciones de navegación. Los datos de ubicación solo se utilizan durante la navegación activa y no se comparten con terceros.'
            },
            {
                question: '¿Cómo puedo cancelar mi suscripción?',
                answer: 'Puedes gestionar y cancelar tu suscripción en cualquier momento a través de la configuración de tu cuenta de Apple. Ve a Configuración → ID de Apple → Suscripciones en tu iPhone.'
            },
            {
                question: 'Tengo un problema técnico. ¿Qué debo hacer?',
                answer: 'Por favor, contacta a nuestro equipo de soporte por correo electrónico a info@serilo.de. Describe tu problema lo más preciso posible e indícanos el modelo de tu dispositivo y la versión de iOS.'
            }
        ],
        contactFormTitle: 'Enviar un Mensaje',
        contactFormSubtitle: '¿Tienes una pregunta que no se responde aquí? ¡Escríbenos!',
        nameLabel: 'Nombre',
        namePlaceholder: 'Tu nombre',
        emailInputLabel: 'Correo electrónico',
        emailInputPlaceholder: 'tu@email.com',
        subjectLabel: 'Asunto',
        subjectPlaceholder: '¿De qué se trata?',
        messageLabel: 'Mensaje',
        messagePlaceholder: 'Describe tu consulta...',
        sendButton: 'Enviar Mensaje',
        sendingButton: 'Enviando...',
        successMessage: '¡Tu mensaje ha sido enviado exitosamente! Nos pondremos en contacto contigo en breve.',
        errorMessage: 'Hubo un error. Por favor, envía tu solicitud directamente a info@serilo.de.',
        privacyLink: 'Privacidad',
        agbLink: 'Términos de Servicio',
        homeLink: 'Inicio',
        allRightsReserved: 'Todos los derechos reservados.'
    },
    fr: {
        languageLabel: 'Langue',
        title: 'Support et Aide',
        subtitle: 'Nous sommes là pour vous aider. Trouvez des réponses aux questions fréquentes ou contactez-nous directement.',
        contactTitle: 'Contact',
        contactText: 'Notre équipe de support est ravie de vous aider pour toute question concernant Serilo.',
        emailLabel: 'Support par Email',
        responseTime: 'Temps de réponse : Dans les 24 heures',
        faqTitle: 'Questions Fréquemment Posées',
        faqSubtitle: 'Trouvez ici les réponses aux questions les plus courantes.',
        faq: [
            {
                question: 'Qu\'est-ce que Serilo ?',
                answer: 'Serilo est une application de navigation innovante qui vous aide à atteindre votre destination en toute sécurité et efficacement. Avec une planification d\'itinéraire intelligente et des mises à jour en temps réel, nous vous offrons la meilleure expérience de navigation.'
            },
            {
                question: 'Sur quels appareils puis-je utiliser Serilo ?',
                answer: 'Serilo est actuellement disponible pour iOS. Une version Android est prévue. Vous avez besoin d\'iOS 16 ou supérieur pour utiliser l\'application.'
            },
            {
                question: 'Serilo est-il gratuit ?',
                answer: 'Serilo offre une période d\'essai gratuite. Ensuite, vous pouvez choisir parmi différentes options d\'abonnement. Vous trouverez les détails dans l\'application sous Paramètres.'
            },
            {
                question: 'Comment puis-je supprimer mon compte ?',
                answer: 'Vous pouvez supprimer votre compte à tout moment dans l\'application sous Profil → Paramètres → Supprimer le compte. Toutes vos données seront complètement supprimées dans un délai de 30 jours.'
            },
            {
                question: 'Quelles autorisations l\'application nécessite-t-elle ?',
                answer: 'Serilo nécessite l\'accès à votre localisation pour fournir des instructions de navigation. Les données de localisation ne sont utilisées que pendant la navigation active et ne sont pas partagées avec des tiers.'
            },
            {
                question: 'Comment puis-je annuler mon abonnement ?',
                answer: 'Vous pouvez gérer et annuler votre abonnement à tout moment via les paramètres de votre compte Apple. Allez dans Réglages → Identifiant Apple → Abonnements sur votre iPhone.'
            },
            {
                question: 'J\'ai un problème technique. Que dois-je faire ?',
                answer: 'Veuillez contacter notre équipe de support par e-mail à support@serilo.de. Décrivez votre problème aussi précisément que possible et communiquez-nous le modèle de votre appareil et la version d\'iOS.'
            }
        ],
        contactFormTitle: 'Envoyer un Message',
        contactFormSubtitle: 'Vous avez une question sans réponse ici ? Écrivez-nous !',
        nameLabel: 'Nom',
        namePlaceholder: 'Votre nom',
        emailInputLabel: 'E-mail',
        emailInputPlaceholder: 'votre@email.fr',
        subjectLabel: 'Sujet',
        subjectPlaceholder: 'De quoi s\'agit-il ?',
        messageLabel: 'Message',
        messagePlaceholder: 'Décrivez votre demande...',
        sendButton: 'Envoyer le Message',
        sendingButton: 'Envoi en cours...',
        successMessage: 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.',
        errorMessage: 'Une erreur s\'est produite. Veuillez envoyer votre demande directement à support@serilo.de.',
        privacyLink: 'Confidentialité',
        agbLink: 'CGV',
        homeLink: 'Accueil',
        allRightsReserved: 'Tous droits réservés.'
    }
};
