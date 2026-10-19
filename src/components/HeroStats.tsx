import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";
import { codingProfiles } from "../data/certifications";
import { featured } from "../data/projects";
import { useMotionPrefs } from "../context/MotionPrefs";

// Every number here is real: GitHub repo count, LeetCode total, and featured projects on this site.
const stats = [
  {
    value: codingProfiles.github.repoCount,
    label: "public repositories on GitHub",
  },
  {
    value: codingProfiles.leetcode.solved,
    label: "LeetCode problems solved, in Java",
  },
  {
    value: featured.length,
    label: "featured projects, from AI apps to a Swing bank",
  },
];

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const { enabled } = useMotionPrefs();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (!enabled) {
      setN(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, enabled, to]);

  return <span ref={ref}>{n}</span>;
}

export function HeroStats() {
  return (
    <div className="border-y border-paper/10 bg-[#080808] text-paper">
      <dl className="container-x grid divide-y divide-paper/10 md:grid-cols-3 md:divide-x md:divide-y-0">
        {stats.map((s) => (
          <div
            key={s.label}
            className="py-8 md:px-8 md:py-10 md:first:pl-0 md:last:pr-0"
          >
            <dd className="display text-6xl md:text-7xl">
              <CountUp to={s.value} />
            </dd>
            <dt className="mt-3 flex items-start gap-2 text-sm text-paper/60">
              <span
                aria-hidden="true"
                className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-coral"
              />
              {s.label}
            </dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
