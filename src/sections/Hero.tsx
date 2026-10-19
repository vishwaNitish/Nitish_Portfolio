import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "../components/BrandIcons";
import { HalftonePortrait } from "../components/HalftonePortrait";
import { ScrambleLink } from "../components/ScrambleLink";
import { useMotionPrefs } from "../context/MotionPrefs";
import { profile } from "../data/profile";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { enabled, toggle } = useMotionPrefs();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Name slowly dissolves while scrolling down
  // and becomes visible again while scrolling up.
  const nameOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.65, 1],
    [1, 0.85, 0.15, 0],
  );

  const copy = (i: number) => (
    <span key={i} aria-hidden={i !== 1} className="shrink-0 px-[0.5em]">
      {i === 1 ? (
        <>
          <span className="inline-block overflow-hidden px-[0.04em] pb-[0.14em] align-bottom">
            <motion.span
              className="kerned inline-block"
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease }}
            >
              Nitish
            </motion.span>
          </span>{" "}
          <span className="inline-block overflow-hidden px-[0.06em] pb-[0.14em] align-bottom">
            <motion.em
              className="inline-block"
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.38, ease }}
            >
              Vishwakarma
            </motion.em>
          </span>
        </>
      ) : (
        <>
          Nitish <em>Vishwakarma</em>
        </>
      )}
    </span>
  );

  return (
    <>
      <section
        id="home"
        ref={ref}
        className="relative isolate min-h-[100svh] overflow-hidden bg-[#030303] text-paper"
      >
        <div
          aria-hidden={false}
          className="pointer-events-none absolute inset-x-0 top-24 -z-0 flex h-[min(60svh,120vw)] justify-center"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 82%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, #000 82%, transparent 100%)",
          }}
        >
          <HalftonePortrait targetRef={ref} className="h-full max-w-full" />
        </div>

        <div className="mono-label absolute left-5 top-[max(7rem,17svh)] z-10 hidden max-w-[18rem] text-[0.35rem] leading-relaxed md:block md:left-12">
          {profile.role}
        </div>

        <div className="mono-label absolute right-5 top-[max(7rem,17svh)] z-10 hidden text-right text-[0.35rem] leading-relaxed md:block md:right-12">
          {profile.location}
        </div>

        <div className="absolute left-5 top-[35svh] z-10 hidden md:left-12 md:block">
          <p className="mono-label mb-8 text-[0.48rem] text-coral">
            01 / Presence
          </p>

          <p className="mono-label text-[0.48rem] leading-[1.9]">
            I turn ideas into digital experiences.
          </p>
        </div>

        <h1
          className="display absolute inset-x-0 top-[60svh] z-10 md:top-[56svh] lg:top-[58svh]"
          aria-label={profile.name}
        >
          <motion.span
            style={enabled ? { opacity: nameOpacity } : undefined}
            className="flex justify-center whitespace-nowrap text-[clamp(1.6rem,7vw,9rem)] lg:text-[clamp(1.6rem,8.5vw,9rem)]"
          >
            <span className="flex w-max">{copy(1)}</span>
          </motion.span>
        </h1>

        <div className="absolute inset-x-0 bottom-14 z-10 flex flex-col items-center px-4">
          <motion.p
            className="mx-auto max-w-[41rem] text-center text-sm leading-relaxed text-paper/75 lg:text-base"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
          >
            {profile.intro}
          </motion.p>

          <motion.div
            className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full border border-paper/20 bg-paper/10 px-6 py-3.5 text-sm font-medium backdrop-blur transition-colors hover:bg-paper hover:text-ink"
            >
              Explore my work
              <ArrowDown
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>

            <ScrambleLink
              href="#contact"
              text="Let’s connect"
              className="inline-flex items-center gap-2 border-b border-paper/40 pb-1 text-sm font-medium transition-colors hover:border-paper"
              icon={<ArrowUpRight size={15} aria-hidden="true" />}
            />

            <span className="flex items-center gap-4 text-paper/60">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="transition-colors hover:text-paper"
              >
                <Github size={20} />
              </a>

              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="transition-colors hover:text-paper"
              >
                <Linkedin size={20} />
              </a>
            </span>
          </motion.div>
        </div>

        <motion.p
          className="mono-label absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 text-center lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {profile.status} · {profile.location}
        </motion.p>

        <a
          href="#about"
          className="mono-label absolute bottom-5 left-5 z-10 hidden items-center gap-2 transition-colors hover:text-paper md:left-12 md:flex"
        >
          Scroll to discover <ArrowDown size={12} aria-hidden="true" />
        </a>

        <button
          type="button"
          onClick={toggle}
          aria-pressed={enabled}
          aria-label={enabled ? "Turn animations off" : "Turn animations on"}
          className="mono-label absolute bottom-4 right-5 z-10 rounded border border-paper/20 px-3 py-2 transition-colors hover:text-paper md:right-12"
        >
          Motion {enabled ? "on" : "off"}
        </button>
      </section>
    </>
  );
}
