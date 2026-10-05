import React, { useState } from 'react';
import { Hammer, Cpu, FlaskConical, Zap, Cog, Truck, Wrench, Boxes, ChevronRight } from 'lucide-react';
import { SECTORS } from '../data/cases';

const ICON_MAP: Record<string, React.ReactNode> = {
  Hammer: <Hammer className="w-5 h-5 text-amber-400" />,
  Cpu: <Cpu className="w-5 h-5 text-amber-400" />,
  FlaskConical: <FlaskConical className="w-5 h-5 text-amber-400" />,
  Zap: <Zap className="w-5 h-5 text-amber-400" />,
  Cog: <Cog className="w-5 h-5 text-amber-400" />,
  Truck: <Truck className="w-5 h-5 text-amber-400" />,
  Wrench: <Wrench className="w-5 h-5 text-amber-400" />,
  Boxes: <Boxes className="w-5 h-5 text-amber-400" />,
};

interface SectorPillsProps {
  onSelectSector?: (sectorName: string) => void;
}

export const SectorPills: React.FC<SectorPillsProps> = ({ onSelectSector }) => {
  const [activeSector, setActiveSector] = useState(SECTORS[0].name);

  return (
    <section className="py-16 bg-[#090d14] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              Segmentos de Especialidade
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Especialistas em vendas complexas para múltiplos nichos industriais.
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Cada segmento industrial possui dinâmicas de compras, normas regulatórias e especificações únicas. Nossas estratégias são customizadas para falar a língua da sua fábrica.
          </p>
        </div>

        {/* Sector Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {SECTORS.map((sector) => {
            const isSelected = activeSector === sector.name;
            return (
              <div
                key={sector.name}
                onClick={() => {
                  setActiveSector(sector.name);
                  if (onSelectSector) onSelectSector(sector.name);
                }}
                className={`group p-4 sm:p-5 rounded-lg border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 border-amber-400/80 shadow-md shadow-amber-400/5'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 rounded-md bg-slate-900 border border-slate-800 group-hover:border-slate-700">
                    {ICON_MAP[sector.icon]}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 tabular-nums">
                    {sector.count}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                  {sector.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {sector.desc}
                </p>
                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-amber-400/90 font-medium">
                  <span>Ver estratégia</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
