import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

const videos = [
  { id: 'GEA228kU1-g', title: 'Mixagem Profissional' },
  { id: 'HrolZFCRT6I', title: 'Técnicas de Áudio' },
  { id: 'PHS1GcN6GOM', title: 'Masterização' },
  { id: 'UPxGfLnUVkA', title: 'Produção Musical' },
  { id: '4p0NI2tOmkE', title: 'Estúdio e Equipamentos' },
  { id: 'PubdXt8Qy-I', title: 'Equalização' },
  { id: 'E858Lwqez0o', title: 'Sessão de Gravação' },
];

const spotifyAlbums = [
  '3X5wz47oetvo2EMcViUnWs',
  '1SMRpldg9K9lWoGw0r1J2w',
];

const Portfolio: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const playingSources = useRef<Set<MessageEventSource>>(new Set());

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== 'https://www.youtube.com') return;
      let data: any;
      try {
        data = JSON.parse(e.data);
      } catch {
        return;
      }
      if (data.event !== 'infoDelivery' || !data.info || typeof data.info.playerState !== 'number') return;

      const state = data.info.playerState;
      const wasPlaying = playingSources.current.size > 0;

      if (state === 1) {
        if (e.source) playingSources.current.add(e.source);
      } else if (state === 0 || state === 2) {
        if (e.source) playingSources.current.delete(e.source);
      }
      const isPlaying = playingSources.current.size > 0;

      if (!wasPlaying && isPlaying) {
        swiperRef.current?.autoplay?.stop();
      } else if (wasPlaying && !isPlaying) {
        swiperRef.current?.autoplay?.start();
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  const subscribeToPlayer = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
    e.currentTarget.contentWindow?.postMessage(
      JSON.stringify({ event: 'listening', id: e.currentTarget.id, channel: 'widget' }),
      '*'
    );
  };

  return (
    <section
      id="portfolio"
      className="py-24 border-t border-[color:var(--hairline)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 reveal">
          <span className="accent-line" />
          <h2 className="text-5xl md:text-7xl font-display font-bold text-bone tracking-tight mb-3">
            Trabalhos
          </h2>
          <p className="eyebrow">Vídeos e discografia</p>
        </div>
      </div>

      <div className="mb-28 reveal relative w-full">
        <Swiper
          modules={[Autoplay, FreeMode]}
          onSwiper={(s) => (swiperRef.current = s)}
          spaceBetween={20}
          slidesPerView={1.5}
          loop={true}
          speed={8000}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          freeMode={true}
          breakpoints={{
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4.5 },
            1440: { slidesPerView: 5.5 },
          }}
          className="!overflow-visible"
        >
          {[...videos, ...videos].map((video, index) => (
            <SwiperSlide key={`${video.id}-${index}`}>
              <div className="rack aspect-video overflow-hidden group/item hover:border-signal/50 transition-colors duration-500">
                <iframe
                  id={`yt-player-${index}`}
                  className="w-full h-full brightness-[0.72] group-hover/item:brightness-100 transition-all duration-500 pointer-events-none md:pointer-events-auto"
                  src={`https://www.youtube.com/embed/${video.id}?controls=1&rel=0&enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}`}
                  title={video.title}
                  onLoad={subscribeToPlayer}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-dust mb-6">
            No Spotify
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[color:var(--hairline)] border border-[color:var(--hairline)]">
            {spotifyAlbums.map((id) => (
              <div key={id} className="bg-surface p-4">
                <iframe
                  className="w-full"
                  src={`https://open.spotify.com/embed/album/${id}?utm_source=generator&theme=0`}
                  height="160"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={`Álbum Spotify ${id}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
