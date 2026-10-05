import React from 'react';
import { XCircle, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

interface PainPointsComparisonProps {
  onOpenDiagnostic: () => void;
}

export const PainPointsComparison: React.FC<PainPointsComparisonProps> = ({ onOpenDiagnostic }) => {
  const comparisonItems = [
    {
      feature: 'Métricas de Sucesso',
      traditional: 'Vaidade: alcance, impressões, seguidores e curtidas sem valor comercial.',
      stk: 'Resultado real: SQLs homologados, volume em pipeline (R$) e vendas faturadas no ERP.',
    },
    {
      feature: 'Linguagem & Engenharia',
      traditional: 'Textos genéricos feitos por quem nunca pisou em um chão de fábrica ou leu um desenho técnico.',
      stk: 'Redatores técnicos e engenheiros que dominam normas ABNT, ASTM, DIN e tolerâncias dimensionais.',
    },
    {
      feature: 'Tráfego Pago & Palavras-Chave',
      traditional: 'Termos amplos que atraem candidatos a emprego, estudantes universitários e curiosos sem verba.',
      stk: 'Campanhas cirúrgicas com 1.400+ negativas e foco em códigos de peças e especificações industriais.',
    },
    {
      feature: 'Triagem & Integração Comercial',
      traditional: 'Formulários que caem em caixas de spam e demoram mais de 24 horas para serem lidos.',
      stk: 'Enriquecimento de CNPJ na Receita Federal e alerta em tempo real no WhatsApp do vendedor (SLA < 3 min).',
    },
    {
      feature: 'Gestão de Ciclo Longo (3 a 12 meses)',
      traditional: 'Abandonam o lead após o primeiro contato e culpam a equipe comercial pela falta de vendas.',
      stk: 'Esteiras de automação para múltiplos decisores: engenheiro de aplicação, comprador e CFO.',
    },
  ];

  return (
    <section className="py-20 bg-[#0b0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            A Realidade do Mercado B2B
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display leading-tight">
            Insatisfeito com sua agência de marketing atual?
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Mais de 80% das indústrias que nos procuram já queimaram verba com agências de varejo e e-commerce que não entendem a complexidade de uma venda consultiva técnica de R$ 100.000 a R$ 2.000.000+.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-800 bg-slate-950/80 p-4 sm:p-5 text-sm font-semibold">
            <div className="md:col-span-3 text-slate-400">Critério de Avaliação</div>
            <div className="md:col-span-4 text-red-400 flex items-center gap-2 mt-2 md:mt-0">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Agência Convencional de Varejo</span>
            </div>
            <div className="md:col-span-5 text-amber-400 flex items-center gap-2 mt-2 md:mt-0">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>STK Marketing Industrial</span>
            </div>
          </div>

          <div className="divide-y divide-slate-800/80">
            {comparisonItems.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 gap-3 md:gap-4 items-center hover:bg-slate-900/90 transition-colors"
              >
                <div className="md:col-span-3 font-medium text-sm text-slate-200">
                  {item.feature}
                </div>
                <div className="md:col-span-4 flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{item.traditional}</span>
                </div>
                <div className="md:col-span-5 flex items-start gap-2 text-xs sm:text-sm text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{item.stk}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Callout */}
        <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-semibold text-white">
              Quer uma auditoria sem custo das suas campanhas industriais atuais?
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              Analisamos onde sua verba está vazando em cliques de curiosos e entregamos um plano de correção em 48 horas úteis.
            </p>
          </div>
          <button
            onClick={onOpenDiagnostic}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 rounded-md hover:bg-amber-300 transition-colors cursor-pointer"
          >
            <span>Auditar Minha Estrutura</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
