import { skills } from "../data/cv";

export default function Skills() {
  return (
    <section id="skills" className="section-container scroll-mt-20 py-8">
      <h2 className="mb-5 font-mono text-sm uppercase tracking-[0.3em] text-accent">
        // Skills
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-slate-800 bg-panel/60 p-4 transition hover:border-accent/60"
          >
            <h3 className="mb-3 text-sm font-semibold text-white">{group.category}</h3>
            <div className="flex flex-wrap gap-1.5">
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
