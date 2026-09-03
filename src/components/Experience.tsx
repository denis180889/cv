import { experience } from "../data/cv";

export default function Experience() {
  return (
    <section id="experience" className="section-container py-20">
      <h2 className="mb-10 font-mono text-sm uppercase tracking-[0.3em] text-accent">
        // Experience
      </h2>
      <div className="relative space-y-10 border-l-2 border-slate-800 pl-8">
        {experience.map((entry) => (
          <div key={`${entry.company}-${entry.dates}`} className="relative">
            <span className="absolute -left-[2.55rem] top-1.5 h-3 w-3 rounded-full bg-accent shadow-[0_0_10px_rgba(57,255,157,0.7)]" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-xl font-semibold text-white">
                {entry.role} <span className="text-accent">@ {entry.company}</span>
              </h3>
              <span className="font-mono text-xs text-slate-500">{entry.dates}</span>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-slate-400">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="text-accent">▸</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
