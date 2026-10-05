import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Clock, ShieldCheck, ArrowRight, Sliders } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenDiagnosticWithData?: (data: { revenue: string; ticket: string; quotes: number; roi: string }) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDiagnosticWithData }) => {
  // Simulator inputs
  const [ticketMedio, setTicketMedio] = useState<number>(85000); // R$
  const [cotacoesAtuais, setCotacoesAtuais] = useState<number>(25); // cotações/mês
  const [taxaConversao, setTaxaConversao] = useState<number>(12); // %

  // Calculations based on STK industrial benchmarks:
  // - STK increases qualified quotation volume by ~140%
  // - STK improves closing rate by ~35% due to SQL pre-qualification
  const novasCotacoesProjetadas = Math.round(cotacoesAtuais * 1.85);
  const taxaMelhorada = Math.min(Math.round(taxaConversao * 1.45), 45);

  const vendasAtuaisMensais = (cotacoesAtuais * (taxaConversao / 100));
  const vendasProjetadasMensais = (novasCotacoesProjetadas * (taxaMelhorada / 100));
  const incrementoVendasMensais = Math.max(0, vendasProjetadasMensais - vendasAtuaisMensais);

  const receitaAdicionalMensal = Math.round(incrementoVendasMensais * ticketMedio);
  const receitaAdicionalAnual = receitaAdicionalMensal * 12;

  // Investment estimation benchmark
  const investimentoEstimadoMensal = Math.max(8000, Math.round(ticketMedio * 0.12));
  const roiMultiplicador = (receitaAdicionalMensal / investimentoEstimadoMensal).toFixed(1);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleExportPlan = () => {
    if (onOpenDiagnosticWithData) {
      onOpenDiagnosticWithData({
        revenue: formatCurrency(receitaAdicionalAnual),
        ticket: formatCurrency(ticketMedio),
        quotes: novasCotacoesProjetadas,
        roi: `${roiMultiplicador}x`,
      });
    }
  };

  return (
    <section id="simulador" className="py-24 bg-[#090d15] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Engenharia Financeira B2B
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display leading-tight">
            Simulador de Crescimento e ROI Industrial
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Calcule o potencial de escala de faturamento da sua planta fabril ao substituir campanhas amadoras pela metodologia de tráfego de alta intenção e automação de orçamentos da STK.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-6 rounded-xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-slate-800 text-sm font-semibold text-white">
              <Sliders className="w-4 h-4 text-amber-400" />
              <span>Parâmetros Comerciais da sua Indústria</span>
            </div>

            {/* Slider 1: Ticket Médio */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label className="font-medium text-slate-300">Ticket Médio por Venda / Contrato:</label>
                <span className="font-mono font-bold text-amber-400 tabular-nums text-sm">
                  {formatCurrency(ticketMedio)}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="500000"
                step="5000"
                value={ticketMedio}
                onChange={(e) => setTicketMedio(Number(e.target.value))}
                className="w-full accent-amber-400 bg-slate-950 h-2 rounded cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>R$ 10.000</span>
                <span>R$ 250.000</span>
                <span>R$ 500.000+</span>
              </div>
            </div>

            {/* Slider 2: Cotações Médias Atuais */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label className="font-medium text-slate-300">Cotações Técnicas Recebidas por Mês:</label>
                <span className="font-mono font-bold text-amber-400 tabular-nums text-sm">
                  {cotacoesAtuais} cotações/mês
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="150"
                step="5"
                value={cotacoesAtuais}
                onChange={(e) => setCotacoesAtuais(Number(e.target.value))}
                className="w-full accent-amber-400 bg-slate-950 h-2 rounded cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>5 / mês</span>
                <span>75 / mês</span>
                <span>150+ / mês</span>
              </div>
            </div>

            {/* Slider 3: Taxa de Fechamento */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label className="font-medium text-slate-300">Taxa de Conversão Atual (Proposta → Pedido):</label>
                <span className="font-mono font-bold text-amber-400 tabular-nums text-sm">
                  {taxaConversao}%
                </span>
              </div>
              <input
                type="range"
                min="4"
                max="35"
                step="1"
                value={taxaConversao}
                onChange={(e) => setTaxaConversao(Number(e.target.value))}
                className="w-full accent-amber-400 bg-slate-950 h-2 rounded cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>4% (Ciclo difícil)</span>
                <span>15% (Média B2B)</span>
                <span>35% (Altamente consultivo)</span>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-1">
              <div className="font-semibold text-slate-300 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Metodologia Estatística Baseada em Mais de 450 Projetos</span>
              </div>
              <p>
                Os cálculos consideram o aumento de orçamentos técnicos homologados e o encurtamento do tempo de resposta comercial com automação de WhatsApp e CRM industrial.
              </p>
            </div>
          </div>

          {/* Results Projection Card */}
          <div className="lg:col-span-6 rounded-xl border border-amber-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-[#141b2c] p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400">
                Projeção com Metodologia STK
              </div>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20">
                Benchmark B2B
              </span>
            </div>

            {/* Marquee Output Metric */}
            <div className="space-y-1">
              <div className="text-xs text-slate-400">Projeção de Faturamento Adicional Anualizado:</div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 font-display tabular-nums">
                {formatCurrency(receitaAdicionalAnual)}
              </div>
              <div className="text-xs text-emerald-400 font-medium pt-1">
                ≈ {formatCurrency(receitaAdicionalMensal)} / mês em novos pedidos faturados
              </div>
            </div>

            {/* Projected KPIs Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800">
                <div className="text-xs text-slate-400">Novas Cotações Homologadas</div>
                <div className="text-xl font-bold text-white font-display tabular-nums mt-1">
                  {novasCotacoesProjetadas} <span className="text-xs font-normal text-slate-400">/mês</span>
                </div>
                <div className="text-[11px] text-amber-400 mt-0.5">
                  +{novasCotacoesProjetadas - cotacoesAtuais} cotações adicionais
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800">
                <div className="text-xs text-slate-400">Retorno Estimado (ROI)</div>
                <div className="text-xl font-bold text-emerald-400 font-display tabular-nums mt-1">
                  {roiMultiplicador}x
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Sobre cada R$ 1 investido em mídia e setup
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800">
                <div className="text-xs text-slate-400">Taxa de Conversão Otimizada</div>
                <div className="text-xl font-bold text-white font-display tabular-nums mt-1">
                  {taxaMelhorada}%
                </div>
                <div className="text-[11px] text-emerald-400 mt-0.5">
                  Leads pré-qualificados por CNPJ
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800">
                <div className="text-xs text-slate-400">Ciclo Médio de Venda</div>
                <div className="text-xl font-bold text-white font-display tabular-nums mt-1">
                  -35% dias
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Nutrição automatizada para múltiplos decisores
                </div>
              </div>
            </div>

            {/* Action button */}
            <div className="pt-2">
              <button
                onClick={handleExportPlan}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-lg shadow-amber-400/10 cursor-pointer"
              >
                <span>Validar Viabilidade para Minha Indústria</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-slate-500 mt-2">
                Diagnóstico 100% gratuito e confidencial com especialista técnico em B2B.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
