import React, { useState } from 'react';
import { TECHNICAL_GUIDES } from '../data/services';
import { TechnicalGuide } from '../types';
import { BookOpen, ArrowUpRight, X, CheckCircle2, Download } from 'lucide-react';

export const TechnicalGuides: React.FC = () => {
  const [activeGuide, setActiveGuide] = useState<TechnicalGuide | null>(null);

  return (
    <section id="guias" className="py-24 bg-[#090d15] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              Conhecimento & Inteligência Industrial
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display leading-tight">
              Conteúdo técnico que orienta a tomada de decisão.
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-lg leading-relaxed">
            Metodologias, frameworks e manuais práticos desenvolvidos pelos nossos diretores de estratégia para quem vive a rotina industrial.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECHNICAL_GUIDES.map((guide) => (
            <div
              key={guide.id}
              className="group p-6 sm:p-7 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="text-amber-400 font-semibold">{guide.category}</span>
                  <span className="font-mono">{guide.readTime}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug mb-3">
                  {guide.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {guide.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  {guide.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">Disponível em PDF & Leitura</span>
                <button
                  onClick={() => setActiveGuide(guide)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer group-hover:translate-x-1"
                >
                  <span>Acessar Guia</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guide Reader Modal */}
      {activeGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl rounded-xl border border-slate-700 bg-[#0d1422] p-6 sm:p-8 shadow-2xl space-y-6">
            <button
              onClick={() => setActiveGuide(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-md bg-slate-900 border border-slate-800 cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
                <span>{activeGuide.category}</span>
                <span>·</span>
                <span>{activeGuide.readTime}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                {activeGuide.title}
              </h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {activeGuide.description}
            </p>

            <div className="p-5 rounded-lg bg-slate-950 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Tópicos Principais deste Guia:
              </h4>
              <div className="space-y-2">
                {activeGuide.keyTakeaways.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400">
                Material gratuito disponibilizado pela equipe técnica STK.
              </span>
              <button
                onClick={() => {
                  alert('Guia técnico baixado com sucesso em formato PDF de alta resolução.');
                  setActiveGuide(null);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Baixar Guia Técnico (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
