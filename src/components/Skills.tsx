import { skills } from "../data/cv";

export default function Skills() {
  return (
    <section id="skills" className="section-container py-20">
      <h2 className="mb-10 font-mono text-sm uppercase tracking-[0.3em] text-accent">
        // Skills
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-slate-800 bg-panel/60 p-6 transition hover:border-accent/60"
          >
            <h3 className="mb-4 text-lg font-semibold text-white">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 px-3 py-1 font-mono text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
