'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { agbContent, SupportedLanguage, getLanguageFromLocale, Section, Subsection } from '@/app/agb/translations';

export default function AGBPage() {
    const [language, setLanguage] = useState<SupportedLanguage>('en');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Detect language from browser
        const detectLanguage = () => {
            const browserLang = navigator.language || (navigator as any).userLanguage || 'en';
            const detectedLang = getLanguageFromLocale(browserLang);
            setLanguage(detectedLang);
            setIsLoading(false);
        };

        detectLanguage();
    }, []);

    const content = agbContent[language];

    const languageNames: Record<SupportedLanguage, string> = {
        de: 'Deutsch',
        en: 'English',
        es: 'Español',
        fr: 'Français'
    };

    if (isLoading) {
        return (
            <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                <div className="animate-pulse text-white text-xl">Loading...</div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-white/10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition">
                        serilo
                    </Link>

                    {/* Language Selector */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-zinc-400 hidden sm:block">{content.languageLabel}:</span>
                        <select
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

            {/* Content */}
            <article className="max-w-4xl mx-auto px-4 py-12">
                {/* Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {content.title}
                    </h1>
                    <p className="text-zinc-400">
                        {content.lastUpdated}: 26. Januar 2026 | {content.version}: 1.0
                    </p>
                </div>

                {/* Severability Notice */}
                <div className="mb-10 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                    <p className="text-blue-300 text-sm">
                        <strong>📋 {content.severabilityNotice.title}:</strong> {content.severabilityNotice.text}
                    </p>
                </div>

                {/* AGB Sections */}
                <div className="space-y-10">
                    {content.sections.map((section: Section, index: number) => (
                        <section key={index} className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors">
                            <h2 className="text-2xl font-semibold mb-4 text-blue-300">
                                {section.number}. {section.title}
                            </h2>

                            {section.subsections.map((sub: Subsection, subIndex: number) => (
                                <div key={subIndex} className="mb-6 last:mb-0">
                                    {sub.title && (
                                        <h3 className="text-lg font-medium mb-2 text-purple-300">
                                            {section.number}.{sub.number} {sub.title}
                                        </h3>
                                    )}

                                    {sub.content && (
                                        <p className="text-zinc-300 leading-relaxed whitespace-pre-line">
                                            {sub.content}
                                        </p>
                                    )}

                                    {sub.list && (
                                        <ul className="list-disc list-inside text-zinc-300 space-y-1 mt-2">
                                            {sub.list.map((item: string, i: number) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    )}

                                    {sub.warning && (
                                        <div className="mt-3 p-4 rounded-lg bg-amber-500/10 border border-amber-500/30">
                                            <p className="text-amber-300 text-sm font-medium">
                                                ⚠️ {sub.warning}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </section>
                    ))}
                </div>

                {/* Contact Section */}
                <section className="mt-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 md:p-8 border border-white/10">
                    <h2 className="text-2xl font-semibold mb-4 text-white">{content.contact.title}</h2>
                    <p className="text-zinc-300 mb-4">{content.contact.text}</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="https://www.serilo.de" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition">
                            🌐 www.serilo.de
                        </a>
                        <a href="mailto:info@serilo.de" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition">
                            ✉️ info@serilo.de
                        </a>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-center text-zinc-500 text-sm">
                    {content.disclaimer}
                </p>
            </article>

            {/* Footer */}
            <footer className="border-t border-white/10 py-6">
                <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-zinc-500 text-sm">
                        © {new Date().getFullYear()} Serilo. {content.allRightsReserved}
                    </p>
                    <div className="flex gap-6">
                        <Link href="/datenschutz" className="text-zinc-400 hover:text-white text-sm transition">
                            {content.privacyLink}
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
