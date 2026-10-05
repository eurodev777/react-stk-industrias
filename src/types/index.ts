export interface CaseStudy {
  id: string;
  client: string;
  segment: string;
  category: 'Todos' | 'Metalurgia' | 'Automação' | 'Química' | 'Máquinas' | 'Energia';
  headline: string;
  challenge: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
    subtext: string;
  }[];
  ticketMedio: string;
  cycleReduction: string;
  roi: string;
  quoteVolume: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  tags: string[];
}

export interface ServiceItem {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  metricsImpact: string;
  badge: string;
}

export interface TechnicalGuide {
  id: string;
  category: string;
  title: string;
  readTime: string;
  description: string;
  keyTakeaways: string[];
}
