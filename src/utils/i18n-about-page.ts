import type { WhyCard } from '~/utils/i18n-why-page';

export interface AboutProfile {
  imageAlt: string;
  name: string;
  role: string;
  bio: string;
  academicTitle: string;
  academicBullets: string[];
  impactTitle: string;
  impactBullets: string[];
}

export interface AboutCopy {
  hero: {
    eyebrow: string;
    heading: string;
    headingAccent: string;
    subtext: string;
  };
  profile: AboutProfile;
  networkIntro: {
    eyebrow: string;
    heading: string;
    headingAccent: string;
    subtext: string;
  };
  networkCards: WhyCard[];
  coreIntro: { heading: string; subtext: string };
  coreCards: WhyCard[];
  valuesIntro: { heading: string; headingAccent: string; subtext: string };
  valuesCards: WhyCard[];
  devIntro: {
    eyebrow: string;
    heading: string;
    headingAccent: string;
    subtext: string;
  };
  devCards: WhyCard[];
}

export const aboutPageCopy: Record<'en' | 'fr' | 'ar', AboutCopy> = {
  en: {
    hero: {
      eyebrow: 'About us',
      heading: 'Leadership',
      headingAccent: 'Excellence',
      subtext:
        'Led by Dr. Mohamed Amria, a pioneer in profit management across the Middle East with 26+ years of hands-on industry experience.',
    },
    profile: {
      imageAlt: 'Dr. Mohamed Amria - Founder & Managing Director',
      name: 'Dr. Mohamed Amria',
      role: 'Founder & Managing Director',
      bio: 'PhD in Auditing & Fraud Detection from Ain Shams University, MSc in Target Costing & Integrated Statistical Models. Over 26 years in profitability management across industrial and service sectors throughout the Middle East.',
      academicTitle: 'Academic Excellence',
      academicBullets: [
        'PhD Auditing & Fraud Detection',
        'MSc Target Costing',
        'Statistical Models Expert',
      ],
      impactTitle: 'Industry Impact',
      impactBullets: ['60+ Industries Served', '200+ Companies Guided', 'Middle East Leadership'],
    },
    networkIntro: {
      eyebrow: 'Collaboration',
      heading: 'International Expert',
      headingAccent: 'Network',
      subtext:
        'We collaborate with an extensive network of international experts and leading academic institutions to ensure the application of global best practices.',
    },
    networkCards: [
      {
        icon: 'tabler:world',
        title: 'International Expert Network',
        description:
          'Regular collaboration with global consulting professionals and academic institutions for knowledge exchange and best practice sharing.',
      },
      {
        icon: 'tabler:award',
        title: 'International Standards',
        description:
          'Implementation of global best practices in financial management, auditing, and business process optimization.',
      },
      {
        icon: 'tabler:book',
        title: 'Continuous Learning',
        description:
          'Ongoing professional development through international conferences, certifications, and research partnerships.',
      },
      {
        icon: 'tabler:globe',
        title: 'Cultural Adaptation',
        description:
          'Ability to adapt global methodologies to local business cultures and regulatory environments.',
      },
    ],
    coreIntro: {
      heading: 'Core Team Expertise',
      subtext:
        'Multidisciplinary professionals with specialized knowledge across finance, operations, and strategic management.',
    },
    coreCards: [
      {
        icon: 'tabler:school',
        title: 'PhD Holders',
        description: 'Advanced academic credentials from leading universities',
      },
      {
        icon: 'tabler:certificate',
        title: 'Certified Professionals',
        description: 'Professional certifications in accounting and financial analysis',
      },
      {
        icon: 'tabler:building',
        title: 'Industry Specialists',
        description: 'Deep expertise across 60+ industrial sectors',
      },
      {
        icon: 'tabler:settings',
        title: 'ERP Experts',
        description: 'Specialization in enterprise resource planning systems',
      },
      {
        icon: 'tabler:chart-line',
        title: 'Financial Analysts',
        description: 'Experts in financial modeling and cost analysis',
      },
      {
        icon: 'tabler:users',
        title: 'Training Experts',
        description: 'Specialists in capability building and knowledge transfer',
      },
    ],
    valuesIntro: {
      heading: 'Our',
      headingAccent: 'Values',
      subtext:
        'The principles that guide our work and define our commitment to client success and professional excellence.',
    },
    valuesCards: [
      {
        icon: 'tabler:target',
        title: 'Precision',
        description:
          'Every analysis, recommendation, and implementation is executed with meticulous attention to detail.',
      },
      {
        icon: 'tabler:shield-check',
        title: 'Integrity',
        description:
          'Honest, transparent communication and ethical business practices in all client relationships.',
      },
      {
        icon: 'tabler:bulb',
        title: 'Innovation',
        description:
          'Continuous improvement of methodologies and adoption of new technologies for better results.',
      },
      {
        icon: 'tabler:users',
        title: 'Partnership',
        description:
          'Long-term collaborative relationships focused on sustainable success and mutual growth.',
      },
    ],
    devIntro: {
      eyebrow: 'Excellence through learning',
      heading: 'Continuous Professional',
      headingAccent: 'Development',
      subtext:
        'We invest continuously in training to merge academic excellence with practical industry insight, ensuring our team stays at the forefront of profit management innovation.',
    },
    devCards: [
      {
        icon: 'tabler:certificate',
        title: 'Advanced Certifications',
        description:
          'Regular pursuit of professional certifications in accounting, auditing, ERP systems, and management consulting.',
      },
      {
        icon: 'tabler:flask',
        title: 'Research & Development',
        description:
          'Active participation in academic research and development of new profit management methodologies.',
      },
      {
        icon: 'tabler:presentation',
        title: 'Industry Conferences',
        description:
          'Regular attendance at international conferences to stay current with global trends and best practices.',
      },
      {
        icon: 'tabler:share',
        title: 'Knowledge Sharing',
        description:
          'Internal training programs and knowledge sharing sessions to ensure team-wide expertise development.',
      },
    ],
  },

  fr: {
    hero: {
      eyebrow: 'À propos',
      heading: 'Un leadership tourné vers l’',
      headingAccent: 'excellence',
      subtext:
        'Sous la direction du Dr Mohamed Amria, pionnier de la gestion du profit au Moyen-Orient, avec plus de 26 ans d’expérience terrain auprès d’organisations industrielles et de services.',
    },
    profile: {
      imageAlt: 'Dr Mohamed Amria — Fondateur et directeur général',
      name: 'Dr Mohamed Amria',
      role: 'Fondateur et directeur général',
      bio: 'Doctorat en audit et détection des fraudes (Université Ain Shams), MSc en coût cible et modèles statistiques intégrés. Plus de 26 ans dans la gestion de la rentabilité dans les secteurs industriel et des services sur l’ensemble du Moyen-Orient.',
      academicTitle: 'Excellence académique',
      academicBullets: [
        'Doctorat — audit et détection des fraudes',
        'MSc — coût cible',
        'Expertise en modèles statistiques',
      ],
      impactTitle: 'Impact sectoriel',
      impactBullets: [
        'Plus de 60 secteurs accompagnés',
        'Plus de 200 entreprises conseillées',
        'Référence au Moyen-Orient',
      ],
    },
    networkIntro: {
      eyebrow: 'Collaboration',
      heading: 'Un réseau international d’',
      headingAccent: 'experts',
      subtext:
        'Nous collaborons avec un réseau étendu d’experts internationaux et d’institutions académiques de premier plan pour faire appliquer les meilleures pratiques mondiales.',
    },
    networkCards: [
      {
        icon: 'tabler:world',
        title: 'Réseau international d’experts',
        description:
          'Collaboration régulière avec des consultants mondiaux et des établissements académiques pour l’échange de savoir-faire et le partage des bonnes pratiques.',
      },
      {
        icon: 'tabler:award',
        title: 'Normes internationales',
        description:
          'Mise en œuvre des références mondiales en gestion financière, audit et optimisation des processus.',
      },
      {
        icon: 'tabler:book',
        title: 'Formation continue',
        description:
          'Développement professionnel soutenu : conférences, certifications et partenariats de recherche.',
      },
      {
        icon: 'tabler:globe',
        title: 'Adaptation culturelle',
        description:
          'Capacité à adapter les méthodes internationales aux cultures d’entreprise et aux cadres réglementaires locaux.',
      },
    ],
    coreIntro: {
      heading: 'Expertise au cœur de l’équipe',
      subtext:
        'Des profils pluridisciplinaires avec des compétences pointues en finance, opérations et stratégie.',
    },
    coreCards: [
      {
        icon: 'tabler:school',
        title: 'Titulaires de doctorat',
        description: 'Diplômes avancés issus d’universités reconnues',
      },
      {
        icon: 'tabler:certificate',
        title: 'Professionnels certifiés',
        description: 'Certifications en comptabilité et analyse financière',
      },
      {
        icon: 'tabler:building',
        title: 'Spécialistes sectoriels',
        description: 'Expertise approfondie dans plus de 60 secteurs industriels',
      },
      {
        icon: 'tabler:settings',
        title: 'Experts ERP',
        description: 'Spécialisation en systèmes de planification des ressources d’entreprise',
      },
      {
        icon: 'tabler:chart-line',
        title: 'Analystes financiers',
        description: 'Experts en modélisation financière et analyse des coûts',
      },
      {
        icon: 'tabler:users',
        title: 'Experts en formation',
        description: 'Spécialistes du développement des compétences et du transfert de savoir',
      },
    ],
    valuesIntro: {
      heading: 'Nos',
      headingAccent: 'valeurs',
      subtext:
        'Les principes qui guident notre travail et notre engagement envers la réussite des clients et l’excellence professionnelle.',
    },
    valuesCards: [
      {
        icon: 'tabler:target',
        title: 'Précision',
        description:
          'Chaque analyse, recommandation et mise en œuvre est réalisée avec une attention méticuleuse aux détails.',
      },
      {
        icon: 'tabler:shield-check',
        title: 'Intégrité',
        description:
          'Communication honnête et transparente, pratiques éthiques dans toutes les relations avec nos clients.',
      },
      {
        icon: 'tabler:bulb',
        title: 'Innovation',
        description:
          'Amélioration continue des méthodes et adoption de nouvelles technologies pour de meilleurs résultats.',
      },
      {
        icon: 'tabler:users',
        title: 'Partenariat',
        description:
          'Relations de collaboration durables orientées vers le succès durable et la croissance mutuelle.',
      },
    ],
    devIntro: {
      eyebrow: 'L’excellence par la formation',
      heading: 'Développement professionnel',
      headingAccent: 'continu',
      subtext:
        'Nous investissons continuellement dans la formation pour allier excellence académique et pertinence opérationnelle, afin que l’équipe reste à la pointe de l’innovation en gestion du profit.',
    },
    devCards: [
      {
        icon: 'tabler:certificate',
        title: 'Certifications avancées',
        description:
          'Obtenir et renouveler régulièrement des certifications en comptabilité, audit, systèmes ERP et conseil en management.',
      },
      {
        icon: 'tabler:flask',
        title: 'Recherche et développement',
        description:
          'Participation active à la recherche académique et élaboration de nouvelles méthodes de gestion du profit.',
      },
      {
        icon: 'tabler:presentation',
        title: 'Conférences sectorielles',
        description:
          'Participation régulière à des conférences internationales pour suivre les tendances et les bonnes pratiques.',
      },
      {
        icon: 'tabler:share',
        title: 'Partage des connaissances',
        description:
          'Programmes de formation interne et sessions de partage pour développer l’expertise de toute l’équipe.',
      },
    ],
  },

  ar: {
    hero: {
      eyebrow: 'من نحن',
      heading: 'قيادة',
      headingAccent: 'متميزة',
      subtext:
        'بقيادة د. محمد عمرية، رائد إدارة الربحية في الشرق الأوسط مع أكثر من 26 عاماً من الخبرة العملية المتخصصة.',
    },
    profile: {
      imageAlt: 'د. محمد عمرية — المؤسس والمدير العام',
      name: 'د. محمد عمرية',
      role: 'المؤسس والمدير العام',
      bio: 'دكتوراه في المراجعة وكشف الاحتيال من جامعة عين شمس، ماجستير في التكلفة المستهدفة والنماذج الإحصائية المتكاملة. أكثر من 26 عاماً في إدارة الربحية عبر القطاعات الصناعية والخدمية في الشرق الأوسط.',
      academicTitle: 'التميز الأكاديمي',
      academicBullets: ['دكتوراه المراجعة وكشف الاحتيال', 'ماجستير التكلفة المستهدفة', 'خبير النماذج الإحصائية'],
      impactTitle: 'الأثر الصناعي',
      impactBullets: ['+60 قطاعاً مخدوماً', '+200 شركة موجهة', 'قيادة الشرق الأوسط'],
    },
    networkIntro: {
      eyebrow: 'التعاون',
      heading: 'شبكة خبراء',
      headingAccent: 'دولية',
      subtext:
        'نتعاون مع شبكة واسعة من الخبراء الدوليين والمؤسسات الأكاديمية الرائدة لضمان تطبيق أفضل الممارسات العالمية.',
    },
    networkCards: [
      {
        icon: 'tabler:world',
        title: 'شبكة خبراء دولية',
        description:
          'تعاون منتظم مع مهنيين استشاريين ومؤسسات أكاديمية عالمية لتبادل المعرفة وأفضل الممارسات.',
      },
      {
        icon: 'tabler:award',
        title: 'معايير دولية',
        description:
          'تطبيق أفضل الممارسات العالمية في الإدارة المالية والمراجعة وتحسين العمليات التجارية.',
      },
      {
        icon: 'tabler:book',
        title: 'التعلم المستمر',
        description: 'التطوير المهني المستمر من خلال المؤتمرات الدولية والشهادات والشراكات البحثية.',
      },
      {
        icon: 'tabler:globe',
        title: 'التكيف الثقافي',
        description: 'القدرة على تكييف المنهجيات العالمية مع الثقافات التجارية المحلية والبيئات التنظيمية.',
      },
    ],
    coreIntro: {
      heading: 'خبرات الفريق الأساسي',
      subtext:
        'مهنيون متعددو التخصصات بمعرفة متخصصة عبر المالية والعمليات والإدارة الاستراتيجية.',
    },
    coreCards: [
      {
        icon: 'tabler:school',
        title: 'حملة الدكتوراه',
        description: 'مؤهلات أكاديمية متقدمة من الجامعات الرائدة',
      },
      {
        icon: 'tabler:certificate',
        title: 'مهنيون معتمدون',
        description: 'شهادات مهنية في المحاسبة والتحليل المالي',
      },
      {
        icon: 'tabler:building',
        title: 'متخصصون قطاعيون',
        description: 'خبرة عميقة عبر أكثر من 60 قطاعاً صناعياً',
      },
      {
        icon: 'tabler:settings',
        title: 'خبراء ERP',
        description: 'تخصص في أنظمة تخطيط موارد المؤسسة',
      },
      {
        icon: 'tabler:chart-line',
        title: 'محللون ماليون',
        description: 'خبراء النمذجة المالية وتحليل التكاليف',
      },
      {
        icon: 'tabler:users',
        title: 'خبراء التدريب',
        description: 'متخصصون في بناء القدرات ونقل المعرفة',
      },
    ],
    valuesIntro: {
      heading: 'قيمنا',
      headingAccent: 'الأساسية',
      subtext:
        'المبادئ التي توجه عملنا وتعكس التزامنا بنجاح عملائنا والتميز المهني.',
    },
    valuesCards: [
      {
        icon: 'tabler:target',
        title: 'الدقة',
        description: 'كل تحليل وتوصية وتنفيذ يتم بعناية فائقة للتفاصيل.',
      },
      {
        icon: 'tabler:shield-check',
        title: 'النزاهة',
        description: 'تواصل صادق وشفاف وممارسات أخلاقية في جميع علاقات العملاء.',
      },
      {
        icon: 'tabler:bulb',
        title: 'الابتكار',
        description: 'تحسين مستمر للمنهجيات واعتماد تقنيات جديدة لتحقيق نتائج أفضل.',
      },
      {
        icon: 'tabler:users',
        title: 'الشراكة',
        description: 'علاقات تعاون طويلة الأمد تركز على النجاح المستدام والنمو المتبادل.',
      },
    ],
    devIntro: {
      eyebrow: 'التعلم المستمر',
      heading: 'التطوير المهني',
      headingAccent: 'المستمر',
      subtext:
        'نستثمر باستمرار في التدريب لدمج التميز الأكاديمي مع الفهم العملي العميق، ليبقى فريقنا في طليعة الابتكار في إدارة الربحية.',
    },
    devCards: [
      {
        icon: 'tabler:certificate',
        title: 'شهادات متقدمة',
        description:
          'السعي الدؤوب للحصول على شهادات مهنية في المحاسبة والمراجعة وأنظمة ERP والاستشارات الإدارية.',
      },
      {
        icon: 'tabler:flask',
        title: 'البحث والتطوير',
        description: 'المشاركة الفعالة في البحث الأكاديمي وتطوير منهجيات جديدة لإدارة الربحية.',
      },
      {
        icon: 'tabler:presentation',
        title: 'المؤتمرات القطاعية',
        description: 'المشاركة الدورية في المؤتمرات الدولية لمتابعة الاتجاهات وأفضل الممارسات.',
      },
      {
        icon: 'tabler:share',
        title: 'تبادل المعرفة',
        description: 'برامج تدريب داخلية وجلسات مشاركة لتعزيز خبرة الفريق بأكمله.',
      },
    ],
  },
};
