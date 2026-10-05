import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/cases';
import { CaseStudy } from '../types';
import { ArrowUpRight, TrendingUp, CheckCircle, Quote, X, FileText, ChevronRight } from 'lucide-react';

interface CaseStudiesProps {
  onOpenDiagnostic: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenDiagnostic }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [activeModalCase, setActiveModalCase] = useState<CaseStudy | null>(null);

  const categories = ['Todos', 'Metalurgia', 'Automação', 'Máquinas', 'Química'];

  const filteredCases = selectedCategory === 'Todos'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.category === selectedCategory);

  return (
    <section id="cases" className="py-24 bg-[#0b0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              Resultados Auditados & Prova Real
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display leading-tight">
              Cases de sucesso que geram faturamento real no ERP.
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-lg leading-relaxed">
            Veja como indústrias tradicionais saíram da dependência de cotações passivas para uma máquina previsível de novos contratos e homologações corporativas.
          </p>
        </div>

        {/* Filter Tabs (Interactive filter control as allowed in Section 1.A) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-900/90 rounded-lg border border-slate-800 w-fit mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCases.map((cs) => (
            <div
              key={cs.id}
              className="group rounded-xl border border-slate-800 bg-slate-900/70 hover:border-slate-700 hover:bg-slate-900 transition-all flex flex-col justify-between overflow-hidden shadow-xl"
            >
              <div className="p-6 sm:p-8 space-y-6">
                {/* Meta row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                    <span className="text-amber-400 font-semibold">{cs.client}</span>
                    <span aria-hidden="true">·</span>
                    <span>{cs.segment}</span>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    ROI {cs.roi}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {cs.headline}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {cs.challenge}
                </p>

                {/* Metrics 2x2 Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {cs.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800/90"
                    >
                      <div className="text-xl font-extrabold text-amber-400 font-display tabular-nums">
                        {m.value}
                      </div>
                      <div className="text-xs font-medium text-slate-200 mt-0.5">
                        {m.label}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        {m.subtext}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2 text-xs text-slate-400">
                  {cs.tags.map((t, idx) => (
                    <span key={idx} className="bg-slate-800/50 px-2 py-1 rounded border border-slate-700/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 sm:px-8 sm:py-4 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Ticket Médio: <strong className="text-white">{cs.ticketMedio}</strong>
                </span>
                <button
                  onClick={() => setActiveModalCase(cs)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer group-hover:translate-x-1"
                >
                  <span>Ver estudo completo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Aggregate Banner */}
        <div className="mt-14 p-8 rounded-xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#0e1626] border border-slate-800 grid md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="md:border-r md:border-slate-800 md:pr-6">
            <div className="text-3xl font-extrabold text-white font-display tabular-nums">+450</div>
            <div className="text-xs text-slate-400 mt-1">Projetos industriais estruturados desde 2008</div>
          </div>
          <div className="md:border-r md:border-slate-800 md:pr-6">
            <div className="text-3xl font-extrabold text-amber-400 font-display tabular-nums">R$ 1.2 Bi+</div>
            <div className="text-xs text-slate-400 mt-1">Volume acumulado de orçamentos gerados</div>
          </div>
          <div className="md:border-r md:border-slate-800 md:pr-6">
            <div className="text-3xl font-extrabold text-white font-display tabular-nums">92%</div>
            <div className="text-xs text-slate-400 mt-1">Leads dentro do perfil ideal de cliente (ICP)</div>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <button
              onClick={onOpenDiagnostic}
              className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-md cursor-pointer text-center"
            >
              Quero Resultados Assim
            </button>
          </div>
        </div>
      </div>

      {/* Case Details Full Modal */}
      {activeModalCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-3xl my-8 rounded-xl border border-slate-700 bg-[#0d1422] p-6 sm:p-8 shadow-2xl space-y-6">
            <button
              onClick={() => setActiveModalCase(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-md bg-slate-900 border border-slate-800 cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
                <span>ESTUDO DE CASO INDUSTRIAL</span>
                <span>·</span>
                <span>{activeModalCase.client}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                {activeModalCase.headline}
              </h3>
            </div>

            {/* Challenge & Solution */}
            <div className="space-y-4 text-sm text-slate-300">
              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Desafio Inicial
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeModalCase.challenge}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Estratégia e Execução STK
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeModalCase.solution}
                </p>
              </div>
            </div>

            {/* Metrics Breakdown */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Indicadores de Desempenho Auditados:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {activeModalCase.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-lg font-bold text-amber-400 font-display tabular-nums">
                      {m.value}
                    </div>
                    <div className="text-[11px] font-medium text-slate-200 mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Testimonial */}
            {activeModalCase.testimonial && (
              <div className="p-5 rounded-lg bg-amber-500/5 border border-amber-500/20 relative">
                <Quote className="w-6 h-6 text-amber-400/40 mb-2" />
                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                  "{activeModalCase.testimonial.quote}"
                </p>
                <div className="mt-3 pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs">
                  <span className="font-semibold text-white">
                    {activeModalCase.testimonial.author}
                  </span>
                  <span className="text-slate-400">
                    {activeModalCase.testimonial.role} · {activeModalCase.testimonial.company}
                  </span>
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400">
                Segmento: <strong className="text-white">{activeModalCase.segment}</strong>
              </span>
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveModalCase(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white cursor-pointer"
                >
                  Fechar
                </button>
                <button
                  onClick={() => {
                    setActiveModalCase(null);
                    onOpenDiagnostic();
                  }}
                  className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
                >
                  Modelar Estratégia Similar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
