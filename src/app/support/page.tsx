'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    supportContent,
    SupportedLanguage,
    getLanguageFromLocale,
    FAQItem,
} from '@/app/support/translations';

function FAQAccordion({ item, index }: { item: FAQItem; index: number }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="border border-white/10 rounded-xl overflow-hidden transition-colors hover:border-white/20"
        >
            <button
                id={`faq-toggle-${index}`}
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white/5 hover:bg-white/10 transition-colors"
                aria-expanded={open}
                aria-controls={`faq-content-${index}`}
            >
                <span className="font-medium text-white">{item.question}</span>
                <span
                    className={`shrink-0 text-blue-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </button>
            <div
                id={`faq-content-${index}`}
                className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <p className="px-5 py-4 text-zinc-300 leading-relaxed bg-white/[0.02]">
                    {item.answer}
                </p>
            </div>
        </div>
    );
}

export default function SupportPage() {
    const [language, setLanguage] = useState<SupportedLanguage>('en');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const browserLang = navigator.language || (navigator as unknown as { userLanguage: string }).userLanguage || 'en';
        const detectedLang = getLanguageFromLocale(browserLang);
        setLanguage(detectedLang);
        setIsLoading(false);
    }, []);

    const content = supportContent[language];

    const languageNames: Record<SupportedLanguage, string> = {
        de: 'Deutsch',
        en: 'English',
        es: 'Español',
        fr: 'Français',
    };

    /* ---------- mailto-based form state ---------- */
    const [formName, setFormName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formSubject, setFormSubject] = useState('');
    const [formMessage, setFormMessage] = useState('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const body = `Name: ${formName}%0AEmail: ${formEmail}%0A%0A${encodeURIComponent(formMessage)}`;
        const subject = encodeURIComponent(formSubject || 'Support Request');
        window.location.href = `mailto:info@serilo.de?subject=${subject}&body=${body}`;
    }

    if (isLoading) {
        return (
            <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                <div className="animate-pulse text-white text-xl">Loading...</div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            {/* ── Header ── */}
            <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-white/10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition"
                    >
                        serilo
                    </Link>

                    {/* Language Selector */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-zinc-400 hidden sm:block">
                            {content.languageLabel}:
                        </span>
                        <select
                            id="language-selector"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value as SupportedLanguage)}
                            className="bg-slate-800/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 cursor-pointer hover:bg-slate-700/50 transition"
                        >
                            {(Object.keys(languageNames) as SupportedLanguage[]).map((lang) => (
                                <option key={lang} value={lang} className="bg-slate-800">
                                    {languageNames[lang]}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </header>

            {/* ── Hero ── */}
            <section className="relative overflow-hidden">
                {/* Decorative background accents */}
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-4xl mx-auto px-4 pt-16 pb-12 text-center relative z-10">
                    <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 mb-6">
                        <span className="mr-2 flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                        </span>
                        {content.contactTitle}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {content.title}
                    </h1>
                    <p className="text-zinc-400 max-w-xl mx-auto text-lg">
                        {content.subtitle}
                    </p>
                </div>
            </section>

            {/* ── Contact Card ── */}
            <section className="max-w-4xl mx-auto px-4 mb-14">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 md:p-8 border border-white/10 flex flex-col md:flex-row items-start md:items-center gap-6">
                    {/* Email */}
                    <div className="flex-1">
                        <h2 className="text-xl font-semibold mb-1">{content.emailLabel}</h2>
                        <p className="text-zinc-400 text-sm mb-3">{content.contactText}</p>
                        <a
                            href="mailto:info@serilo.de"
                            id="support-email-link"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition font-medium"
                        >
                            ✉️ info@serilo.de
                        </a>
                    </div>

                    {/* Response time badge */}
                    <div className="shrink-0 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 text-emerald-300 text-sm font-medium">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M8 4.5V8L10.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {content.responseTime}
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="max-w-4xl mx-auto px-4 mb-14">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2">{content.faqTitle}</h2>
                    <p className="text-zinc-400">{content.faqSubtitle}</p>
                </div>

                <div className="space-y-3">
                    {content.faq.map((item, idx) => (
                        <FAQAccordion key={idx} item={item} index={idx} />
                    ))}
                </div>
            </section>

            {/* ── Contact Form (mailto) ── */}
            <section className="max-w-4xl mx-auto px-4 mb-16">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-2">{content.contactFormTitle}</h2>
                        <p className="text-zinc-400">{content.contactFormSubtitle}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
                        {/* Name */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="support-name" className="text-sm text-zinc-300 font-medium">
                                {content.nameLabel}
                            </label>
                            <input
                                id="support-name"
                                type="text"
                                required
                                value={formName}
                                onChange={(e) => setFormName(e.target.value)}
                                placeholder={content.namePlaceholder}
                                className="bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="support-email" className="text-sm text-zinc-300 font-medium">
                                {content.emailInputLabel}
                            </label>
                            <input
                                id="support-email"
                                type="email"
                                required
                                value={formEmail}
                                onChange={(e) => setFormEmail(e.target.value)}
                                placeholder={content.emailInputPlaceholder}
                                className="bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
                            />
                        </div>

                        {/* Subject */}
                        <div className="flex flex-col gap-1.5 md:col-span-2">
                            <label htmlFor="support-subject" className="text-sm text-zinc-300 font-medium">
                                {content.subjectLabel}
                            </label>
                            <input
                                id="support-subject"
                                type="text"
                                required
                                value={formSubject}
                                onChange={(e) => setFormSubject(e.target.value)}
                                placeholder={content.subjectPlaceholder}
                                className="bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-1.5 md:col-span-2">
                            <label htmlFor="support-message" className="text-sm text-zinc-300 font-medium">
                                {content.messageLabel}
                            </label>
                            <textarea
                                id="support-message"
                                required
                                rows={5}
                                value={formMessage}
                                onChange={(e) => setFormMessage(e.target.value)}
                                placeholder={content.messagePlaceholder}
                                className="bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition resize-none"
                            />
                        </div>

                        {/* Submit */}
                        <div className="md:col-span-2 flex justify-center">
                            <button
                                id="support-submit"
                                type="submit"
                                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                            >
                                {content.sendButton}
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* ── Footer ── */}
            <footer className="border-t border-white/10 py-6">
                <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-zinc-500 text-sm">
                        © {new Date().getFullYear()} Serilo. {content.allRightsReserved}
                    </p>
                    <div className="flex gap-6">
                        <Link href="/datenschutz" className="text-zinc-400 hover:text-white text-sm transition">
                            {content.privacyLink}
                        </Link>
                        <Link href="/agb" className="text-zinc-400 hover:text-white text-sm transition">
                            {content.agbLink}
                        </Link>
                        <Link href="/" className="text-zinc-400 hover:text-white text-sm transition">
                            {content.homeLink}
                        </Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
