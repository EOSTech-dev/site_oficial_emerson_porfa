import React from 'react';
import { Inbox, SlidersHorizontal, PackageCheck } from 'lucide-react';

const steps = [
  {
    icon: Inbox,
    title: 'Briefing',
    text: 'Você manda o material bruto e diz o objetivo. A análise técnica inicial é sem custo.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Processamento',
    text: 'Mixagem ou masterização em monitoração de referência, com rodadas de revisão inclusas.',
  },
  {
    icon: PackageCheck,
    title: 'Entrega',
    text: 'Arquivos finais no padrão de cada destino: streaming, TV, rádio ou cinema.',
  },
];

const Process: React.FC = () => {
  return (
    <section className="py-24 border-t border-[color:var(--hairline)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 reveal">
          <span className="accent-line" />
          <h2 className="text-5xl md:text-7xl font-display font-bold text-bone tracking-tight mb-3">
            Como funciona
          </h2>
          <p className="eyebrow">Do arquivo bruto ao master</p>
        </div>

        <div className="relative">
          {/* connecting line, draws on scroll */}
          <svg
            className="hidden md:block absolute left-0 right-0 top-7 w-full h-2 reveal"
            viewBox="0 0 1000 2"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              x1="0"
              y1="1"
              x2="1000"
              y2="1"
              stroke="var(--signal)"
              strokeWidth="1.5"
              className="draw-line"
              style={{ ['--len' as string]: '1000' }}
            />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative">
            {steps.map((s, i) => (
              <div key={s.title} className="reveal" style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="w-14 h-14 rack flex items-center justify-center bg-void mb-6">
                  <s.icon className="w-5 h-5 text-signal stroke-[1.25]" />
                </div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-xs text-dust">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-display font-bold text-bone">{s.title}</h3>
                </div>
                <p className="text-dust text-sm leading-relaxed max-w-xs">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
