import React from 'react';
import { Mic2 } from 'lucide-react';

const specialties = [
  'Mixagem 2.0 e 5.1 (Atmos)',
  'Masterização Estúdio / TV',
  'Restauração de Áudio',
  'Edição Técnica',
  'Mentoria de Mixagem',
];

const About: React.FC = () => {
  return (
    <section id="sobre" className="relative py-24 border-t border-[color:var(--hairline)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 reveal">
          <span className="accent-line" />
          <p className="eyebrow mb-4">Quem é</p>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-bone tracking-tight">
            O Engenheiro
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Portrait */}
          <div className="reveal delay-100">
            <div className="relative aspect-[3/4] w-full max-w-md rack overflow-hidden bg-void">
              <img
                src="/emerson-corridor.jpg"
                alt="Emerson Porfa"
                className="w-full h-full object-cover"
                style={{
                  filter: 'brightness(0.78) contrast(1.08) grayscale(0.25)',
                  WebkitMaskImage:
                    'radial-gradient(125% 95% at 55% 42%, black 42%, transparent 100%)',
                  maskImage:
                    'radial-gradient(125% 95% at 55% 42%, black 42%, transparent 100%)',
                }}
              />
              {/* dark falloff into the section */}
              <div className="absolute inset-0 bg-gradient-to-t from-void via-void/25 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-void/40 via-transparent to-void/10" />
              {/* signal rim */}
              <div
                className="absolute inset-0 mix-blend-soft-light"
                style={{
                  background:
                    'linear-gradient(120deg, transparent 40%, rgba(255,82,0,0.55) 100%)',
                }}
              />
            </div>
          </div>

          {/* Narrative */}
          <div className="space-y-10 reveal delay-200">
            <div className="space-y-5">
              <p className="text-ash text-lg md:text-xl leading-relaxed font-light">
                São mais de 35 anos dedicados a uma pergunta só: o que este som precisa? A
                carreira começou no palco e seguiu para o estúdio, sem que um lugar apagasse
                o outro.
              </p>
              <p className="text-dust text-base leading-relaxed">
                Estrada e estúdio ensinam coisas diferentes. O palco cobra decisão rápida e
                ouvido firme sob pressão. O estúdio cobra paciência e atenção ao detalhe que
                ninguém percebe, mas todo mundo sente.
              </p>
              <p className="text-dust text-base leading-relaxed">
                Passagem por turnês de Só Pra Contrariar, Rionegro e Solimões e, atualmente,
                Alexandre Pires, entre outros artistas.
              </p>
              <p className="text-dust text-base leading-relaxed">
                O método é simples de descrever e difícil de executar: cada ajuste tem um
                motivo, e o motivo é sempre a música. Sem fórmula pronta, sem plugin
                milagroso.
              </p>
            </div>

            <div className="bg-surface border border-[color:var(--hairline)] p-7">
              <div className="flex items-center gap-3 mb-5 text-bone uppercase font-mono tracking-[0.24em] text-[11px]">
                <Mic2 className="w-4 h-4 text-signal" />
                Especialidades Técnicas
              </div>
              <div className="flex flex-wrap gap-2.5">
                {specialties.map((s) => (
                  <span
                    key={s}
                    className="px-3.5 py-2 bg-void border border-[color:var(--hairline-soft)] text-[10px] text-ash uppercase tracking-widest font-mono"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-dust text-sm font-light italic leading-relaxed border-l border-[color:var(--hairline)] pl-6">
              "Som bem resolvido não chama atenção para si. Ele deixa a música passar."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
