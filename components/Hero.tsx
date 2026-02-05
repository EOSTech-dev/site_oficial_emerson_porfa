import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-animated-gradient overflow-hidden pt-32 md:pt-40">
      
      {/* Background Texture for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-black to-black opacity-80 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Typography */}
        <div className="order-2 md:order-1 reveal mt-8 md:mt-0">
          
          <h2 className="text-sm md:text-base text-neutral-400 font-bold tracking-[0.4em] mb-4 uppercase flex items-center gap-4">
             <span className="w-12 h-[2px] bg-white"></span>
             Soluções em Áudio
          </h2>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-6 leading-[0.9] tracking-tighter">
            EMERSON<br/>
            {/* CORREÇÃO: Removido gradiente e usado cor sólida (text-neutral-200) para garantir que apareça */}
            <span className="text-neutral-200">PORFA</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-300 max-w-lg leading-relaxed mb-10 font-light border-l-2 border-white/20 pl-6">
            35 anos de experiência em mixagem, estúdio e grandes espetáculos.
            O som que você sente.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#servicos"
              className="px-10 py-4 bg-white text-black text-sm font-bold uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all duration-300 text-center font-display"
            >
              Meus Serviços
            </a>
          </div>
        </div>

        {/* Right: Foto Principal */}
        <div className="order-1 md:order-2 relative h-[50vh] md:h-[75vh] w-full flex items-center justify-center md:justify-end reveal delay-200 mt-10 md:mt-20">
          
          {/* Container da Imagem */}
          <div className="relative w-full h-full max-w-md md:max-w-lg">
             
             {/* Decorative Frame */}
             <div className="absolute top-4 -right-4 w-full h-full border-2 border-white/20 z-0 hidden md:block"></div>
             
             {/* IMAGEM: Caminho absoluto apontando para a raiz pública */}
             <div className="relative w-full h-full bg-black overflow-hidden shadow-2xl z-10">
                 <img 
                   src="/foto_pessoal.jpg"
                   onError={(e) => {
                     console.error("Erro ao carregar imagem principal. Verifique se foto_pessoal.jpg está na pasta public.");
                     e.currentTarget.style.opacity = "0.5"; // Feedback visual se falhar
                   }}
                   alt="Emerson Porfa - Engenheiro de Áudio" 
                   className="w-full h-full object-cover object-center opacity-80 hover:opacity-100 transition-opacity duration-700"
                 />
                 {/* Overlay Gradient suave */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
             </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-6 md:left-1/2 md:-translate-x-1/2 animate-bounce opacity-50 z-20">
        <ArrowDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
};

export default Hero;