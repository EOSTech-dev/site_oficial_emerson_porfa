import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

const videos = [
  { id: 'GEA228kU1-g', title: 'Mixagem Profissional' },
  { id: 'HrolZFCRT6I', title: 'Técnicas de Áudio' },
  { id: 'PHS1GcN6GOM', title: 'Masterização' },
  { id: 'UPxGfLnUVkA', title: 'Produção Musical' },
  { id: '4p0NI2tOmkE', title: 'Estúdio e Equipamentos' },
  { id: 'PubdXt8Qy-I', title: 'Equalização' },
  { id: 'E858Lwqez0o', title: 'Sessão de Gravação' }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16 reveal">
          <div className="accent-line"></div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter uppercase mb-4">
            Trabalhos
          </h2>
          <p className="text-neutral-500 text-xs tracking-[0.4em] uppercase">PORTFÓLIO</p>
        </div>
      </div>

      {/* Infinite Marquee Section */}
      <div className="mb-32 reveal delay-100 relative w-full overflow-visible">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={20}
          slidesPerView={1.5}
          loop={true}
          speed={8000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          freeMode={true}
          breakpoints={{
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4.5 },
            1440: { slidesPerView: 5.5 },
          }}
          className="portfolio-ticker !overflow-visible"
        >
          {/* We duplicate videos to ensure seamless loop */}
          {[...videos, ...videos].map((video, index) => (
            <SwiperSlide key={`${video.id}-${index}`}>
              <div className="rack-border bg-[#080808] aspect-video overflow-hidden group/item cursor-pointer transition-all duration-500 hover:border-white/40">
                <iframe
                  className="w-full h-full brightness-75 group-hover/item:brightness-100 transition-all duration-500 pointer-events-none md:pointer-events-auto"
                  src={`https://www.youtube.com/embed/${video.id}?controls=1&rel=0&mute=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Spotify Section */}
        <div className="reveal delay-200">
          <div className="flex items-center gap-6 mb-12">
            <div className="flex-1 h-px bg-white/5"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            <div className="bg-[#080808] p-4 hover:bg-[#0c0c0c] transition-colors">
              <iframe
                className="w-full"
                src="https://open.spotify.com/embed/album/3X5wz47oetvo2EMcViUnWs?utm_source=generator&theme=0"
                height="160"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Album 1"
              ></iframe>
            </div>

            <div className="bg-[#080808] p-4 hover:bg-[#0c0c0c] transition-colors">
              <iframe
                className="w-full"
                src="https://open.spotify.com/embed/album/1SMRpldg9K9lWoGw0r1J2w?utm_source=generator&theme=0"
                height="160"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Album 2"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

