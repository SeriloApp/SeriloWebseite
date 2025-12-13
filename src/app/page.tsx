import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serilo - Coming Soon',
  description: 'Wir arbeiten an etwas Großartigem. Serilo ist bald verfügbar.',
};

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Stars Background */}
      <div className="absolute inset-0 z-0 bg-[url('/stars.svg')] bg-cover opacity-80" />

      {/* Background Gradients (Nebula) */}
      <div className="absolute top-[-20%] left-[-10%] z-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] z-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px] animate-pulse delay-1000" />

      {/* Glass Card */}
      <div className="relative z-10 mx-4 grid w-full max-w-lg place-items-center rounded-3xl border border-white/10 bg-white/5 p-12 shadow-2xl backdrop-blur-xl">

        {/* Logo / Brand Name */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-sm">
            Serilo
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

        <h2 className="mb-4 text-center text-3xl font-semibold leading-tight md:text-4xl">
          Wir erstellen gerade <br /> etwas Besonderes.
        </h2>

        <p className="mb-8 text-center text-lg text-zinc-400">
          Unsere neue Webseite ist bald für dich da. Schau in Kürze wieder vorbei!
        </p>

        {/* Decorative Line */}
        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
      </div>

      <footer className="absolute bottom-6 text-sm text-zinc-600">
        &copy; {new Date().getFullYear()} Serilo. Alle Rechte vorbehalten.
      </footer>
    </main>
  );
}
