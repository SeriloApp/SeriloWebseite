import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Serilo - Coming Soon',
  description: 'Wir arbeiten an etwas Großartigem. Serilo ist bald verfügbar.',
};

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white p-4">
      {/* Hero Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      >
        <source src="/Hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 z-0 bg-black/40" />

      {/* Glass Card */}
      <div className="relative z-10 grid w-full max-w-lg place-items-center rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl md:p-12">

        {/* Logo / Brand Name */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-sm md:text-7xl">
            serilo
          </h1>
        </div>

        {/* Status Badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300">
          <span className="mr-2 flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Im Aufbau
        </div>

        <h2 className="mb-3 text-center text-2xl font-semibold leading-tight md:mb-4 md:text-4xl">
          Wir erstellen gerade <br /> etwas Besonderes.
        </h2>

        <p className="mb-6 text-center text-base text-zinc-400 md:mb-8 md:text-lg">
          Unsere neue Webseite ist bald für dich da. Schau in Kürze wieder vorbei!
        </p>

        {/* Decorative Line */}
        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-6" />

        {/* Support Link */}
        <Link
          href="/support"
          className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300 hover:bg-blue-500/20 transition-colors"
        >
          Support & Hilfe
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      <footer className="absolute bottom-6 flex flex-col items-center gap-2 text-xs text-zinc-600 md:text-sm">
        <div className="flex gap-4">
          <Link href="/support" className="hover:text-zinc-400 transition">Support</Link>
          <Link href="/datenschutz" className="hover:text-zinc-400 transition">Datenschutz</Link>
          <Link href="/agb" className="hover:text-zinc-400 transition">AGB</Link>
        </div>
        <span>&copy; {new Date().getFullYear()} Serilo. Alle Rechte vorbehalten.</span>
      </footer>
    </main>
  );
}
