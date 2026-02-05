import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const BLOG_URL = "https://www.blog.emersonporfaaudio.com.br";

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen ? 'bg-black/95 backdrop-blur-sm py-3 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Style: Jeff Moberg (Bold + Lines) */}
        <a href="#" className="flex flex-col group z-50 items-start transform scale-90 origin-left">
          <h1 className="text-xl md:text-2xl font-display font-bold text-white leading-none tracking-tight group-hover:text-neutral-300 transition-colors">
            EMERSON PORFA
          </h1>
          <div className="flex items-center gap-2 w-full mt-1">
             <div className="h-[1px] bg-neutral-600 flex-grow group-hover:bg-white transition-colors"></div>
             <span className="text-[8px] md:text-[9px] font-sans font-bold tracking-[0.4em] text-neutral-400 group-hover:text-white transition-colors uppercase">
               AUDIO
             </span>
             <div className="h-[1px] bg-neutral-600 flex-grow group-hover:bg-white transition-colors"></div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <a href="#hero" className="text-[12px] font-bold text-neutral-400 hover:text-white transition-colors uppercase tracking-[0.2em] hover:scale-105 transform duration-300">Início</a>
          <a href="#sobre" className="text-[12px] font-bold text-neutral-400 hover:text-white transition-colors uppercase tracking-[0.2em] hover:scale-105 transform duration-300">Sobre</a>
          <a href="#servicos" className="text-[12px] font-bold text-neutral-400 hover:text-white transition-colors uppercase tracking-[0.2em] hover:scale-105 transform duration-300">Serviços</a>
          <a href="#portfolio" className="text-[12px] font-bold text-neutral-400 hover:text-white transition-colors uppercase tracking-[0.2em] hover:scale-105 transform duration-300">Portfólio</a>
          
          <a 
            href={BLOG_URL} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] font-bold text-neutral-400 hover:text-white transition-colors uppercase tracking-[0.2em] hover:scale-105 transform duration-300 flex items-center gap-1"
          >
            Blog <ExternalLink className="w-3 h-3 mb-1" />
          </a>

          <a 
            href="#contato"
            className="text-[10px] font-bold text-black bg-white px-5 py-1.5 hover:bg-neutral-300 transition-all uppercase tracking-[0.2em]"
          >
            Contato
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 md:hidden">
            <a onClick={() => setIsMobileMenuOpen(false)} href="#hero" className="text-2xl font-display text-white uppercase tracking-widest">Início</a>
            <a onClick={() => setIsMobileMenuOpen(false)} href="#sobre" className="text-2xl font-display text-white uppercase tracking-widest">Sobre</a>
            <a onClick={() => setIsMobileMenuOpen(false)} href="#servicos" className="text-2xl font-display text-white uppercase tracking-widest">Serviços</a>
            <a onClick={() => setIsMobileMenuOpen(false)} href="#portfolio" className="text-2xl font-display text-white uppercase tracking-widest">Portfólio</a>
            <a 
              onClick={() => setIsMobileMenuOpen(false)} 
              href={BLOG_URL} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-display text-white uppercase tracking-widest flex items-center gap-2"
            >
              Blog <ExternalLink className="w-5 h-5" />
            </a>
            <a onClick={() => setIsMobileMenuOpen(false)} href="#contato" className="text-2xl font-bold font-display text-black bg-white px-8 py-3 uppercase tracking-widest mt-4">Contato</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;