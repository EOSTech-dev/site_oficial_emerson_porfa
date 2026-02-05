import React, { useState } from 'react';
import { Send, CheckCircle, Mail, Phone, MapPin, Instagram, Facebook, AlertTriangle } from 'lucide-react';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData & { service: string, phone: string }>({
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
    <section id="contato" className="py-32 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20 reveal text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter uppercase mb-4">
                Contato<span className="text-neutral-700">.</span>
            </h2>
            <p className="text-neutral-400 font-light text-lg">Vamos elevar o nível do seu projeto.</p>
        </div>

        <div className="bg-neutral-900 border border-white/10 flex flex-col md:flex-row reveal delay-200">
          
          {/* Lado Esquerdo: Informações */}
          <div className="w-full md:w-5/12 p-10 md:p-14 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between">
            <div>
                <h3 className="text-2xl font-display font-bold text-white mb-10 uppercase tracking-wide">Canais Diretos</h3>
                <div className="space-y-10">
                    <div className="group">
                        <div className="flex items-center gap-4 mb-2 text-white">
                            <Phone className="w-5 h-5" />
                            <h4 className="font-bold text-xs uppercase tracking-widest font-display">Telefone / WhatsApp</h4>
                        </div>
                        <a href="https://wa.me/5534991780015" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors block pl-9 text-lg font-light">+55 34 99178-0015</a>
                    </div>
                    
                    <div className="group">
                        <div className="flex items-center gap-4 mb-2 text-white">
                            <Mail className="w-5 h-5" />
                            <h4 className="font-bold text-xs uppercase tracking-widest font-display">E-mail</h4>
                        </div>
                        <a href="mailto:porfamail@gmail.com" className="text-neutral-400 hover:text-white transition-colors block pl-9 text-lg font-light">porfamail@gmail.com</a>
                    </div>

                    <div className="group">
                        <div className="flex items-center gap-4 mb-2 text-white">
                            <MapPin className="w-5 h-5" />
                            <h4 className="font-bold text-xs uppercase tracking-widest font-display">Localização</h4>
                        </div>
                        <span className="text-neutral-400 block pl-9 font-light">Uberlândia - MG<br/>(Atendimento Global)</span>
                    </div>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10">
                <h4 className="font-bold text-xs uppercase tracking-widest text-white mb-6 font-display">Siga-me</h4>
                <div className="flex gap-4">
                    <a href="https://www.instagram.com/emersonporfa/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-black border border-white/20 flex items-center justify-center hover:bg-white hover:text-black text-white transition-all rounded-sm">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="https://web.facebook.com/emerson.porfa" target="_blank" rel="noreferrer" className="w-12 h-12 bg-black border border-white/20 flex items-center justify-center hover:bg-white hover:text-black text-white transition-all rounded-sm">
                        <Facebook className="w-5 h-5" />
                    </a>
                </div>
            </div>
          </div>

          {/* Lado Direito: Formulário */}
          <div className="w-full md:w-7/12 p-10 md:p-14 bg-black/20">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in min-h-[400px]">
                <div className="w-24 h-24 bg-white text-black rounded-full flex items-center justify-center mb-8">
                   <CheckCircle className="w-12 h-12" />
                </div>
                <h3 className="text-4xl font-display font-bold text-white mb-4 uppercase">Sucesso</h3>
                <p className="text-neutral-400 max-w-sm">
                    Sua mensagem foi enviada para o nosso sistema. Entraremos em contato em breve.
                </p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-xs font-bold uppercase tracking-widest underline hover:text-white">Enviar nova mensagem</button>
              </div>
            ) : status === 'error' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in min-h-[400px]">
                <div className="w-24 h-24 bg-red-600 text-white rounded-full flex items-center justify-center mb-8">
                   <AlertTriangle className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-4 uppercase">Erro no Envio</h3>
                <p className="text-neutral-400 max-w-sm mb-8">
                    Não foi possível conectar ao servidor de automação no momento.
                </p>
                <button onClick={() => setStatus('idle')} className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-neutral-200 transition-colors">
                    Tentar Novamente
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-500 ml-1 font-display">Nome Completo</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-neutral-900 border border-white/10 p-4 text-white placeholder-neutral-700 focus:border-white focus:outline-none transition-colors text-sm"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                   <div className="space-y-3">
                    <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-500 ml-1 font-display">Telefone / WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-neutral-900 border border-white/10 p-4 text-white placeholder-neutral-700 focus:border-white focus:outline-none transition-colors text-sm"
                      placeholder="(DD) 99999-9999"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-3">
                    <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-500 ml-1 font-display">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-neutral-900 border border-white/10 p-4 text-white placeholder-neutral-700 focus:border-white focus:outline-none transition-colors text-sm"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-500 ml-1 font-display">Serviço de Interesse</label>
                    <div className="relative">
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-neutral-900 border border-white/10 p-4 text-white appearance-none focus:border-white focus:outline-none transition-colors cursor-pointer text-sm"
                      >
                        <option value="" disabled className="text-neutral-500">Selecione uma opção</option>
                        <option value="Mixagem Shows/TV">Mixagem para Shows, Estúdio e TV</option>
                        <option value="Masterizacao">Masterização</option>
                        <option value="Restauracao">Restauração de Áudio</option>
                        <option value="Edicao">Edição de Áudio</option>
                        <option value="Mentoria">Mentoria 1:1 (Mixagem)</option>
                        <option value="Blog">Parceria / Conteúdo Blog</option>
                        <option value="Outro">Outro Projeto</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                         <span className="text-white text-[10px]">▼</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-500 ml-1 font-display">Detalhes do Projeto</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-neutral-900 border border-white/10 p-4 text-white placeholder-neutral-700 focus:border-white focus:outline-none transition-colors resize-none text-sm"
                    placeholder="Descreva seu projeto..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-white text-black font-bold py-5 uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 text-sm font-display"
                >
                  {status === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
                  {status === 'idle' && <Send className="w-4 h-4" />}
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