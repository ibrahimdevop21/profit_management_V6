import type { WhyCard } from '~/utils/i18n-why-page';

export interface IndustrySector {
  icon: string;
  title: string;
  description: string;
  clients: string[];
}

export interface IndustryStat {
  value: string;
  title: string;
  description: string;
}

export interface IndustriesCopy {
  hero: {
    eyebrow: string;
    heading: string;
    headingAccent: string;
    subtext: string;
  };
  sectors: IndustrySector[];
  expertiseIntro: {
    eyebrow: string;
    heading: string;
    headingAccent: string;
    subtext: string;
  };
  expertiseCards: WhyCard[];
  storiesIntro: { heading: string; headingAccent: string; subtext: string };
  stories: IndustryStat[];
}

const sectorsEn: IndustrySector[] = [
  {
    icon: 'tabler:heart-handshake',
    title: 'Medical Industries',
    description:
      'Specialized consulting for pharmaceutical and healthcare companies with complex regulatory requirements.',
    clients: ['Hikma Pharma', 'EUP Pharma', 'UPM Pharmaceuticals'],
  },
  {
    icon: 'tabler:leaf',
    title: 'Food & Agriculture',
    description: 'Comprehensive profitability solutions for food processing and agricultural businesses.',
    clients: ['El Hegen Egypt', 'Donia Sweets', 'Alam Farms'],
  },
  {
    icon: 'tabler:settings',
    title: 'Manufacturing & Engineering',
    description: 'Advanced cost management and operational efficiency for manufacturing companies.',
    clients: ['MISR El HEGAZ Group', 'AGAMY Metal Industries'],
  },
  {
    icon: 'tabler:home',
    title: 'Real Estate',
    description: 'Strategic financial planning and investment analysis for real estate development projects.',
    clients: ['Wahat MISR El HEGAZ'],
  },
  {
    icon: 'tabler:briefcase',
    title: 'Service Industries',
    description: 'Diverse expertise across service sector organizations and creative industries.',
    clients: ['Clean Egg', 'Penta Studio'],
  },
  {
    icon: 'tabler:device-desktop',
    title: 'Technology & Innovation',
    description: 'Supporting tech companies and startups with financial strategy and growth planning.',
    clients: ['Digital Transformation', 'ERP Implementation'],
  },
];

export const industriesPageCopy: Record<'en' | 'fr' | 'ar', IndustriesCopy> = {
  en: {
    hero: {
      eyebrow: 'Sectors',
      heading: 'Major Industry',
      headingAccent: 'Sectors',
      subtext:
        'Each partnership demonstrates our ability to adapt proven methodologies to industry-specific challenges and deliver measurable results.',
    },
    sectors: sectorsEn,
    expertiseIntro: {
      eyebrow: 'Specialized knowledge',
      heading: 'Industry-Specific',
      headingAccent: 'Expertise',
      subtext:
        'Our understanding of sector-specific challenges helps us deliver targeted solutions for your operational and financial requirements.',
    },
    expertiseCards: [
      {
        icon: 'tabler:shield-check',
        title: 'Regulatory Compliance',
        description:
          'Navigate complex regulatory environments while sustaining profitability and operational efficiency.',
      },
      {
        icon: 'tabler:truck',
        title: 'Supply Chain Optimization',
        description:
          'Streamline supply chains to reduce costs and improve margins across manufacturing and distribution.',
      },
      {
        icon: 'tabler:device-desktop',
        title: 'Digital Transformation',
        description:
          'Implement technology initiatives that lift productivity while delivering measurable ROI.',
      },
      {
        icon: 'tabler:chart-bar',
        title: 'Market Analysis',
        description:
          'Research and competitive insight to uncover profit opportunities and strategic positioning.',
      },
    ],
    storiesIntro: {
      heading: 'Success',
      headingAccent: 'Stories',
      subtext:
        'Real outcomes from organizations across industries—where disciplined profit management drives impact.',
    },
    stories: [
      {
        value: '35%',
        title: 'Profit increase',
        description:
          'Manufacturing client achieved a 35% profit uplift through cost optimization and operational efficiency.',
      },
      {
        value: '28%',
        title: 'Cost reduction',
        description:
          'Food processing company lowered operating costs by 28% while protecting quality standards.',
      },
      {
        value: '42%',
        title: 'ROI improvement',
        description:
          'Real estate developer improved project ROI by 42% through planning and resource allocation.',
      },
    ],
  },

  fr: {
    hero: {
      eyebrow: 'Secteurs',
      heading: 'Principaux secteurs',
      headingAccent: 'd’activité',
      subtext:
        'Chaque collaboration illustre notre capacité à adapter des méthodes éprouvées aux enjeux sectoriels et à livrer des résultats mesurables.',
    },
    sectors: [
      {
        icon: 'tabler:heart-handshake',
        title: 'Industries de la santé',
        description:
          'Conseil spécialisé pour les entreprises pharmaceutiques et de soins, dans des cadres réglementaires exigeants.',
        clients: ['Hikma Pharma', 'EUP Pharma', 'UPM Pharmaceuticals'],
      },
      {
        icon: 'tabler:leaf',
        title: 'Agroalimentaire & agriculture',
        description:
          'Solutions de rentabilité complètes pour l’industrie agroalimentaire et les exploitations agricoles.',
        clients: ['El Hegen Egypt', 'Donia Sweets', 'Alam Farms'],
      },
      {
        icon: 'tabler:settings',
        title: 'Industrie & ingénierie',
        description:
          'Maîtrise des coûts et efficacité opérationnelle avancées pour les industriels.',
        clients: ['MISR El HEGAZ Group', 'AGAMY Metal Industries'],
      },
      {
        icon: 'tabler:home',
        title: 'Immobilier',
        description:
          'Planification financière stratégique et analyse d’investissement pour projets immobiliers.',
        clients: ['Wahat MISR El HEGAZ'],
      },
      {
        icon: 'tabler:briefcase',
        title: 'Services',
        description:
          'Expertise variée auprès d’organisations de services et de création.',
        clients: ['Clean Egg', 'Penta Studio'],
      },
      {
        icon: 'tabler:device-desktop',
        title: 'Technologie & innovation',
        description:
          'Accompagnement des entreprises tech et startups sur stratégie financière et croissance.',
        clients: ['Digital Transformation', 'ERP Implementation'],
      },
    ],
    expertiseIntro: {
      eyebrow: 'Savoir-faire',
      heading: 'Expertise',
      headingAccent: 'sectorielle',
      subtext:
        'Notre compréhension fine des contraintes métiers permet de cadrer des solutions ciblées sur vos enjeux opérationnels et financiers.',
    },
    expertiseCards: [
      {
        icon: 'tabler:shield-check',
        title: 'Conformité réglementaire',
        description:
          'Progresser dans des environnements réglementaires exigeants tout en préservant rentabilité et efficience.',
      },
      {
        icon: 'tabler:truck',
        title: 'Optimisation supply chain',
        description:
          'Fluidifier la chaîne d’approvisionnement pour réduire les coûts et améliorer les marges.',
      },
      {
        icon: 'tabler:device-desktop',
        title: 'Transformation digitale',
        description:
          'Mettre en œuvre des solutions technologiques avec ROI mesurable et adoption durable.',
      },
      {
        icon: 'tabler:chart-bar',
        title: 'Analyse de marché',
        description:
          'Études et veille concurrentielle pour identifier les leviers de profit et le positionnement.',
      },
    ],
    storiesIntro: {
      heading: 'Récits de',
      headingAccent: 'réussite',
      subtext:
        'Des résultats concrets dans des secteurs variés, où la gestion disciplinée du profit crée de la valeur.',
    },
    stories: [
      {
        value: '35 %',
        title: 'Hausse du profit',
        description:
          'Un industriel a gagné 35 % de profit grâce à l’optimisation des coûts et des opérations.',
      },
      {
        value: '28 %',
        title: 'Réduction des coûts',
        description:
          'Un acteur agroalimentaire a réduit ses coûts opérationnels de 28 % sans compromettre la qualité.',
      },
      {
        value: '42 %',
        title: 'Amélioration du ROI',
        description:
          'Un promoteur immobilier a accru le ROI projet de 42 % via planification et allocation des ressources.',
      },
    ],
  },

  ar: {
    hero: {
      eyebrow: 'القطاعات',
      heading: 'القطاعات الصناعية',
      headingAccent: 'الرئيسية',
      subtext:
        'كل شراكة تُظهر قدرتنا على تكييف المنهجيات المثبتة مع تحديات القطاع وتحقيق نتائج قابلة للقياس.',
    },
    sectors: [
      {
        icon: 'tabler:heart-handshake',
        title: 'الصناعات الطبية',
        description:
          'استشارات متخصصة لشركات الأدوية والرعاية الصحية ذات المتطلبات التنظيمية المعقدة.',
        clients: ['Hikma Pharma', 'EUP Pharma', 'UPM Pharmaceuticals'],
      },
      {
        icon: 'tabler:leaf',
        title: 'الأغذية والزراعة',
        description: 'حلول ربحية شاملة لمعالجة الأغذية والأعمال الزراعية.',
        clients: ['El Hegen Egypt', 'Donia Sweets', 'Alam Farms'],
      },
      {
        icon: 'tabler:settings',
        title: 'التصنيع والهندسة',
        description: 'إدارة تكاليف متقدمة وكفاءة تشغيلية لشركات التصنيع.',
        clients: ['MISR El HEGAZ Group', 'AGAMY Metal Industries'],
      },
      {
        icon: 'tabler:home',
        title: 'العقارات',
        description: 'تخطيط مالي استراتيجي وتحليل استثماري لمشاريع التطوير العقاري.',
        clients: ['Wahat MISR El HEGAZ'],
      },
      {
        icon: 'tabler:briefcase',
        title: 'قطاع الخدمات',
        description: 'خبرة متنوعة عبر مؤسسات الخدمات والصناعات الإبداعية.',
        clients: ['Clean Egg', 'Penta Studio'],
      },
      {
        icon: 'tabler:device-desktop',
        title: 'التكنولوجيا والابتكار',
        description: 'دعم الشركات التقنية والناشئة في الاستراتيجية المالية ونمو الأعمال.',
        clients: ['Digital Transformation', 'ERP Implementation'],
      },
    ],
    expertiseIntro: {
      eyebrow: 'معرفة متخصصة',
      heading: 'خبرة',
      headingAccent: 'قطاعية',
      subtext:
        'فهمنا للتحديات الخاصة بكل قطاع يمكّننا من تقديم حلول موجهة لاحتياجاتكم التشغيلية والمالية.',
    },
    expertiseCards: [
      {
        icon: 'tabler:shield-check',
        title: 'الامتثال التنظيمي',
        description:
          'التنقل في بيئات تنظيمية معقدة مع الحفاظ على الربحية والكفاءة التشغيلية.',
      },
      {
        icon: 'tabler:truck',
        title: 'تحسين سلسلة الإمداد',
        description:
          'تبسيط العمليات لتقليل التكاليف وتحسين الهوامش في التصنيع والتوزيع.',
      },
      {
        icon: 'tabler:device-desktop',
        title: 'التحول الرقمي',
        description:
          'تنفيذ حلول تقنية تعزز الإنتاجية مع عائد استثمار قابل للقياس.',
      },
      {
        icon: 'tabler:chart-bar',
        title: 'تحليل السوق',
        description:
          'بحث وتنافسية لاكتشاف فرص الربح والموقع الاستراتيجي.',
      },
    ],
    storiesIntro: {
      heading: 'قصص',
      headingAccent: 'نجاح',
      subtext:
        'نتائج حقيقية من مؤسسات متنوعة حيث تُدار الربحية بدقة وتُحصد أثرًا ملموسًا.',
    },
    stories: [
      {
        value: '35٪',
        title: 'زيادة في الربح',
        description:
          'شركة تصنيع حققت زيادة 35٪ في الربح عبر تحسين التكاليف والكفاءة التشغيلية.',
      },
      {
        value: '28٪',
        title: 'خفض التكاليف',
        description:
          'شركة أغذية خفضت التكاليف التشغيلية 28٪ مع الحفاظ على الجودة.',
      },
      {
        value: '42٪',
        title: 'تحسين العائد على الاستثمار',
        description:
          'مطور عقاري حسّن عائد المشروع 42٪ عبر التخطيط المالي وتوزيع الموارد.',
      },
    ],
  },
};
