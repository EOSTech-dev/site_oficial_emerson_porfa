import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const VIDEO_SRC = '/hero-loop.mp4';
const POSTER_SRC = '/hero-poster.jpg';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [entered, setEntered] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReduce(rm);

    // trigger the copy entrance after mount
    const t = setTimeout(() => setEntered(true), 180);

    const v = videoRef.current;
    if (v && !rm) {
      v.play().catch(() => {
        /* autoplay blocked: poster stays, still fine */
      });
    }
    return () => clearTimeout(t);
  }, []);

  const step = (i: number) =>
    `transition-all duration-700 ease-[cubic-bezier(0.2,0,0,1)] ${
      entered ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-[6px]'
    }`;

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 md:pt-32"
    >
      {/* Media */}
      <div className="absolute inset-0">
        <img
          src={POSTER_SRC}
          alt="Emerson Porfa no estúdio, na mesa de mixagem"
          className={`absolute inset-0 w-full h-full object-cover ${reduce ? 'opacity-100' : 'opacity-0'}`}
        />
        {!reduce && (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src={VIDEO_SRC}
            poster={POSTER_SRC}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            tabIndex={-1}
          />
        )}
        {/* legibility wash */}
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-void/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/50" />
      </div>

      {/* Dust */}
      {!reduce && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              className="dust-mote"
              style={{
                left: `${8 + (i * 6.1) % 55}%`,
                top: `${32 + (i * 41) % 52}%`,
                animationDuration: `${8 + (i % 5) * 2.6}s`,
                animationDelay: `${(i % 7) * 1.2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Copy */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <p className={`eyebrow mb-6 ${step(0)}`} style={{ transitionDelay: '0ms' }}>
            Engenheiro de Áudio · 35 anos de estrada e estúdio
          </p>

          <h1 className="font-display leading-[0.92] tracking-tight mb-7">
            <span
              className={`block text-4xl md:text-6xl font-thin text-bone ${step(1)}`}
              style={{ transitionDelay: '120ms' }}
            >
              O som certo
            </span>
            <span
              className={`block text-5xl md:text-8xl font-black text-bone ${step(2)}`}
              style={{ transitionDelay: '240ms' }}
            >
              raramente é
            </span>
            <span
              className={`signal-block text-5xl md:text-8xl font-black mt-2 ${step(3)}`}
              style={{ transitionDelay: '380ms' }}
            >
              acidente
            </span>
          </h1>

          <p
            className={`text-ash text-base md:text-lg max-w-lg leading-relaxed mb-10 border-l border-[color:var(--hairline)] pl-6 ${step(4)}`}
            style={{ transitionDelay: '560ms' }}
          >
            Mixagem, masterização, restauração, edição e mentoria. Um ofício com um objetivo:
            o som chegar inteiro a quem ouve.
          </p>

          <div
            className={`flex flex-wrap gap-5 ${step(5)}`}
            style={{ transitionDelay: '700ms' }}
          >
            <a href="#contato" className="btn-signal">Iniciar projeto</a>
            <a href="#servicos" className="btn-ghost">Ver serviços</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-9 left-1/2 -translate-x-1/2">
        <ChevronDown className="w-5 h-5 text-bone scroll-hint" />
      </div>
    </section>
  );
};

export default Hero;
