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
    description: 'Volume competitivo e consistência sonora para streaming.',
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
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const handleCloseModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  return (
    <section id="servicos" className="py-32 bg-neutral-950 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 reveal">
           <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter uppercase mb-4">
               Serviços<span className="text-neutral-700">.</span>
           </h2>
           <div className="w-24 h-1 bg-white"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/10">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`group bg-black border-r border-b border-white/10 p-10 hover:bg-neutral-900 transition-all duration-500 flex flex-col h-full relative reveal delay-${index * 100}`}
            >
              <div className="mb-8 transform group-hover:-translate-y-2 transition-transform duration-500">
                <service.icon className="w-12 h-12 text-white mb-6 stroke-[1.5]" />
                <h3 className="text-2xl font-display font-bold text-white mb-4 tracking-wide uppercase">{service.title}</h3>
                <p className="text-neutral-400 font-light leading-relaxed mb-8">
                    {service.description}
                </p>
              </div>
              
              <div className="mt-auto">
                <button 
                  onClick={() => handleOpenModal(service)}
                  className="inline-flex items-center gap-3 text-white font-bold text-xs uppercase tracking-[0.2em] group-hover:text-neutral-300 transition-colors focus:outline-none"
                >
                    Detalhes <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICE DETAIL MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
            onClick={handleCloseModal}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-neutral-900 border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in flex flex-col">
            
            {/* Header */}
            <div className="p-8 border-b border-white/10 flex justify-between items-start sticky top-0 bg-neutral-900 z-10">
              <div className="flex items-center gap-4">
                <selectedService.icon className="w-8 h-8 text-white" />
                <h3 className="text-3xl font-display font-bold text-white uppercase tracking-wide">
                  {selectedService.title}
                </h3>
              </div>
              <button 
                onClick={handleCloseModal}
                className="text-neutral-500 hover:text-white transition-colors p-1"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Body */}
            <div className="p-8 md:p-10 space-y-6">
              <div className="prose prose-invert prose-lg max-w-none">
                 {selectedService.longDescription.split('\n').map((paragraph, idx) => (
                    paragraph.trim() && (
                      <p key={idx} className="text-neutral-300 font-light leading-relaxed text-base md:text-lg mb-4">
                        {paragraph.trim()}
                      </p>
                    )
                 ))}
              </div>

              {/* Feature List (Visual enhancement) */}
              <div className="bg-black/40 p-6 rounded border border-white/5 mt-6">
                  <p className="text-sm font-bold text-white uppercase tracking-widest mb-4">Diferenciais</p>
                  <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-neutral-400 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                          <span>Atendimento personalizado</span>
                      </li>
                      <li className="flex items-center gap-3 text-neutral-400 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                          <span>Equipamentos de ponta</span>
                      </li>
                      <li className="flex items-center gap-3 text-neutral-400 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                          <span>Prazos respeitados rigorosamente</span>
                      </li>
                  </ul>
              </div>
            </div>

            {/* Footer / CTA */}
            <div className="p-8 border-t border-white/10 bg-neutral-950">
              <a 
                href="#contato"
                onClick={handleCloseModal}
                className="block w-full bg-white text-black font-bold py-4 text-center uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors font-display"
              >
                Solicitar Orçamento
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Services;