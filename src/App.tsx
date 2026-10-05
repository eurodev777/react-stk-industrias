import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SectorPills } from './components/SectorPills';
import { PainPointsComparison } from './components/PainPointsComparison';
import { ServicesBento } from './components/ServicesBento';
import { CaseStudies } from './components/CaseStudies';
import { RoiCalculator } from './components/RoiCalculator';
import { Methodology } from './components/Methodology';
import { TechnicalGuides } from './components/TechnicalGuides';
import { DiagnosticForm } from './components/DiagnosticForm';
import { Footer } from './components/Footer';

export default function App() {
  const [calculatorData, setCalculatorData] = useState<{
    revenue?: string;
    ticket?: string;
    quotes?: number;
    roi?: string;
  } | null>(null);

  const scrollToDiagnostic = () => {
    const el = document.getElementById('diagnostico');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCalculatorExport = (data: {
    revenue: string;
    ticket: string;
    quotes: number;
    roi: string;
  }) => {
    setCalculatorData(data);
    scrollToDiagnostic();
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 selection:bg-amber-400 selection:text-slate-950 flex flex-col font-sans">
      {/* Strict Top Bar Contract Header */}
      <Header onOpenDiagnostic={scrollToDiagnostic} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero with Value Proposition & Industrial Pipeline Architecture */}
        <Hero onOpenDiagnostic={scrollToDiagnostic} />

        {/* 2. Specialized Industrial Sectors Showcase */}
        <SectorPills onSelectSector={() => scrollToDiagnostic()} />

        {/* 3. Pain Point Clarifier: Generic Retail Agencies vs STK Industrial Marketing */}
        <PainPointsComparison onOpenDiagnostic={scrollToDiagnostic} />

        {/* 4. Core Solutions & Mechanisms (Bento Grid) */}
        <ServicesBento onOpenDiagnostic={scrollToDiagnostic} />

        {/* 5. Proven Cases of Success & Audited ROI Metrics */}
        <CaseStudies onOpenDiagnostic={scrollToDiagnostic} />

        {/* 6. Interactive Industrial ROI & Scaling Simulator */}
        <RoiCalculator onOpenDiagnosticWithData={handleCalculatorExport} />

        {/* 7. Methodology: 4-Step Engineering Process */}
        <Methodology onOpenDiagnostic={scrollToDiagnostic} />

        {/* 8. Technical Intelligence & Industry Guides */}
        <TechnicalGuides />

        {/* 9. Consultative Lead Capture Diagnostic Form */}
        <DiagnosticForm initialData={calculatorData} />
      </main>

      {/* Footer with certifications and corporate info */}
      <Footer />
    </div>
  );
}
