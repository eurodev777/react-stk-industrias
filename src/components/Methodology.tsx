import React from 'react';
import { Check, ArrowRight, Compass, Shield, Target, RefreshCw } from 'lucide-react';

interface MethodologyProps {
  onOpenDiagnostic: () => void;
}

export const Methodology: React.FC<MethodologyProps> = ({ onOpenDiagnostic }) => {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico & Posicionamento Técnico',
      desc: 'Mapeamos a jornada de compra dos seus clientes corporativos, decodificamos suas normas técnicas, analisamos concorrentes e definimos seu ICP (Perfil de Cliente Ideal).',
      icon: <Compass className="w-5 h-5 text-amber-400" />,
    },
    {
      number: '02',
      title: 'Infraestrutura Digital & Ativos de Decisão',
      desc: 'Desenvolvemos landing pages de alta conversão, estruturamos catálogos técnicos em PDF, integramos CRM e configuramos a automação de cotação via WhatsApp.',
      icon: <Target className="w-5 h-5 text-amber-400" />,
    },
    {
      number: '03',
      title: 'Engenharia de Aquisição Multicanal',
      desc: 'Ativação de campanhas de Google Ads B2B de precisão cirúrgica, SEO Técnico/AEO para motores de IA e Account-Based Marketing (ABM) no LinkedIn.',
      icon: <Shield className="w-5 h-5 text-amber-400" />,
    },
    {
      number: '04',
      title: 'Otimização Contínua de ROI & Escala',
      desc: 'Acompanhamento semanal de SQLs, reuniões de alinhamento com seu time de vendas e refinamento constante das palavras-chave que trazem orçamentos reais.',
      icon: <RefreshCw className="w-5 h-5 text-amber-400" />,
    },
  ];

  const valuePoints = [
    'Estratégia clara, executável e desenhada para o setor fabril',
    'Materiais e catálogos técnicos prontos para o time comercial fechar',
    'Conteúdo estruturado para ser a resposta primária em buscas e IAs',
    'Métricas ligadas a propostas formalizadas e faturamento no ERP',
    'Equipe sênior acessível, sem intermediários ou jargões sem sentido',
    'Confidencialidade estrita com NDA (Termo de Sigilo) para cada cliente',
  ];

  return (
    <section id="metodologia" className="py-24 bg-[#0b0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: 4-Step Process */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                Método STK Industrial
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display leading-tight">
                Processo estruturado, previsibilidade e resultado direto.
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Do primeiro diagnóstico ao acompanhamento de faturamento: uma esteira rigorosa que conecta engenharia, marketing e seu time comercial.
              </p>
            </div>

            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="p-5 sm:p-6 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900/90 hover:border-slate-700 transition-all flex items-start gap-4"
                >
                  <div className="flex flex-col items-center shrink-0">
                    <span className="font-mono text-sm font-bold text-amber-400">
                      {step.number}
                    </span>
                    <div className="mt-2 p-2 rounded-lg bg-slate-950 border border-slate-800">
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: What You Get & Direct Access */}
          <div className="lg:col-span-5 rounded-xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 space-y-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-1">
                Padrão de Qualidade STK
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                O que sua indústria encontra aqui
              </h3>
            </div>

            <div className="space-y-3 pt-2">
              {valuePoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                  <div className="p-1 rounded bg-amber-400/10 text-amber-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-lg bg-slate-950 border border-slate-800 space-y-3">
              <div className="text-xs font-semibold text-white">
                Compromisso com Sigilo e Segurança (NDA)
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Entendemos que desenhos técnicos, tabelas de preço e clientes industriais são segredos industriais estratégicos. Todos os projetos são resguardados por cláusulas contratuais de sigilo.
              </p>
            </div>

            <button
              onClick={onOpenDiagnostic}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
            >
              <span>Agendar Apresentação do Método</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
