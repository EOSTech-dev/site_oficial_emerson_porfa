import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-black overflow-hidden pt-24 md:pt-32">

      {/* Background Depth Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent)] opacity-[0.03] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white opacity-[0.02] blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12">

        {/* Left: Typography */}
        <div className="w-full md:w-3/5 reveal z-20">
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[0.9] tracking-tighter mb-4 max-w-3xl uppercase">
            Engenheiro de Áudio<br />
            <span className="text-outline text-transparent opacity-80" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Especialista em Mixagem</span>
          </h1>

          <div className="flex items-center gap-4 mb-10">
            <div className="h-[2px] w-20 bg-[var(--accent)]"></div>
            <span className="text-xs font-bold text-white uppercase tracking-[0.4em]">SHOWS • ESTÚDIO • TV</span>
            <div className="h-[2px] w-20 bg-[var(--accent)]"></div>
          </div>

          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-12 font-light border-l border-white/10 pl-8">
            Mais de 35 anos de experiência em mixagem para shows, estúdio e TV, além de masterização, restauração de áudio e mentoria 1:1 para profissionais que querem aprofundar sua técnica.
          </p>

          <div className="flex flex-wrap gap-6 mt-10">
            <a href="#servicos" className="btn-technical">
              Ver Serviços
            </a>
            <a href="#contato" className="px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors">
              Iniciar Projeto
            </a>
          </div>
        </div>

        {/* Right: Personal Photo with Blending */}
        <div className="w-full md:w-2/5 relative reveal delay-200 flex justify-center md:justify-end">
          <div className="relative w-full aspect-[4/5] max-w-md">
            {/* Blending Effect Container */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <div className="w-full h-full photo-mask bg-black/20"></div>
            </div>

            <img
              src="/foto_pessoal.jpg"
              alt="Emerson Porfa"
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000 photo-mask"
            />
          </div>
        </div>

      </div>

      {/* Centered Scroll Indicator (Blinking Arrow) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <ChevronDown className="w-6 h-6 text-white animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;