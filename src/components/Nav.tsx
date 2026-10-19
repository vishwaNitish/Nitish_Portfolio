import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";

export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "learning", label: "Learning" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [overHero, setOverHero] = useState(true);
  const active = useActiveSection(sections.map((s) => s.id));

  useEffect(() => {
    const onScroll = () => {
      // The hero is dark, so the nav switches to light text while it sits over the hero.
      const hero = document.getElementById("home");
      setOverHero(window.scrollY < (hero?.offsetHeight ?? 600) - 64);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const dark = overHero && !open;

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Primary"
        className={`relative mx-auto flex h-[4.5rem] w-full max-w-[78.5rem] items-center justify-between rounded-[1.5rem] border px-5 backdrop-blur-xl transition-colors duration-300 md:px-8 ${
          dark
            ? "border-paper/15 bg-[#141413]/85 text-paper shadow-lg shadow-black/20"
            : "border-ink/10 bg-paper/90 text-ink shadow-lg shadow-black/10"
        }`}
      >
        {/* Logo - Left */}
        <a
          href="#home"
          className="display shrink-0 text-xl md:text-2xl"
          aria-label={`${profile.name}, back to top`}
        >
          {profile.name}
        </a>

        {/* Desktop Navigation - Right */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {sections
              .filter((s) =>
                ["work", "experience", "skills", "about"].includes(s.id),
              )
              .sort((a, b) => {
                const order = ["work", "experience", "skills", "about"];
                return order.indexOf(a.id) - order.indexOf(b.id);
              })
              .map((s) => {
                const current = active === s.id;
                const tone = current
                  ? dark
                    ? "text-paper"
                    : "text-ink"
                  : dark
                    ? "text-paper/65 hover:text-paper"
                    : "text-muted hover:text-ink";

                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      aria-current={current ? "true" : undefined}
                      className={`link-u text-sm ${tone}`}
                    >
                      {s.label}
                    </a>
                  </li>
                );
              })}
          </ul>

          {/* Contact Button */}
          <a
            href="#contact"
            className={`inline-flex items-center gap-5 rounded-2xl border px-5 py-3 text-sm transition-colors ${
              dark
                ? "border-paper/20 bg-paper/10 hover:bg-paper/15"
                : "border-ink/15 bg-ink/5 hover:bg-ink/10"
            }`}
          >
            Let’s talk
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="-mr-2 grid h-11 w-11 place-items-center rounded-full transition-colors hover:bg-paper/10 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu - Unchanged */}
      {open && (
        <div
          id="mobile-menu"
          className={`absolute inset-x-4 top-[calc(100%+0.5rem)] h-[calc(100dvh-6rem)] rounded-[1.5rem] border px-6 pb-10 backdrop-blur-xl md:hidden ${
            overHero
              ? "border-paper/15 bg-[#141413]/95 text-paper"
              : "border-ink/10 bg-paper/95 text-ink"
          }`}
        >
          <ul className="flex h-full flex-col justify-center gap-2">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="display flex items-baseline gap-4 py-2 text-5xl"
                >
                  <span className="label w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
