import React, { useState } from 'react';
import { SERVICES } from '../data/services';
import { ServiceItem } from '../types';
import { Check, ArrowRight, X, Sparkles, Layers, Search, Bot, Database, FileText } from 'lucide-react';

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  '01': <Search className="w-5 h-5 text-amber-400" />,
  '02': <Bot className="w-5 h-5 text-amber-400" />,
  '03': <Database className="w-5 h-5 text-amber-400" />,
  '04': <Layers className="w-5 h-5 text-amber-400" />,
  '05': <Sparkles className="w-5 h-5 text-amber-400" />,
  '06': <FileText className="w-5 h-5 text-amber-400" />,
};

interface ServicesBentoProps {
  onOpenDiagnostic: () => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onOpenDiagnostic }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="solucoes" className="py-24 bg-[#090d15] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              Soluções Integradas B2B
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display leading-tight">
              Serviços claros com foco obsessivo em ROI industrial.
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-lg leading-relaxed">
            Planejamento cirúrgico, conteúdo técnico, tráfego qualificado e automação inteligente para preencher o pipeline dos seus vendedores com orçamentos homologáveis.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900/90 hover:border-slate-700 transition-all duration-200"
            >
              <div>
                {/* Header row: Number and Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-slate-500 group-hover:text-amber-400 transition-colors">
                      {service.number}.
                    </span>
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                      {SERVICE_ICONS[service.number]}
                    </div>
                  </div>
                  <span className="text-[11px] font-medium text-amber-400/90 bg-amber-400/10 px-2.5 py-1 rounded">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Key Deliverables Bullet List */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  {service.deliverables.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Impact and Interactive Details Trigger */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  {service.metricsImpact}
                </span>
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer group-hover:translate-x-0.5"
                >
                  <span>Detalhes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-2xl rounded-xl border border-slate-700 bg-[#0d1422] p-6 sm:p-8 shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-md bg-slate-900 border border-slate-800 cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <span>SOLUÇÃO {selectedService.number}</span>
                <span>·</span>
                <span>{selectedService.badge}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                {selectedService.title}
              </h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Entregáveis Técnicos da Metodologia:
              </h4>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {selectedService.deliverables.map((deliv, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-between">
              <span className="text-xs text-amber-200">Impacto Estimado:</span>
              <span className="text-xs font-bold text-amber-400 font-mono">
                {selectedService.metricsImpact}
              </span>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Voltar
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenDiagnostic();
                }}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
              >
                Incluir no Meu Diagnóstico
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
