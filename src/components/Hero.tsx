import { profile } from "../data/cv";

export default function Hero() {
  return (
    <header className="section-container flex min-h-[90vh] flex-col justify-center gap-6 pt-24 pb-16">
      <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">
        {profile.location}
      </p>
      <h1 className="glow-text text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-7xl">
        {profile.name}
      </h1>
      <h2 className="font-mono text-xl text-slate-300 sm:text-2xl">
        {profile.title}
      </h2>
      <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
        {profile.summary}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-accent px-6 py-3 font-mono text-sm font-semibold text-ink transition hover:scale-105 hover:shadow-[0_0_30px_rgba(57,255,157,0.5)]"
        >
          LinkedIn
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-slate-700 px-6 py-3 font-mono text-sm text-slate-300 transition hover:border-accent hover:text-accent"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
