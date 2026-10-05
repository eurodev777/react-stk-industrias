import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Factory, TrendingUp, SlidersHorizontal, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onOpenDiagnostic: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDiagnostic }) => {
  const [pipelineMode, setPipelineMode] = useState<'stk' | 'generic'>('stk');

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#0b0f17] via-[#0d1424] to-[#0b0f17]">
      {/* Background industrial grid & subtle ambient glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition and Call to Action */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed metadata kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Marketing B2B de Alta Conversão</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>Exclusivo para Manufatura & Indústria</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display leading-[1.15] text-balance">
              Marketing B2B para indústrias que exigem{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-500">
                orçamentos técnicos
              </span>{' '}
              e vendas reais.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Eliminamos a perda de tempo com curiosos e cliques sem valor. Desenvolvemos estratégias B2B orientadas a engenheiros de compras, diretores industriais e especificadores técnicos para acelerar o fechamento de propostas de alto valor.
            </p>

            {/* Quick Proof Signals */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Zero cliques de curiosos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Integração ERP & CRM</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Validação prévia de CNPJ</span>
              </div>
            </div>

            {/* CTA action block */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenDiagnostic}
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 rounded-md hover:bg-amber-300 transition-all shadow-lg shadow-amber-400/10 cursor-pointer active:translate-y-0.5"
              >
                <span>Solicitar Diagnóstico Gratuito</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#cases"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/80 border border-slate-700/80 rounded-md hover:border-slate-500 hover:bg-slate-800/80 transition-all cursor-pointer"
              >
                <span>Ver Cases de Sucesso</span>
              </a>
            </div>

            {/* Claim-adjacent Trust Metrics */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-white font-display tabular-nums">
                  +R$ 380M
                </div>
                <div className="text-xs text-slate-400 mt-1">Faturamento gerado em B2B</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-white font-display tabular-nums">
                  18+ Anos
                </div>
                <div className="text-xs text-slate-400 mt-1">Vivência em chão de fábrica</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-amber-400 font-display tabular-nums">
                  4.8x
                </div>
                <div className="text-xs text-slate-400 mt-1">ROI médio comprovado</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-white font-display tabular-nums">
                  3 min
                </div>
                <div className="text-xs text-slate-400 mt-1">Tempo médio de roteamento de SQL</div>
              </div>
            </div>
          </div>

          {/* Right Column: Industrial Pipeline Architecture Simulator */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl border border-slate-700/80 bg-slate-900/90 p-5 shadow-2xl backdrop-blur-md">
              {/* Card Header & Interactive Toggle */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Factory className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-semibold text-white">Funil de Aquisição Industrial</span>
                </div>
                <div className="flex items-center bg-slate-950 p-1 rounded-md border border-slate-800">
                  <button
                    onClick={() => setPipelineMode('stk')}
                    className={`px-2.5 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
                      pipelineMode === 'stk'
                        ? 'bg-amber-400 text-slate-950 font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Método STK
                  </button>
                  <button
                    onClick={() => setPipelineMode('generic')}
                    className={`px-2.5 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
                      pipelineMode === 'generic'
                        ? 'bg-slate-700 text-white font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Agência Comum
                  </button>
                </div>
              </div>

              {/* Dynamic Pipeline Stages */}
              <div className="py-4 space-y-3">
                {pipelineMode === 'stk' ? (
                  <>
                    <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/90 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-amber-400">1. Busca Cirúrgica B2B</span>
                        <span className="font-mono text-slate-400 tabular-nums">100% Tráfego Qualificado</span>
                      </div>
                      <p className="text-xs text-slate-300">
                        Termos por código de peça, normas ASTM/ABNT e termos de alta intenção. Sem cliques acidentais de estudantes.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/90 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-amber-400">2. Portal Técnico de Conversão</span>
                        <span className="font-mono text-slate-400 tabular-nums">4.2% Taxa de Cotação</span>
                      </div>
                      <p className="text-xs text-slate-300">
                        Fichas técnicas para download, suporte a envio de arquivos CAD/DWG e formulário focado no decisor fabril.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950/80 border border-amber-500/30 bg-amber-500/5 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-amber-300 flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 text-amber-400" />
                          3. Automação de CNPJ & CRM
                        </span>
                        <span className="font-mono text-emerald-400 font-semibold tabular-nums">3 min SLA</span>
                      </div>
                      <p className="text-xs text-slate-300">
                        Verificação instantânea de faturamento e CNAE na Receita Federal. Notificação imediata ao vendedor no WhatsApp.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950/80 border border-emerald-500/30 bg-emerald-500/5 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                          4. Fechamento Comercial
                        </span>
                        <span className="font-mono text-emerald-300 font-semibold tabular-nums">Ticket: R$ 85k–R$ 500k+</span>
                      </div>
                      <p className="text-xs text-slate-300">
                        Encurtamento do ciclo de vendas em até 40% com nutrição focada em segurança operacional e homologação.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-3 rounded-lg bg-red-950/20 border border-red-900/40 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-red-400">1. Campanhas de Massa (B2C)</span>
                        <span className="font-mono text-red-300 tabular-nums">75% Cliques Perdidos</span>
                      </div>
                      <p className="text-xs text-slate-400">
                        Tráfego genérico atraindo candidatos a emprego, estudantes e curiosos que não compram no atacado.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-400">2. Site Lento e Confuso</span>
                        <span className="font-mono text-slate-500 tabular-nums">0.6% Conversão</span>
                      </div>
                      <p className="text-xs text-slate-400">
                        Páginas pesadas, sem fichas técnicas organizadas e formulários sem possibilidade de anexar desenho técnico.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-400">3. Processo Manual Desconectado</span>
                        <span className="font-mono text-red-400 tabular-nums">24h+ de Espera</span>
                      </div>
                      <p className="text-xs text-slate-400">
                        E-mails caem em caixas desordenadas, sem validação de CNPJ e sem aviso aos representantes regionais.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-400">4. Perda para o Concorrente</span>
                        <span className="font-mono text-red-400 tabular-nums">Ciclo de 9 a 12 meses</span>
                      </div>
                      <p className="text-xs text-slate-400">
                        Sem nutrição técnica, o comprador opta pelo concorrente que respondeu primeiro com memorial descritivo pronto.
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Bottom Quick Summary */}
              <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
                  Rastreabilidade total de ponta a ponta
                </span>
                <span className="text-amber-400 font-semibold font-mono">
                  {pipelineMode === 'stk' ? '+340% Eficiência Comercial' : 'Desperdício de Verba'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
