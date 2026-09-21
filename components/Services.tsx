import React, { useState } from 'react';
import { SlidersHorizontal, Music, Scissors, Users, Radio, X } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'mix',
    title: 'Mixagem',
    description: 'Equilíbrio entre técnica e emoção. Shows, estúdio e TV.',
    icon: SlidersHorizontal,
    longDescription: `
      Mixagem é a arte e a ciência de equilibrar todos os elementos de uma produção. É transformar gravações individuais em uma obra coesa, clara e impactante.

      Com 35 anos de experiência, trabalho cada fader, EQ e compressor com um objetivo único: fazer sua música soar profissional, competitiva e emocionante. Meu processo vai além do técnico. Entendo a intenção artística e o público de cada projeto.

      Para quem é este serviço?
      • Artistas independentes que querem competir com grandes produções;
      • Produtores musicais buscando finalização de alto nível;
      • Bandas que precisam de mixagem para shows ou álbuns;
      • Estúdios e empresas que buscam excelência técnica garantida.

      Seja um single para streaming, um álbum completo ou áudio para vídeo, cada detalhe importa.
    `,
  },
  {
    id: 'master',
    title: 'Masterização',
    description: 'Volume competitivo e consistência sonora.',
    icon: Music,
    longDescription: `
      Masterização é a última etapa antes da sua música chegar ao público. É o processo técnico que garante que seu som soará impecável em todas as plataformas: Spotify, YouTube, rádio ou TV.

      O trabalho não para em aumentar o volume. Envolve equilíbrio tonal, imagem estéreo e a garantia de que a dinâmica musical seja respeitada enquanto atingimos a competitividade comercial necessária.

      O que está incluído:
      • Equilíbrio tonal final (EQ) e controle de dinâmica;
      • Loudness adequado para streaming e broadcast;
      • Sequenciamento de faixas e consistência do álbum;
      • Preparação final de arquivos para distribuição.

      Para quem é este serviço?
      • Artistas que já têm a mixagem pronta;
      • Produtores finalizando singles ou álbuns;
      • Gravadoras independentes e agências de publicidade;
      • Projetos destinados a streaming, TV ou rádio.
    `,
  },
  {
    id: 'restoration',
    title: 'Restauração',
    description: 'Recuperação de gravações antigas e remoção de ruídos.',
    icon: Radio,
    longDescription: `
      Restauração de áudio é devolver vida a gravações que foram afetadas pelo tempo, por equipamentos defeituosos ou por condições inadequadas de captação.

      Trabalho com tecnologia de ponta para recuperar a clareza sem tornar o som artificial. Seja um material histórico, uma gravação familiar importante ou um arquivo de trabalho danificado, trato cada projeto com o respeito e a técnica que ele merece.

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
    `,
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
      • Podcasters e videomakers buscando áudio limpo e sincronizado;
      • Músicos que querem corrigir pequenas imperfeições de gravação;
      • Projetos com material bruto que precisa ser lapidado.
    `,
  },
  {
    id: 'mentor',
    title: 'Mentoria 1:1',
    description: 'Acelere sua evolução. 100% online, focada nos seus projetos.',
    icon: Users,
    longDescription: `
      Você já assistiu dezenas de tutoriais, leu artigos e comprou cursos, mas ainda sente que falta algo? O problema não é falta de informação. É o excesso dela sem direção.

      Sem alguém para te guiar, você fica perdido em um mar de técnicas e opiniões contraditórias. Na Mentoria 1:1, trabalhamos diretamente nos seus projetos, resolvendo os seus desafios.

      Como funciona:
      • Encontros 100% online via Zoom ou Google Meet;
      • Uso do plugin Muse para que eu ouça o áudio da sua DAW em alta fidelidade;
      • Feedback em tempo real e mão na massa nas suas sessões;
      • Um caminho personalizado para a sua evolução.

      Não é teoria abstrata. É prática aplicada ao seu contexto real, com a visão de quem vive de áudio há 35 anos.
    `,
  },
];

const Services: React.FC = () => {
  const [selected, setSelected] = useState<ServiceItem | null>(null);

  const open = (s: ServiceItem) => {
    setSelected(s);
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    setSelected(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="servicos" className="py-24 border-t border-[color:var(--hairline)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 reveal">
          <span className="accent-line" />
          <h2 className="text-5xl md:text-7xl font-display font-bold text-bone tracking-tight mb-3">
            Serviços
          </h2>
          <p className="eyebrow">Especialidades técnicas</p>
        </div>

        <div className="border-t border-[color:var(--hairline)]">
          {services.map((s, i) => (
            <button
              key={s.id}
              onClick={() => open(s)}
              className="group w-full text-left flex flex-col md:flex-row md:items-center gap-6 py-9 md:py-11 px-1 md:px-6 border-b border-[color:var(--hairline)] transition-colors duration-500 hover:bg-white/[0.02] reveal relative"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="absolute left-0 top-0 bottom-0 w-px bg-signal scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />

              <span className="font-mono text-xs text-dust md:mr-4 shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>

              <span className="shrink-0 w-14 h-14 rack flex items-center justify-center group-hover:border-signal transition-colors duration-500">
                <s.icon className="w-5 h-5 text-bone group-hover:text-signal transition-colors duration-500 stroke-[1.25]" />
              </span>

              <span className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-4">
                <span className="max-w-xl">
                  <span className="block text-2xl md:text-3xl font-display font-bold text-bone tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {s.title}
                  </span>
                  <span className="block text-dust font-light text-sm md:text-base mt-1">
                    {s.description}
                  </span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-bone px-5 py-3 border border-[color:var(--hairline)] group-hover:border-bone group-hover:bg-bone group-hover:text-void transition-all shrink-0">
                  Expandir
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-void/95 backdrop-blur-md" onClick={close} />
          <div className="relative bg-surface border border-[color:var(--hairline)] max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-fade-in flex flex-col">
            <div className="p-8 md:p-12 border-b border-[color:var(--hairline)] flex justify-between items-start sticky top-0 bg-surface z-10">
              <div className="flex flex-col gap-4">
                <span className="accent-line !mb-0" />
                <h3 className="text-4xl md:text-5xl font-display font-bold text-bone uppercase tracking-tight">
                  {selected.title}
                </h3>
              </div>
              <button
                onClick={close}
                className="text-dust hover:text-bone transition-colors p-2 hover:bg-white/5"
                aria-label="Fechar"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 md:p-12 space-y-8">
              <div>
                {selected.longDescription
                  .split('\n')
                  .map((p) => p.trim())
                  .filter(Boolean)
                  .map((p, idx) => (
                    <p key={idx} className="text-ash font-light leading-relaxed text-base md:text-lg mb-5">
                      {p}
                    </p>
                  ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-[color:var(--hairline)] pt-8">
                <div className="space-y-4">
                  <p className="font-mono text-[10px] font-medium text-bone uppercase tracking-[0.24em]">
                    Protocolo de entrega
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-dust text-sm">
                      <span className="text-signal mt-1">•</span>
                      Análise técnica preliminar de todo o material bruto.
                    </li>
                    <li className="flex items-start gap-3 text-dust text-sm">
                      <span className="text-signal mt-1">•</span>
                      Processamento em monitoração de referência, com revisões.
                    </li>
                  </ul>
                </div>
                <div className="bg-void border border-[color:var(--hairline)] p-7 flex flex-col justify-center">
                  <p className="text-xs text-ash mb-5 italic leading-relaxed">
                    "Cada fader movido tem um propósito: servir à emoção da música através da
                    precisão técnica."
                  </p>
                  <span className="font-mono text-[10px] text-bone tracking-widest uppercase">
                    Emerson Porfa
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 border-t border-[color:var(--hairline)] bg-void">
              <a href="#contato" onClick={close} className="btn-signal w-full">
                Solicitar orçamento
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
