import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 35, suffix: '+', label: 'anos de carreira' },
  { value: 3500, suffix: '+', label: 'shows' },
  { value: 25, suffix: '+', label: 'anos de estúdio' },
];

const fmt = (n: number) => n.toLocaleString('pt-BR');

const Stats: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setShown(stats.map((s) => s.value));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1400;
        const step = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          const e = 1 - Math.pow(1 - p, 3);
          setShown(stats.map((s) => Math.round(s.value * e)));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="border-y border-[color:var(--hairline)] bg-void">
      <div ref={ref} className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 gap-x-6">
          {stats.map((s, i) => (
            <div key={s.label} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="font-display font-black text-3xl md:text-5xl text-bone leading-none tabular-nums">
                {fmt(shown[i])}
                <span className="text-signal">{s.suffix}</span>
              </div>
              <div className="eyebrow mt-3">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
