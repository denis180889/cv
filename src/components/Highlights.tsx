import { highlights } from "../data/cv";

export default function Highlights() {
  return (
    <section className="section-container py-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {highlights.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-800 bg-panel/60 p-4 text-center transition hover:border-accent/60"
          >
            <div className="font-mono text-2xl font-bold text-accent sm:text-3xl">
              {stat.value}
            </div>
            <div className="mt-1 text-xs uppercase tracking-wide text-slate-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
