import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenDiagnostic: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDiagnostic }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Soluções B2B', href: '#solucoes' },
    { label: 'Cases & ROI', href: '#cases' },
    { label: 'Simulador', href: '#simulador' },
    { label: 'Guias Técnicos', href: '#guias' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0b0f17]/95 backdrop-blur-md border-b border-slate-800 shadow-xl shadow-black/20'
          : 'bg-[#0b0f17]/80 backdrop-blur-sm border-b border-slate-800/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-white font-display hover:text-amber-400 transition-colors shrink-0"
        >
          STK Marketing
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-amber-400 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenDiagnostic}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 rounded-md hover:bg-amber-300 transition-all shadow-sm hover:shadow-amber-400/20 active:translate-y-0.5 whitespace-nowrap cursor-pointer"
          >
            <span>Solicitar Diagnóstico</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0d1422] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-amber-400 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDiagnostic();
              }}
              className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 rounded-md hover:bg-amber-300 transition-colors cursor-pointer"
            >
              Solicitar Diagnóstico Gratuito
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
