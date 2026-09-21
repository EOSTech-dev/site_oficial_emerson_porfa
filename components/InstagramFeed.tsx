import React, { useEffect } from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';

const POSTS = [
  'https://www.instagram.com/p/DRVSn0wjjbV/',
  'https://www.instagram.com/p/DW9o1W-gkQ8/',
  'https://www.instagram.com/p/DMDYzFqOth1/',
];
const PROFILE = 'https://www.instagram.com/emersonporfa/';

const InstagramFeed: React.FC = () => {
  useEffect(() => {
    const process = () => (window as any).instgrm?.Embeds?.process();
    if ((window as any).instgrm) {
      process();
      return;
    }
    const existing = document.getElementById('ig-embed-script');
    if (existing) {
      existing.addEventListener('load', process, { once: true });
      return;
    }
    const s = document.createElement('script');
    s.id = 'ig-embed-script';
    s.async = true;
    s.src = 'https://www.instagram.com/embed.js';
    s.onload = process;
    document.body.appendChild(s);
  }, []);

  return (
    <section id="instagram" className="py-24 border-t border-[color:var(--hairline)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="accent-line" />
            <h2 className="text-5xl md:text-7xl font-display font-bold text-bone tracking-tight mb-3">
              Nos palcos
            </h2>
            <p className="eyebrow">Registros no Instagram</p>
          </div>
          <a
            href={PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.24em] text-ash hover:text-bone transition-colors flex items-center gap-2"
          >
            <Instagram className="w-4 h-4" /> Ver no Instagram <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[color:var(--hairline)] border border-[color:var(--hairline)]">
          {POSTS.map((url) => (
            <div key={url} className="bg-surface p-3 flex justify-center reveal">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{ background: 'transparent', border: 0, margin: 0, width: '100%', maxWidth: 340 }}
              >
                <a href={url} target="_blank" rel="noopener noreferrer" className="text-ash text-sm">
                  Ver publicação no Instagram
                </a>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
