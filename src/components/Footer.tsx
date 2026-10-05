import React from 'react';
import { Mail, Phone, MapPin, Shield, ArrowUpRight, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#06090e] border-t border-slate-800 text-slate-400 text-xs">
      {/* Upper Footer: Partner Badges & Trust Seals */}
      <div className="border-b border-slate-900 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-xs font-semibold text-white uppercase tracking-wider block">
                Certificações e Homologações de Elite
              </span>
              <span className="text-[11px] text-slate-500">
                Padrões globais de segurança de dados, integridade de tags e gestão de tráfego B2B.
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-xs font-medium">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900/60 border border-slate-800">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Google Partner Premier</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900/60 border border-slate-800">
                <Award className="w-4 h-4 text-blue-400" />
                <span>Meta Business Partner B2B</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900/60 border border-slate-800">
                <Award className="w-4 h-4 text-orange-400" />
                <span>HubSpot Industrial Certified</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900/60 border border-slate-800">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>ABM Specialist Accredited</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Col 1: Brand Info */}
            <div className="lg:col-span-2 space-y-4">
              <a href="#" className="text-xl font-bold tracking-tight text-white font-display block">
                STK Marketing
              </a>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Agência de marketing B2B especializada em indústrias, manufatura e soluções técnicas. Estratégia, automação avançada, conteúdo técnico e tráfego qualificado alinhados ao seu pipeline comercial.
              </p>
              <div className="pt-2 text-[11px] text-slate-500 space-y-1">
                <p>STK Comunicação e Tecnologia Industrial Ltda.</p>
                <p>CNPJ: 38.419.822/0001-94 · São Paulo / SP</p>
              </div>
            </div>

            {/* Col 2: Soluções */}
            <div className="space-y-3">
              <div className="text-xs font-semibold text-white uppercase tracking-wider">
                Soluções B2B
              </div>
              <ul className="space-y-2">
                <li><a href="#solucoes" className="hover:text-amber-400 transition-colors">Google Ads B2B</a></li>
                <li><a href="#solucoes" className="hover:text-amber-400 transition-colors">SEO Técnico & AEO</a></li>
                <li><a href="#solucoes" className="hover:text-amber-400 transition-colors">Automação de WhatsApp</a></li>
                <li><a href="#solucoes" className="hover:text-amber-400 transition-colors">Portais de Catálogo</a></li>
                <li><a href="#solucoes" className="hover:text-amber-400 transition-colors">LinkedIn Ads & ABM</a></li>
                <li><a href="#solucoes" className="hover:text-amber-400 transition-colors">Integração CRM & ERP</a></li>
              </ul>
            </div>

            {/* Col 3: Segmentos */}
            <div className="space-y-3">
              <div className="text-xs font-semibold text-white uppercase tracking-wider">
                Segmentos Fabris
              </div>
              <ul className="space-y-2">
                <li><a href="#cases" className="hover:text-amber-400 transition-colors">Usinagem & Metalurgia</a></li>
                <li><a href="#cases" className="hover:text-amber-400 transition-colors">Automação & Robótica</a></li>
                <li><a href="#cases" className="hover:text-amber-400 transition-colors">Química & Polímeros</a></li>
                <li><a href="#cases" className="hover:text-amber-400 transition-colors">Máquinas Industriais</a></li>
                <li><a href="#cases" className="hover:text-amber-400 transition-colors">Energia & Óleo/Gás</a></li>
                <li><a href="#cases" className="hover:text-amber-400 transition-colors">Logística & Embalagem</a></li>
              </ul>
            </div>

            {/* Col 4: Contato & Atendimento */}
            <div className="space-y-3">
              <div className="text-xs font-semibold text-white uppercase tracking-wider">
                Atendimento Técnico
              </div>
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>+55 (11) 3280-4820</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>contato@stkmarketing.com.br</span>
                </div>
                <div className="flex items-start gap-2 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Av. Engenheiro Luís Carlos Berrini, 105 - Itaim Bibi, São Paulo - SP</span>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href="#diagnostico"
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold"
                >
                  <span>Solicitar Atendimento Direto</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright and Legal */}
      <div className="border-t border-slate-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} STK Marketing Industrial. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-400 transition-colors">Termos de Uso</a>
            <span>·</span>
            <a href="#" className="hover:text-slate-400 transition-colors">Política de Privacidade (LGPD)</a>
            <span>·</span>
            <a href="#" className="hover:text-slate-400 transition-colors">Acordo de Confidencialidade (NDA)</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
