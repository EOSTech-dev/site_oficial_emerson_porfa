import React, { useState } from 'react';
import { SlidersHorizontal, Music, Scissors, Users, ArrowRight, Radio, X, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'mix',
    title: 'Mixagem',
    description: 'Equilíbrio perfeito entre técnica e emoção. Shows, Estúdio e TV.',
    icon: SlidersHorizontal,
    longDescription: `
      Mixagem é a arte e a ciência de equilibrar todos os elementos de uma produção. É transformar gravações individuais em uma obra coesa, clara e impactante.
      
      Com 35 anos de experiência, trabalho cada fader, EQ e compressor com um objetivo único: fazer sua música soar profissional, competitiva e emocionante. Meu processo vai além do técnico; entendo a intenção artística e o público-alvo de cada projeto.
      
      Para quem é este serviço?
      • Artistas independentes que querem competir com grandes produções;
      • Produtores musicais buscando finalização de alto nível;
      • Bandas que precisam de mixagem para shows ou álbuns;
      • Estúdios e empresas que buscam excelência técnica garantida.
      
      Seja um single para streaming, um álbum completo ou áudio para vídeo – cada detalhe importa.
    `
  },
  {
    id: 'master',
    title: 'Masterização',
    description: 'Volume competitivo e consistência sonora.',
    icon: Music,
    longDescription: `
      Masterização é a última etapa antes da sua música chegar ao público. É o processo técnico que garante que seu som soará impecável em TODAS as plataformas: Spotify, YouTube, rádio ou TV.
      
      Mais do que apenas "aumentar o volume", meu trabalho envolve equilíbrio tonal, imagem estéreo e a garantia de que a dinâmica musical seja respeitada enquanto atingimos a competitividade comercial necessária.
      
      O que está incluído:
      • Equilíbrio tonal final (EQ) e controle de dinâmica;
      • Loudness adequado para streaming e broadcast;
      • Sequenciamento de faixas e consistência do álbum;
      • Preparação final de arquivos para distribuição.
      
      Para quem é este serviço?
      • Artistas que já têm a mixagem pronta;
      • Produtores finalizando singles ou álbuns;
      • Gravadoras independentes e agências de publicidade;
      • Projetos destinados a Streaming, TV ou Rádio.
    `
  },
  {
    id: 'restoration',
    title: 'Restauração',
    description: 'Recuperação de gravações antigas e remoção de ruídos.',
    icon: Radio,
    longDescription: `
      Restauração de áudio é devolver vida a gravações que foram afetadas pelo tempo, por equipamentos defeituosos ou por condições inadequadas de captação.
      
      Trabalho com tecnologia de ponta para recuperar a clareza sem tornar o som artificial. Seja um material histórico, uma gravação familiar importante ou um arquivo de trabalho danificado – trato cada projeto com o respeito e a técnica que ele merece.
      
      O que está incluído:
      • Remoção de ruídos (chiados, hum, buzz, crepitações);
      • Eliminação de cliques, pops e redução de distorções;
      • Restauração de frequências perdidas e inteligibilidade;
      • Balanceamento de dinâmica comprometida.
      
      Para quem é este serviço?
      • Famílias que querem preservar memórias em áudio;
      • Produtores culturais com materiais históricos;
      • Artistas com gravações antigas que querem relançar;
      • Empresas com arquivos corporativos importantes;
      • Pesquisadores e documentaristas.
    `
  },
  {
    id: 'edit',
    title: 'Edição de Áudio',
    description: 'Limpeza, afinação e organização. O detalhe invisível.',
    icon: Scissors,
    longDescription: `
      Edição de áudio é o trabalho invisível que faz toda a diferença no resultado final. É organizar, limpar, alinhar e preparar o material antes da mixagem ou masterização.
      
      Cada arquivo é tratado com cuidado técnico e artístico, respeitando a performance original enquanto elimina imperfeições.
      
      O que está incluído:
      • Edição de timing (correção de tempo e quantização musical);
      • Limpeza de ruídos, clicks e controle de respiração;
      • Edição de vocal (afinação e comping de takes);
      • Edição de diálogos para vídeo, podcast ou TV;
      • Organização completa de sessões caóticas.
      
      Para quem é este serviço?
      • Produtores que precisam organizar sessões complexas;
      • Podcasters e Videomakers buscando áudio limpo e sincronizado;
      • Músicos que querem corrigir pequenas imperfeições de gravação;
      • Projetos com material bruto que precisa ser "lapidado".
    `
  },
  {
    id: 'mentor',
    title: 'Mentoria 1:1',
    description: 'Acelere sua evolução. 100% Online e focada nos seus projetos.',
    icon: Users,
    longDescription: `
      Você já assistiu dezenas de tutoriais, leu artigos e comprou cursos, mas ainda sente que falta algo? O problema não é falta de informação – é o EXCESSO dela sem direção.
      
      Sem alguém para te guiar, você fica perdido em um mar de técnicas e opiniões contraditórias. Na Mentoria 1:1, trabalhamos diretamente nos SEUS projetos, resolvendo os SEUS desafios específicos.
      
      Como funciona:
      • Encontros 100% Online via Zoom ou Google Meet;
      • Uso do plugin Muse para que eu ouça o áudio da sua DAW em alta fidelidade;
      • Feedback em tempo real e "mão na massa" nas suas sessões;
      • Criação de um caminho personalizado para sua evolução.
      
      Não é teoria abstrata. É prática aplicada ao seu contexto real, com a visão de quem vive de áudio há 35 anos.
    `
  }
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenModal = (service: ServiceItem) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="servicos" className="py-24 bg-black border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 reveal">
          <div className="accent-line"></div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter uppercase mb-4">
            Serviços
          </h2>
          <p className="text-neutral-500 text-xs tracking-[0.4em] uppercase">Especialidades Técnicas</p>
        </div>

        <div className="flex flex-col gap-0 border-y border-white/10">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => handleOpenModal(service)}
              className="group relative flex flex-col md:flex-row items-start md:items-center py-10 md:py-12 px-2 md:px-8 border-b last:border-b-0 border-white/5 cursor-pointer transition-all duration-500 hover:bg-white/[0.02] reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Vertical Accent Line (Hover only) */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[var(--accent)] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

              {/* Icon Container */}
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-12">
                <div className="w-16 h-16 rack-border flex items-center justify-center bg-black group-hover:border-[var(--accent)] transition-colors duration-500">
                  <service.icon className="w-6 h-6 text-white group-hover:text-[var(--accent)] transition-colors duration-500 stroke-[1]" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="max-w-xl">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {service.title}
                  </h3>
                  <p className="text-neutral-500 font-light leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center gap-6">

                  <button className="flex items-center gap-3 text-white font-bold text-[10px] uppercase tracking-[0.4em] px-6 py-3 border border-white/10 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                    Expandir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICE DETAIL MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity"
            onClick={handleCloseModal}
          ></div>

          <div className="relative bg-[#080808] border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-fade-in flex flex-col">

            {/* Header */}
            <div className="p-8 md:p-12 border-b border-white/5 flex justify-between items-start sticky top-0 bg-[#080808] z-10">
              <div className="flex flex-col gap-4">
                <div className="accent-line mb-0"></div>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight">
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-neutral-600 hover:text-white transition-colors p-2 hover:bg-white/5"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Body */}
            <div className="p-8 md:p-12 space-y-10">
              <div className="prose prose-invert max-w-none">
                {selectedService.longDescription.split('\n').map((paragraph, idx) => (
                  paragraph.trim() && (
                    <p key={idx} className="text-neutral-400 font-light leading-relaxed text-base md:text-lg mb-6">
                      {paragraph.trim()}
                    </p>
                  )
                ))}
              </div>

              {/* Technical Spec Drawer */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/5 pt-10">
                <div className="space-y-4">
                  <p className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">Protocolo de Entrega</p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 text-neutral-500 text-sm">
                      <span className="text-[var(--accent)] mt-1">•</span>
                      <span>Análise técnica preliminar de todo material bruto.</span>
                    </li>
                    <li className="flex items-start gap-4 text-neutral-500 text-sm">
                      <span className="text-[var(--accent)] mt-1">•</span>
                      <span>Processamento através de conversores High-End.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-black border border-white/5 p-8 flex flex-col justify-center">
                  <p className="text-xs text-neutral-400 mb-6 italic leading-relaxed">
                    "Cada fader movido tem um propósito: servir à emoção da música através da precisão técnica."
                  </p>
                  <span className="text-[10px] text-white font-bold tracking-widest uppercase">— Emerson Porfa</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-8 md:p-12 border-t border-white/5 bg-black">
              <a
                href="#contato"
                onClick={handleCloseModal}
                className="btn-technical block w-full text-center"
              >
                Solicitar Orçamento Técnico
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Services;