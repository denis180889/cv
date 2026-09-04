import { profile } from "../data/cv";

const LINKS = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-10 border-b border-slate-800/80 bg-ink/80 backdrop-blur">
      <div className="section-container flex h-12 items-center justify-between">
        <span className="font-mono text-xs font-semibold tracking-wide text-slate-300">
          {profile.name}
        </span>
        <div className="flex gap-5">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-slate-400 transition hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
