import React from 'react';
import { Mic2 } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="sobre" className="relative py-24 bg-black overflow-hidden border-t border-white/5">

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Header da Seção */}
                <div className="mb-16 reveal">
                    <div className="accent-line"></div>
                    <span className="text-xs font-bold text-white uppercase tracking-[0.3em] mb-4 block flex items-center gap-2">
                        Quem Sou Eu
                    </span>
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter uppercase mb-6">
                        O Engenheiro
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Coluna 1: Narrativa */}
                    <div className="space-y-12 reveal delay-100">
                        <div className="prose prose-invert max-w-none">
                            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed font-light">
                                Minha paixão por áudio começou há mais de 35 anos, quando descobri que som não é apenas técnica – é emoção, é arte, é ciência aplicada com sensibilidade.
                            </p>
                            <p className="text-neutral-500 text-lg leading-relaxed mt-6">
                                Ao longo dessas três décadas e meia, tive o privilégio de trabalhar em projetos que marcaram minha carreira através de decisões críticas em milissegundos que fazem a diferença entre uma execução comum e uma experiência inesquecível.
                            </p>
                            <p className="text-neutral-500 text-lg leading-relaxed mt-6">
                                Acredito que áudio profissional não é sobre equipamentos caros ou plugins milagrosos – é sobre ouvidos treinados, decisões conscientes e, acima de tudo, respeito pela arte e pelo artista.
                            </p>
                        </div>

                        {/* Especialidades Técnicas Card */}
                        <div className="bg-[#080808] border border-white/10 p-8 hover:border-white/20 transition-all group reveal delay-300">
                            <div className="flex items-center gap-4 mb-6 text-white uppercase tracking-[0.3em] font-bold text-xs">
                                <Mic2 className="w-4 h-4 text-white" />
                                Especialidades Técnicas
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-black border border-white/5 text-[10px] text-neutral-400 uppercase tracking-widest font-medium">Mixagem 2.0 e 5.1 (Atmos)</span>
                                <span className="px-4 py-2 bg-black border border-white/5 text-[10px] text-neutral-400 uppercase tracking-widest font-medium">Masterização Estúdio/TV</span>
                                <span className="px-4 py-2 bg-black border border-white/5 text-[10px] text-neutral-400 uppercase tracking-widest font-medium">Restauração de Áudio</span>
                                <span className="px-4 py-2 bg-black border border-white/5 text-[10px] text-neutral-400 uppercase tracking-widest font-medium">Edição Técnica</span>
                                <span className="px-4 py-2 bg-black border border-white/5 text-[10px] text-neutral-400 uppercase tracking-widest font-medium">Mentoria Mixagem</span>
                            </div>
                        </div>
                    </div>

                    {/* Coluna 2: Fotos */}
                    <div className="space-y-8 reveal delay-200">
                        {/* Grid de Fotos: Estádio + Estúdio */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Foto 1: Estádio */}
                            <div className="relative h-80 w-full bg-black overflow-hidden rack-border group">
                                <img
                                    src="/foto_estadio.jpg"
                                    onError={(e) => {
                                        e.currentTarget.style.opacity = "0.3";
                                    }}
                                    className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-1000"
                                    alt="Emerson Porfa - Live Show"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[10px] text-white uppercase font-bold tracking-widest">Road / Live</span>
                                </div>
                            </div>

                            {/* Foto 2: Estúdio */}
                            <div className="relative h-80 w-full bg-black overflow-hidden rack-border group">
                                <img
                                    src="/foto_estudio.jpg"
                                    onError={(e) => {
                                        e.currentTarget.style.opacity = "0.3";
                                    }}
                                    className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-1000"
                                    alt="Emerson Porfa - Studio"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[10px] text-white uppercase font-bold tracking-widest">Studio / Control</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 border-l border-white/5">
                            <p className="text-neutral-600 text-sm font-light italic leading-relaxed">
                                "Transformando som em arte há mais de três décadas e meia, sempre focado na verdade sonora do espetáculo."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;