import { highlights } from "../data/cv";

export default function Highlights() {
  return (
    <section className="section-container py-20">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {highlights.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-800 bg-panel/60 p-6 text-center transition hover:border-accent/60"
          >
            <div className="font-mono text-3xl font-bold text-accent sm:text-4xl">
              {stat.value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-wide text-slate-400 sm:text-sm">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
