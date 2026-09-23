import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, CheckCircle, AlertTriangle, Send } from 'lucide-react';

const WEBHOOK_URL = 'https://produtos-porfa-n8n.o5omzm.easypanel.host/webhook/contato-site';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          date: new Date().toLocaleString('pt-BR'),
          source: 'Site Portfolio Emerson Porfa',
        }),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '', service: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar para n8n:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contato" className="py-24 border-t border-[color:var(--hairline)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 reveal">
          <span className="accent-line" />
          <h2 className="text-5xl md:text-7xl font-display font-bold text-bone tracking-tight mb-3">
            Contato
          </h2>
          <p className="eyebrow">Mentoria e conversas</p>
        </div>

        <div className="flex flex-col md:flex-row gap-px bg-[color:var(--hairline)] border border-[color:var(--hairline)]">
          {/* Info */}
          <div className="w-full md:w-5/12 p-10 md:p-14 bg-surface flex flex-col justify-between gap-16">
            <div className="space-y-10">
              <h3 className="font-mono text-[11px] font-medium text-bone uppercase tracking-[0.24em]">
                Canais diretos
              </h3>

              <div className="space-y-9">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rack flex items-center justify-center">
                      <Phone className="w-3 h-3 text-signal" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-dust">
                      WhatsApp
                    </span>
                  </div>
                  <a
                    href="https://wa.me/5534991780015"
                    target="_blank"
                    rel="noreferrer"
                    className="text-bone hover:text-signal transition-colors block pl-11 text-lg font-light"
                  >
                    +55 34 99178-0015
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rack flex items-center justify-center">
                      <Mail className="w-3 h-3 text-signal" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-dust">
                      E-mail
                    </span>
                  </div>
                  <a
                    href="mailto:porfamail@gmail.com"
                    className="text-bone hover:text-signal transition-colors block pl-11 text-lg font-light"
                  >
                    porfamail@gmail.com
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rack flex items-center justify-center">
                      <MapPin className="w-3 h-3 text-signal" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-dust">
                      Base
                    </span>
                  </div>
                  <span className="text-bone block pl-11 text-lg font-light">Uberlândia · MG</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[color:var(--hairline)]">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-dust mb-6">
                Redes
              </h4>
              <div className="flex gap-3">
                {[
                  { href: 'https://www.instagram.com/emersonporfa/', Icon: Instagram },
                  { href: 'https://web.facebook.com/emerson.porfa', Icon: Facebook },
                  { href: 'https://www.linkedin.com/in/emersonporfa/', Icon: Linkedin },
                ].map(({ href, Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rack flex items-center justify-center text-ash hover:text-bone hover:border-bone transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full md:w-7/12 p-10 md:p-14 bg-void">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in min-h-[480px]">
                <span className="w-20 h-20 rack text-signal flex items-center justify-center mb-8">
                  <CheckCircle className="w-8 h-8" />
                </span>
                <h3 className="text-3xl font-display font-bold text-bone mb-4">Sinal recebido</h3>
                <p className="text-dust max-w-sm mb-10 text-sm leading-relaxed">
                  Sua mensagem chegou. Retorno em breve para falar dos detalhes técnicos.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="font-mono text-[10px] uppercase tracking-[0.28em] text-bone underline decoration-signal underline-offset-8 hover:opacity-70 transition-opacity"
                >
                  Enviar outra
                </button>
              </div>
            ) : status === 'error' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in min-h-[480px]">
                <span className="w-20 h-20 rack text-red-500 flex items-center justify-center mb-8">
                  <AlertTriangle className="w-8 h-8" />
                </span>
                <h3 className="text-3xl font-display font-bold text-bone mb-4">Falha no envio</h3>
                <p className="text-dust max-w-sm mb-10 text-sm">
                  Algo travou no caminho. Tente de novo ou use os canais diretos ao lado.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-ghost">
                  Tentar de novo
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7 reveal">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-mono text-[9px] uppercase tracking-[0.24em] text-dust ml-1">
                      Nome
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="field"
                      placeholder="Como te chamo"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="font-mono text-[9px] uppercase tracking-[0.24em] text-dust ml-1">
                      Telefone
                    </label>
                    <input
                      id="phone"
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="field"
                      placeholder="WhatsApp de preferência"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-mono text-[9px] uppercase tracking-[0.24em] text-dust ml-1">
                      E-mail
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="field"
                      placeholder="voce@exemplo.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="font-mono text-[9px] uppercase tracking-[0.24em] text-dust ml-1">
                      Assunto
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        required
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="field appearance-none"
                      >
                        <option value="" disabled className="bg-void">Selecione</option>
                        <option value="Mentoria" className="bg-void">Mentoria 1:1</option>
                        <option value="Parceria" className="bg-void">Parceria</option>
                        <option value="Imprensa" className="bg-void">Imprensa</option>
                        <option value="Outro" className="bg-void">Outro assunto</option>
                      </select>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-signal text-[8px]">
                        ▼
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="font-mono text-[9px] uppercase tracking-[0.24em] text-dust ml-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="field resize-none"
                    placeholder="Conte do projeto: prazo, formato, referência..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-signal w-full disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    'Enviando...'
                  ) : (
                    <>
                      Enviar mensagem <Send className="w-3 h-3" />
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
