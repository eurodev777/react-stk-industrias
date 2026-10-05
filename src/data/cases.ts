import { CaseStudy } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'metal-chek',
    client: 'Metal-Chek Brasil',
    segment: 'Ensaios Não Destrutivos & Usinagem de Alta Precisão',
    category: 'Metalurgia',
    headline: 'Como reposicionamos o marketing técnico gerando R$ 18.4M em novos contratos industriais',
    challenge: 'A empresa dependia quase exclusivamente de indicações e cotações passivas de clientes antigos. O tráfego de anúncios existente atraía mecânicos e estudantes universitários em vez de engenheiros de qualidade e diretores fabris das indústrias automotiva e aeroespacial.',
    solution: 'Reengenharia completa das campanhas de Google Ads B2B com negativação de mais de 1.400 termos não técnicos. Desenvolvimento de nova Landing Page técnica orientada à homologação de produto, catálogos técnicos em PDF de alta resolução e automação de triagem imediata de CNPJ.',
    metrics: [
      { label: 'Crescimento em Cotações Qualificadas', value: '+215%', subtext: 'Focadas em gerentes fabris' },
      { label: 'Pipeline Comercial Gerado', value: 'R$ 18.4M', subtext: 'Em propostas formalizadas' },
      { label: 'Redução do Custo por Orçamento', value: '-52%', subtext: 'Otimização de tráfego de alta intenção' },
      { label: 'Tempo de Resposta ao Lead', value: '4 min', subtext: 'Via automação WhatsApp B2B' },
    ],
    ticketMedio: 'R$ 120.000',
    cycleReduction: '45 dias reduzidos no ciclo médio',
    roi: '6.4x',
    quoteVolume: '148 novas cotações/mês',
    testimonial: {
      quote: 'A STK foi a primeira agência que entendeu a complexidade de vender ensaios não destrutivos para a Petrobras e Embraer. Eles falam a língua da engenharia e transformaram nosso site na principal máquina de orçamentos da empresa.',
      author: 'Carlos Eduardo Mendes',
      role: 'Diretor Comercial & Operações',
      company: 'Metal-Chek Brasil'
    },
    tags: ['Google Ads B2B', 'SEO Técnico', 'Landing Page Industrial', 'Automação de CRM']
  },
  {
    id: 'elecon-automacao',
    client: 'Elecon Soluções Eletroindustriais',
    segment: 'Painéis Elétricos & Automação de Fábrica',
    category: 'Automação',
    headline: 'Estruturação de funil ABM acelerando a homologação em 42 multinacionais do agronegócio e mineração',
    challenge: 'Ciclos de venda ultrapassavam 9 meses com orçamentos estagnados. Vendedores técnicos gastavam horas respondendo cotações de pequeno porte que não cobriam os custos de engenharia de aplicação.',
    solution: 'Campanhas de Account-Based Marketing (ABM) direcionadas aos top 200 compradores de usinas sucroalcooleiras e mineradoras. Criação de um configurador técnico online e esteira de e-mails automatizados com cases de redução de parada de linha.',
    metrics: [
      { label: 'Aumento em SQLs Homologados', value: '+340%', subtext: 'Grandes contas e indústrias de base' },
      { label: 'Novos Contratos Anualizados', value: 'R$ 31.2M', subtext: 'Volume transacionado em 14 meses' },
      { label: 'Encurtamento do Ciclo de Venda', value: '38%', subtext: 'De 270 para 168 dias médios' },
      { label: 'Taxa de Conversão Proposta -> Contrato', value: '28.4%', subtext: 'Subiu de 11.2%' }
    ],
    ticketMedio: 'R$ 280.000',
    cycleReduction: '102 dias economizados no ciclo comercial',
    roi: '8.2x',
    quoteVolume: '72 contas estratégicas em negociação',
    testimonial: {
      quote: 'O nível de sofisticação dos leads que chegam agora pelo marketing é impressionante. Nossos engenheiros de vendas não perdem mais tempo filtrando curiosos: só atendem reuniões com decisores técnicos reais.',
      author: 'Renata Albuquerque',
      role: 'Head de Vendas B2B',
      company: 'Elecon'
    },
    tags: ['Account-Based Marketing', 'LinkedIn Ads B2B', 'Configurador Técnico', 'Automação HubSpot']
  },
  {
    id: 'indumak-embalagens',
    client: 'Indumak Sistemas de Empacotamento',
    segment: 'Máquinas Pesadas & Automação de Embalagem',
    category: 'Máquinas',
    headline: 'Conectando tráfego qualificado de 12 estados à rede de 45 representantes comerciais técnicos',
    challenge: 'A fábrica recebia contatos desorganizados por telefone e formulários genéricos, gerando atritos entre os representantes regionais e perda de oportunidades para concorrentes internacionais.',
    solution: 'Implantação de roteamento inteligente de leads por geolocalização e porte fabril. Criação de páginas de produto com especificações em 3D, cálculos de produtividade de sacaria por minuto e campanhas focadas na substituição de maquinário obsoleto.',
    metrics: [
      { label: 'Receita Direta Mapeada', value: 'R$ 48.6M', subtext: 'Em linhas de máquinas entregues' },
      { label: 'Leads Repassados aos Representantes', value: '1.240', subtext: '100% validados por CNPJ ativo' },
      { label: 'Redução de Atrito Comercial', value: '98%', subtext: 'Rastreabilidade total do lead ao contrato' },
      { label: 'ROI em Mídia Paga', value: '11.5x', subtext: 'Retorno sobre investimento publicitário' }
    ],
    ticketMedio: 'R$ 420.000',
    cycleReduction: '60 dias de redução no fechamento',
    roi: '11.5x',
    quoteVolume: '115 cotações de alta complexidade/mês',
    testimonial: {
      quote: 'A STK conectou nossa linha de montagem ao mercado nacional. O sistema de distribuição de leads para nossa rede de representantes revolucionou a rotina dos nossos consultores de campo.',
      author: 'Marcio Fontes',
      role: 'Gerente Geral de Marketing & Vendas',
      company: 'Indumak'
    },
    tags: ['Máquinas Pesadas', 'Google Ads B2B', 'Distribuição de Leads CRM', 'Inbound Industrial']
  },
  {
    id: 'quimica-solucoes',
    client: 'Sane Polymers & Chemical',
    segment: 'Especialidades Químicas & Resinas Industriais',
    category: 'Química',
    headline: 'Dominando o topo do Google em 120 termos de polímeros técnicos e gerando demanda contínua',
    challenge: 'A marca era desconhecida fora do seu estado de origem e pagava custos exorbitantes em eventos e feiras industriais com baixo aproveitamento posterior de dados.',
    solution: 'Estratégia agressiva de SEO Técnico e AEO (resposta em ferramentas de inteligência artificial), com publicação de fichas de segurança (FISPQ) estruturadas, guias de compatibilidade de polímeros e anúncios segmentados para transformadores de plástico.',
    metrics: [
      { label: 'Top 3 no Google em Termos Técnicos', value: '88 palavras', subtext: 'Posições #1 em termos de alta busca' },
      { label: 'Novos Clientes Industriais Mensais', value: '34 indústrias', subtext: 'Com consumo recorrente' },
      { label: 'Crescimento de Tráfego Orgânico', value: '+460%', subtext: 'Leads com perfil de compras corporativas' },
      { label: 'LTV Médio dos Clientes Captados', value: 'R$ 680k/ano', subtext: 'Contratos de fornecimento contínuo' }
    ],
    ticketMedio: 'R$ 95.000/mês',
    cycleReduction: '30 dias no processo de homologação',
    roi: '7.8x',
    quoteVolume: '85 solicitações de amostra técnica/mês',
    testimonial: {
      quote: 'Saímos de uma dependência arriscada de três grandes clientes para uma carteira diversificada com mais de 70 indústrias ativas que nos encontraram pela busca técnica.',
      author: 'Juliana Sampaio',
      role: 'Diretora de Suprimentos & Novos Negócios',
      company: 'Sane Polymers'
    },
    tags: ['SEO Técnico & AEO', 'Especialidades Químicas', 'Inbound B2B', 'Google Ads']
  }
];

export const SECTORS = [
  { name: 'Metalurgia & Usinagem', icon: 'Hammer', count: '42 cases', desc: 'Usinagem de precisão, estamparia, fundição e caldeiraria pesada' },
  { name: 'Automação & Robótica', icon: 'Cpu', count: '38 cases', desc: 'Células robotizadas, painéis elétricos e esteiras automatizadas' },
  { name: 'Química & Polímeros', icon: 'FlaskConical', count: '29 cases', desc: 'Resinas técnicas, aditivos, tratamento de superfície e fluidos' },
  { name: 'Energia & Óleo/Gás', icon: 'Zap', count: '24 cases', desc: 'Geradores, transformadores, cabeamento e equipamentos offshore' },
  { name: 'Máquinas & Equipamentos', icon: 'Cog', count: '51 cases', desc: 'Linhas de embalagem, prensas, injetoras e conformadoras' },
  { name: 'Logística & Armazenagem', icon: 'Truck', count: '33 cases', desc: 'Estruturas porta-paletes, empilhadeiras e automação intralogística' },
  { name: 'Engenharia & Montagem', icon: 'Wrench', count: '27 cases', desc: 'Projetos EPC, climatização fabril e instalações industriais' },
  { name: 'Distribuição B2B', icon: 'Boxes', count: '36 cases', desc: 'Distribuidores de fixadores, EPIs e ferramentas industriais' },
];
