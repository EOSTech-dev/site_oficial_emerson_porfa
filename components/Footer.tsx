import React from 'react';
import { Instagram, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';

const BLOG_URL = 'https://www.blog.emersonporfaaudio.com.br';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-[color:var(--hairline)]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-dust text-sm">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Emerson Porfa Áudio" className="w-16 h-16 object-contain" />
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-bone uppercase tracking-wider mb-1">
              EOSTECH
            </p>
            <p className="font-mono text-xs">
              © {new Date().getFullYear()} Emerson Porfa · Áudio
            </p>
          </div>
        </div>

        <div className="flex gap-8 items-center">
          <a
            href={BLOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-bone transition-colors uppercase font-mono text-[11px] tracking-[0.2em] flex items-center gap-1.5"
          >
            Blog <ArrowUpRight className="w-3 h-3" />
          </a>
          <div className="flex gap-5 items-center border-l border-[color:var(--hairline)] pl-8">
            <a href="https://www.instagram.com/emersonporfa/" target="_blank" rel="noreferrer" className="hover:text-bone transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://web.facebook.com/emerson.porfa" target="_blank" rel="noreferrer" className="hover:text-bone transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/emersonporfa/" target="_blank" rel="noreferrer" className="hover:text-bone transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
