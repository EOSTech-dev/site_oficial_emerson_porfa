import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const KOLBIE_URL = 'https://www.kolbiemusic.com.br';
const BLOG_URL = 'https://www.blog.emersonporfaaudio.com.br';

const navItems = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Trabalhos', href: '#portfolio' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? 'bg-void/95 backdrop-blur-sm py-3 border-b border-[color:var(--hairline)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="z-50 group inline-flex" aria-label="Emerson Porfa Áudio">
          <img
            src="/logo.png"
            alt="Emerson Porfa Áudio"
            className={`object-contain transition-all duration-500 group-hover:opacity-90 ${
              scrolled || menuOpen ? 'h-14 md:h-16' : 'h-20 md:h-24'
            }`}
          />
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] font-medium text-ash hover:text-bone transition-colors uppercase tracking-[0.18em]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={KOLBIE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] font-medium text-ash hover:text-bone transition-colors uppercase tracking-[0.18em] flex items-center gap-1"
          >
            Serviços <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href={BLOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] font-medium text-ash hover:text-bone transition-colors uppercase tracking-[0.18em] flex items-center gap-1"
          >
            Blog <ArrowUpRight className="w-3 h-3" />
          </a>
          <a href="#contato" className="btn-signal !py-2.5 !px-5">
            Contato
          </a>
        </nav>

        <button
          className="md:hidden z-50 text-bone"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {menuOpen && (
          <div className="fixed inset-0 bg-void flex flex-col items-center justify-center gap-8 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                onClick={() => setMenuOpen(false)}
                href={item.href}
                className="font-display text-2xl text-bone uppercase tracking-widest"
              >
                {item.label}
              </a>
            ))}
            <a
              onClick={() => setMenuOpen(false)}
              href={KOLBIE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-2xl text-bone uppercase tracking-widest flex items-center gap-2"
            >
              Serviços <ArrowUpRight className="w-5 h-5" />
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              href={BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-2xl text-bone uppercase tracking-widest flex items-center gap-2"
            >
              Blog <ArrowUpRight className="w-5 h-5" />
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              href="#contato"
              className="btn-signal mt-2"
            >
              Contato
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
