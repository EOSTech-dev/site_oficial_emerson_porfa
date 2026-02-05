import React from 'react';
import { Instagram, Facebook, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const BLOG_URL = "https://www.blog.emersonporfaaudio.com.br";

  return (
    <footer className="py-8 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
        <div className="mb-4 md:mb-0">
          <p className="font-bold text-white uppercase tracking-wider mb-1">EOSTECH</p>
          <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>

        <div className="flex gap-8 items-center">
            {/* Blog Link Footer Externo */}
            <a 
              href={BLOG_URL} 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors uppercase text-xs tracking-widest flex items-center gap-2"
            >
                Blog <ExternalLink className="w-3 h-3" />
            </a>
            
            <div className="flex gap-6 items-center border-l border-white/10 pl-8">
              <a href="https://www.instagram.com/emersonporfa/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <span className="hidden md:inline">Instagram</span>
              </a>
              <a href="https://web.facebook.com/emerson.porfa" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <Facebook className="w-4 h-4" />
                <span className="hidden md:inline">Facebook</span>
              </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;