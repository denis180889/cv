import { profile } from "../data/cv";

export default function Hero() {
  return (
    <header className="section-container flex flex-col gap-3 pt-16 pb-10 sm:pt-20">
      <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-accent">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {profile.location}
      </p>
      <h1 className="glow-text text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
        {profile.name}
      </h1>
      <h2 className="font-mono text-lg text-slate-300 sm:text-xl">
        {profile.title}
      </h2>
      <p className="max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
        {profile.summary}
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-3">
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-accent px-5 py-2.5 font-mono text-sm font-semibold text-ink transition hover:scale-105 hover:shadow-[0_0_30px_rgba(57,255,157,0.5)]"
        >
          LinkedIn
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-slate-700 px-5 py-2.5 font-mono text-sm text-slate-300 transition hover:border-accent hover:text-accent"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
