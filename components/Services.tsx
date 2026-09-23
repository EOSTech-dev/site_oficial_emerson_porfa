import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const KOLBIE_URL = 'https://www.kolbiemusic.com.br';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 border-t border-[color:var(--hairline)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 reveal">
          <span className="accent-line" />
          <h2 className="text-5xl md:text-7xl font-display font-bold text-bone tracking-tight mb-3">
            Serviços
          </h2>
          <p className="eyebrow">Onde trabalhar comigo</p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[color:var(--hairline)] border border-[color:var(--hairline)]">
          <div className="bg-surface p-10 md:p-14 flex flex-col gap-6 reveal">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-bone tracking-tight">
              Serviços musicais
            </h3>
            <p className="text-ash font-light leading-relaxed">
              Mixagem, masterização, restauração e edição de áudio estão na Kolbie Music, o nosso
              site de serviços. Orçamentos e detalhes pelo site.
            </p>
            <a
              href={KOLBIE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-signal self-start mt-auto"
            >
              Ir para kolbiemusic.com.br <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div id="mentoria" className="bg-surface p-10 md:p-14 flex flex-col gap-6 reveal">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-bone tracking-tight">
              Mentoria 1:1
            </h3>
            <p className="text-ash font-light leading-relaxed">
              Encontros 100% online, direto nos seus projetos. Uso o plugin Muse para ouvir o
              áudio da sua DAW em alta fidelidade e dou feedback em tempo real, com um caminho
              personalizado para a sua evolução.
            </p>
            <a href="#contato" className="btn-ghost self-start mt-auto">
              Falar sobre mentoria
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
