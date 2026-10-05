import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Clock, Send, Factory, Sparkles, Building2, Phone, Mail, User } from 'lucide-react';

interface DiagnosticFormProps {
  initialData?: {
    revenue?: string;
    ticket?: string;
    quotes?: number;
    roi?: string;
  } | null;
}

export const DiagnosticForm: React.FC<DiagnosticFormProps> = ({ initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    segment: 'Metalurgia & Usinagem',
    revenueBracket: 'R$ 10M a R$ 50M / ano',
    bottleneck: 'Geração de cotações qualificadas',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.company.trim()) {
      setErrorMsg('Por favor, preencha todos os campos obrigatórios (*).');
      return;
    }

    // Basic email validation
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMsg('Por favor, insira um e-mail corporativo válido.');
      return;
    }

    setLoading(true);

    // Simulate sending lead to CRM and processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="diagnostico" className="py-24 bg-[#080c13] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Proposition & Guarantee */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Fale com um Engenheiro de Demanda
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display leading-tight">
              Quer atrair mais clientes B2B com consistência e ROI comprovado?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Receba um diagnóstico completo sobre o posicionamento digital da sua indústria, volume de busca nos seus termos técnicos e as falhas que estão afastando compradores corporativos.
            </p>

            {initialData && (
              <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Dados do Simulador Integrados</span>
                </div>
                <div className="text-xs text-slate-300">
                  Potencial estimado: <strong className="text-amber-400">{initialData.revenue}</strong> em novos orçamentos anuais com ROI de <strong className="text-emerald-400">{initialData.roi}</strong>.
                </div>
              </div>
            )}

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-amber-400/10 text-amber-400 mt-1">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Resposta em até 24 horas úteis</div>
                  <div className="text-xs text-slate-400">
                    Seu contato é analisado diretamente por consultores sêniores em B2B industrial.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-amber-400/10 text-amber-400 mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Diagnóstico gratuito & confidencial</div>
                  <div className="text-xs text-slate-400">
                    Sem compromisso comercial prévio e com garantia de sigilo de mercado (NDA).
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-amber-400/10 text-amber-400 mt-1">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Plano de Ação Personalizado</div>
                  <div className="text-xs text-slate-400">
                    Mapeamento de 20 a 50 palavras-chave estratégicas do seu setor já na 1ª reunião.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Box */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-slate-700/80 bg-slate-900/90 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Diagnóstico Solicitado com Sucesso!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Olá, <strong>{formData.name}</strong>. Nossa equipe técnica da STK Marketing já iniciou a auditoria prévia da <strong>{formData.company}</strong>. Um dos nossos especialistas entrará em contato em menos de 24 horas úteis via WhatsApp e e-mail corporativo.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-md transition-colors cursor-pointer"
                    >
                      Enviar Nova Mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-800 pb-3 mb-4">
                    <h3 className="text-lg font-bold text-white font-display">
                      Solicitar Diagnóstico Comercial
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Preencha os dados da sua empresa para receber uma avaliação técnica sob medida.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-md bg-red-950/40 border border-red-800 text-xs text-red-300">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Seu Nome Completo *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-500 absolute left-3 top-3 pointer-events-none" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Ex: Roberto Silveira"
                          className="w-full bg-slate-950 border border-slate-800 rounded-md pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        E-mail Corporativo *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3 pointer-events-none" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="roberto@suaindustria.com.br"
                          className="w-full bg-slate-950 border border-slate-800 rounded-md pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        WhatsApp / Celular com DDD *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3 pointer-events-none" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(11) 98765-4321"
                          className="w-full bg-slate-950 border border-slate-800 rounded-md pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Nome da Indústria / Empresa *
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-3 pointer-events-none" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Ex: Mecânica & Válvulas Alfa"
                          className="w-full bg-slate-950 border border-slate-800 rounded-md pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Segmento Industrial
                      </label>
                      <select
                        name="segment"
                        value={formData.segment}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option value="Metalurgia & Usinagem">Metalurgia & Usinagem</option>
                        <option value="Automação & Robótica">Automação & Robótica</option>
                        <option value="Química & Polímeros">Química & Polímeros</option>
                        <option value="Máquinas & Equipamentos">Máquinas & Equipamentos</option>
                        <option value="Energia & Óleo/Gás">Energia & Óleo/Gás</option>
                        <option value="Logística & Embalagens">Logística & Embalagens</option>
                        <option value="Outro Segmento B2B">Outro Segmento B2B</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Faixa de Faturamento Anual
                      </label>
                      <select
                        name="revenueBracket"
                        value={formData.revenueBracket}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option value="Até R$ 10M / ano">Até R$ 10M / ano</option>
                        <option value="R$ 10M a R$ 50M / ano">R$ 10M a R$ 50M / ano</option>
                        <option value="R$ 50M a R$ 200M / ano">R$ 50M a R$ 200M / ano</option>
                        <option value="Acima de R$ 200M / ano">Acima de R$ 200M / ano</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Principal Gargalo Atual
                    </label>
                    <select
                      name="bottleneck"
                      value={formData.bottleneck}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="Geração de cotações qualificadas">Geração de cotações qualificadas (poucos orçamentos)</option>
                      <option value="Cliques desqualificados em anúncios">Cliques desqualificados / verba queimada sem retorno</option>
                      <option value="Ciclo de vendas muito longo e arrastado">Ciclo de vendas muito longo e arrastado</option>
                      <option value="Falta de posicionamento orgânico e SEO técnico">Falta de posicionamento orgânico e SEO técnico</option>
                      <option value="Desconexão entre Marketing e time comercial (CRM)">Desconexão entre Marketing e time comercial (CRM)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Contexto ou Produtos Principais (Opcional)
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Ex: Fabricamos bombas centrífugas industriais e precisamos falar com usinas de cana e cervejarias..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-md cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Processando Dados da Fábrica...</span>
                      ) : (
                        <>
                          <span>Receber Diagnóstico Técnico Gratuito</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-slate-500 mt-2">
                      Seus dados são 100% confidenciais protegidos sob acordo estrito de privacidade e LGPD.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
