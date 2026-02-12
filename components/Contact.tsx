import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, CheckCircle, AlertTriangle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const WEBHOOK_URL = 'https://produtos-porfa-n8n.o5omzm.easypanel.host/webhook/contato-site';

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          date: new Date().toLocaleString('pt-BR'),
          source: 'Site Portfolio Emerson Porfa'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '', service: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Erro ao enviar para n8n:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contato" className="py-24 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16 reveal">
          <div className="accent-line"></div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter uppercase mb-4">
            Contato
          </h2>
          <p className="text-neutral-500 text-xs tracking-[0.4em] uppercase">Conexão & Orçamentos</p>
        </div>

        <div className="flex flex-col md:flex-row gap-px bg-white/10 border border-white/10 overflow-hidden">

          {/* Lado Esquerdo: Informações */}
          <div className="w-full md:w-5/12 p-12 md:p-16 bg-[#080808] flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-bold text-white mb-12 uppercase tracking-[0.3em]">Canais de Entrada</h3>
              <div className="space-y-12">
                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 rack-border flex items-center justify-center bg-black">
                      <Phone className="w-3 h-3 text-[var(--accent)]" />
                    </div>
                    <h4 className="font-bold text-[10px] uppercase tracking-widest text-neutral-500">Signal / WhatsApp</h4>
                  </div>
                  <a href="https://wa.me/5534991780015" target="_blank" rel="noreferrer" className="text-white hover:text-[var(--accent)] transition-colors block pl-12 text-lg font-light">+55 34 99178-0015</a>
                </div>

                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 rack-border flex items-center justify-center bg-black">
                      <Mail className="w-3 h-3 text-[var(--accent)]" />
                    </div>
                    <h4 className="font-bold text-[10px] uppercase tracking-widest text-neutral-500">Data / E-mail</h4>
                  </div>
                  <a href="mailto:porfamail@gmail.com" className="text-white hover:text-[var(--accent)] transition-colors block pl-12 text-lg font-light">porfamail@gmail.com</a>
                </div>

                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 rack-border flex items-center justify-center bg-black">
                      <MapPin className="w-3 h-3 text-[var(--accent)]" />
                    </div>
                    <h4 className="font-bold text-[10px] uppercase tracking-widest text-neutral-500">Origin / Localização</h4>
                  </div>
                  <span className="text-white block pl-12 text-lg font-light">Uberlândia - MG</span>
                </div>
              </div>
            </div>

            <div className="mt-20 pt-10 border-t border-white/5">
              <h4 className="font-bold text-[10px] uppercase tracking-widest text-neutral-500 mb-8">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/emersonporfa/" target="_blank" rel="noreferrer" className="w-12 h-12 rack-border flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-all bg-black">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://web.facebook.com/emerson.porfa" target="_blank" rel="noreferrer" className="w-12 h-12 rack-border flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-all bg-black">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/emersonporfa/" target="_blank" rel="noreferrer" className="w-12 h-12 rack-border flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-all bg-black">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Lado Direito: Formulário */}
          <div className="w-full md:w-7/12 p-12 md:p-16 bg-black relative">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in min-h-[500px]">
                <div className="w-20 h-20 rack-border text-[var(--accent)] flex items-center justify-center mb-8 bg-[#080808]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-4">Sinal Recebido</h3>
                <p className="text-neutral-500 max-w-sm mb-12 text-sm leading-relaxed">
                  Sua mensagem foi processada com sucesso. Entraremos em contato em breve para discutir os detalhes técnicos.
                </p>
                <button onClick={() => setStatus('idle')} className="text-[10px] font-bold uppercase tracking-[0.4em] text-white underline decoration-[var(--accent)] underline-offset-8 transition-opacity hover:opacity-70">Resetar Formulário</button>
              </div>
            ) : status === 'error' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in min-h-[500px]">
                <div className="w-20 h-20 rack-border text-red-500 flex items-center justify-center mb-8 bg-[#080808]">
                  <AlertTriangle className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-4">Falha no Link</h3>
                <p className="text-neutral-500 max-w-sm mb-12 text-sm">
                  Ocorreu uma interferência no envio. Por favor, tente novamente ou use nossos canais diretos.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-technical">
                  Tentar Novamente
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 reveal delay-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[9px] uppercase font-bold tracking-[0.3em] text-neutral-600 ml-1">Full Name / Id</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#080808] border border-white/10 px-5 py-4 text-white text-sm focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-neutral-800"
                      placeholder="Identificação"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[9px] uppercase font-bold tracking-[0.3em] text-neutral-600 ml-1">Contact Link / Mobile</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#080808] border border-white/10 px-5 py-4 text-white text-sm focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-neutral-800"
                      placeholder="Telefone / WhatsApp"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[9px] uppercase font-bold tracking-[0.3em] text-neutral-600 ml-1">Email Access / Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#080808] border border-white/10 px-5 py-4 text-white text-sm focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-neutral-800"
                      placeholder="exemplo@servidor.com"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[9px] uppercase font-bold tracking-[0.3em] text-neutral-600 ml-1">Service Module</label>
                    <div className="relative">
                      <select
                        required
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-[#080808] border border-white/10 px-5 py-4 text-white text-sm focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none"
                      >
                        <option value="" disabled className="bg-black">Selecione o Serviço</option>
                        <option value="Mixagem" className="bg-black">Mixagem Profissional</option>
                        <option value="Masterizacao" className="bg-black">Masterização Pro</option>
                        <option value="Restauracao" className="bg-black">Restauração Técnica</option>
                        <option value="Edicao" className="bg-black">Edição de Áudio</option>
                        <option value="Mentoria" className="bg-black">Mentoria 1:1</option>
                        <option value="Outro" className="bg-black">Outro Projeto</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <span className="text-[var(--accent)] text-[8px]">▼</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[9px] uppercase font-bold tracking-[0.3em] text-neutral-600 ml-1">Project Message / Briefing</label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-[#080808] border border-white/10 px-5 py-4 text-white text-sm focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-neutral-800 resize-none"
                    placeholder="Descreva seu projeto ou necessidade técnica..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-technical w-full flex items-center justify-center gap-4 disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Enviando Sinal...' : (
                    <>
                      Enviar Mensagem <Send className="w-3 h-3" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;