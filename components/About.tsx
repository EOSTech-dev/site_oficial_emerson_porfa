import React from 'react';
import { Mic2, Settings, Monitor, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="relative py-32 bg-black overflow-hidden border-t border-white/5">
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header da Seção */}
        <div className="mb-20 reveal">
           <span className="text-xs font-bold text-white uppercase tracking-[0.3em] mb-4 block flex items-center gap-2">
                <div className="w-8 h-[2px] bg-white"></div>
                Quem Sou Eu
            </span>
           <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter uppercase mb-6">
               O Engenheiro<span className="text-neutral-700">.</span>
           </h2>
           <p className="text-xl text-neutral-400 font-light max-w-3xl leading-relaxed">
             Apaixonado por transformar som em arte há mais de três décadas e meia. Especialista em mixagem, masterização e produção de áudio para TV, shows ao vivo e estúdio.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Coluna 1: Narrativa e Soft Skills */}
            <div className="space-y-12 reveal delay-100">
                <div className="prose prose-invert">
                    <p className="text-neutral-300 text-lg leading-relaxed">
                        Minha paixão por áudio começou há mais de 35 anos, quando descobri que som não é apenas técnica – é emoção, é arte, é ciência aplicada com sensibilidade. Ao longo dessas três décadas e meia, tive o privilégio de trabalhar em projetos que marcaram minha carreira:
                    </p>
                    <ul className="list-none space-y-4 text-neutral-300 mt-6 border-l border-white/10 pl-6">
                        <li>
                            <strong className="text-white block font-display tracking-wide uppercase text-sm mb-1">Shows ao Vivo</strong>
                            Decisões em milissegundos que fazem a diferença entre um show mediano e uma experiência inesquecível.
                        </li>
                        <li>
                            <strong className="text-white block font-display tracking-wide uppercase text-sm mb-1">TV Nacional</strong>
                            A pressão e a exigência técnica do broadcast em grandes emissoras.
                        </li>
                        <li>
                            <strong className="text-white block font-display tracking-wide uppercase text-sm mb-1">Estúdio</strong>
                            Produções do rock ao gospel, do sertanejo ao jazz.
                        </li>
                        <li>
                            <strong className="text-white block font-display tracking-wide uppercase text-sm mb-1">Restauração</strong>
                            Preservação de materiais históricos e legados culturais.
                        </li>
                    </ul>
                    <p className="text-neutral-300 text-lg leading-relaxed mt-6">
                        O que me move hoje é a busca pela excelência técnica aliada à sensibilidade artística. Acredito que áudio profissional não é sobre equipamentos caros ou plugins milagrosos – é sobre ouvidos treinados, decisões conscientes e, acima de tudo, respeito pela arte e pelo artista.
                    </p>
                </div>

                <div className="bg-neutral-900 border border-white/10 p-8 rounded-sm">
                    <h3 className="text-white font-display uppercase tracking-widest text-lg mb-6 flex items-center gap-3">
                        <Award className="w-5 h-5 text-neutral-400" />
                        Habilidades Pessoais
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 text-neutral-400 text-sm border-b border-white/5 pb-2">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            Gestão de Equipes Técnicas
                        </div>
                        <div className="flex items-center gap-3 text-neutral-400 text-sm border-b border-white/5 pb-2">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            Direção Técnica
                        </div>
                        <div className="flex items-center gap-3 text-neutral-400 text-sm border-b border-white/5 pb-2">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            Resolução de Crises (Festivais)
                        </div>
                        <div className="flex items-center gap-3 text-neutral-400 text-sm border-b border-white/5 pb-2">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            Comunicação Assertiva
                        </div>
                        <div className="flex items-center gap-3 text-neutral-400 text-sm border-b border-white/5 pb-2">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            Mentoria Educacional
                        </div>
                    </div>
                </div>
            </div>

            {/* Coluna 2: Tech Stack (Hard Skills) e Imagens da Bio */}
            <div className="space-y-8 reveal delay-200">
                
                {/* Tech Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-black border border-white/10 p-6 hover:border-white/30 transition-colors group">
                        <Monitor className="w-8 h-8 text-neutral-500 mb-4 group-hover:text-white transition-colors" />
                        <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-3">DAWs & Software</h4>
                        <ul className="text-neutral-400 text-sm space-y-1">
                            <li>Avid Pro Tools (Expert)</li>
                            <li>Plugins: SSL, Harrison</li>
                            <li>Waves, FabFilter</li>
                            <li>Plugin Alliance, UAD</li>
                        </ul>
                    </div>

                    <div className="bg-black border border-white/10 p-6 hover:border-white/30 transition-colors group">
                        <Settings className="w-8 h-8 text-neutral-500 mb-4 group-hover:text-white transition-colors" />
                        <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-3">Consoles & Hardware</h4>
                        <ul className="text-neutral-400 text-sm space-y-1">
                            <li>Avid Controller, MTRX 2</li>
                            <li>Manley, Neve, Summit</li>
                            <li>Lexicon, Eventide, UAD</li>
                        </ul>
                    </div>

                    <div className="bg-black border border-white/10 p-6 hover:border-white/30 transition-colors group sm:col-span-2">
                        <Mic2 className="w-8 h-8 text-neutral-500 mb-4 group-hover:text-white transition-colors" />
                        <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-3">Especialidades Técnicas</h4>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-neutral-900 border border-white/10 text-xs text-neutral-300 uppercase">Mixagem 2.0 e 5.1 (Atmos)</span>
                            <span className="px-3 py-1 bg-neutral-900 border border-white/10 text-xs text-neutral-300 uppercase">Masterização Estúdio/TV</span>
                            <span className="px-3 py-1 bg-neutral-900 border border-white/10 text-xs text-neutral-300 uppercase">Restauração (Podcasts/Vídeo)</span>
                            <span className="px-3 py-1 bg-neutral-900 border border-white/10 text-xs text-neutral-300 uppercase">Edição (Instrumentos/Vozes)</span>
                        </div>
                    </div>
                </div>

                {/* Grid de Fotos: Estádio + Estúdio */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                     {/* Foto 1: Estádio - Caminho Absoluto */}
                     <div className="relative h-64 w-full bg-black overflow-hidden border border-white/10">
                        <img 
                            src="/foto_estadio.jpg"
                            onError={(e) => {
                                console.error("Foto estadio não encontrada na pasta public");
                                e.currentTarget.style.opacity = "0.3";
                            }}
                            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700" 
                            alt="Emerson Porfa - Live Show"
                        />
                     </div>

                     {/* Foto 2: Estúdio - Caminho Absoluto */}
                     <div className="relative h-64 w-full bg-black overflow-hidden border border-white/10">
                        <img 
                            src="/foto_estudio.jpg"
                            onError={(e) => {
                                console.error("Foto estudio não encontrada na pasta public");
                                e.currentTarget.style.opacity = "0.3";
                            }}
                            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700" 
                            alt="Emerson Porfa - Studio"
                        />
                     </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default About;