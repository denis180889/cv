import { education } from "../data/cv";

export default function Education() {
  return (
    <section id="education" className="section-container scroll-mt-20 py-8 pb-16">
      <h2 className="mb-5 font-mono text-sm uppercase tracking-[0.3em] text-accent">
        // Education & Certifications
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-panel/60 p-4 sm:col-span-1">
          <h3 className="text-sm font-semibold text-white">{education.degree.school}</h3>
          <p className="mt-1.5 text-sm text-slate-400">{education.degree.program}</p>
          <p className="mt-1.5 font-mono text-xs text-slate-500">{education.degree.dates}</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-panel/60 p-4 sm:col-span-1">
          <h3 className="text-sm font-semibold text-white">Certifications</h3>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-400">
            {education.certifications.map((cert) => (
              <li key={cert} className="flex gap-2">
                <span className="text-accent">▸</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-panel/60 p-4 sm:col-span-1">
          <h3 className="text-sm font-semibold text-white">Languages</h3>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-400">
            {education.languages.map((lang) => (
              <li key={lang.language} className="flex justify-between">
                <span>{lang.language}</span>
                <span className="font-mono text-xs text-accent">{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
