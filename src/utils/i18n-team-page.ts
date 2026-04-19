import type { AboutProfile } from '~/utils/i18n-about-page';
import type { WhyCard } from '~/utils/i18n-why-page';

export interface TeamCopy {
  hero: {
    eyebrow: string;
    heading: string;
    headingAccent: string;
    subtext: string;
  };
  profile: AboutProfile;
  expertiseIntro: {
    heading: string;
    headingAccent: string;
    subtext: string;
  };
  expertiseCards: WhyCard[];
  collaborationIntro: {
    eyebrow: string;
    heading: string;
    headingAccent: string;
    subtext: string;
  };
  collaborationItems: WhyCard[];
  collaborationImageAlt: string;
  valuesIntro: { heading: string; headingAccent: string; subtext: string };
  valuesCards: WhyCard[];
  devIntro: {
    eyebrow: string;
    heading: string;
    headingAccent: string;
    subtext: string;
  };
  devCards: WhyCard[];
  devImageAlt: string;
}

export const teamPageCopy: Record<'en' | 'fr' | 'ar', TeamCopy> = {
  en: {
    hero: {
      eyebrow: 'Team',
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
    expertiseIntro: {
      heading: 'Our Team',
      headingAccent: 'Expertise',
      subtext:
        'Multidisciplinary professionals with specialized knowledge across finance, operations, and strategic management.',
    },
    expertiseCards: [
      {
        icon: 'tabler:school',
        title: 'PhD Holders',
        description:
          'Advanced academic credentials in accounting, finance, auditing, and business management from leading universities.',
      },
      {
        icon: 'tabler:certificate',
        title: 'Certified Accountants',
        description:
          'Professional certifications and ongoing education in accounting standards, financial analysis, and regulatory compliance.',
      },
      {
        icon: 'tabler:building',
        title: 'Industry Specialists',
        description:
          'Deep sector expertise across manufacturing, healthcare, food processing, real estate, and service industries.',
      },
      {
        icon: 'tabler:settings',
        title: 'ERP Consultants',
        description:
          'Technical expertise in enterprise resource planning systems, digital transformation, and process automation.',
      },
      {
        icon: 'tabler:chart-line',
        title: 'Financial Analysts',
        description:
          'Advanced skills in financial modeling, cost analysis, budget planning, and performance measurement systems.',
      },
      {
        icon: 'tabler:users',
        title: 'Training Specialists',
        description:
          'Professional development experts who build internal capabilities and transfer knowledge effectively.',
      },
    ],
    collaborationIntro: {
      eyebrow: 'International Excellence',
      heading: 'Global Standards,',
      headingAccent: 'Local Insight',
      subtext:
        'Our team collaborates with U.S. experts to ensure global best practices while maintaining deep understanding of regional market dynamics and business culture.',
    },
    collaborationItems: [
      {
        icon: 'tabler:world',
        title: 'U.S. Expert Network',
        description:
          'Regular collaboration with American consulting professionals and academic institutions for knowledge exchange.',
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
    collaborationImageAlt: 'International collaboration and knowledge sharing in consulting',
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
      eyebrow: 'Excellence Through Learning',
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
    devImageAlt: 'Continuous learning and professional development in consulting',
  },

  fr: {
    hero: {
      eyebrow: 'Équipe',
      heading: 'Un leadership',
      headingAccent: 'd’excellence',
      subtext:
        'Sous la direction du Dr Mohamed Amria, pionnier de la gestion du profit au Moyen-Orient, avec plus de 26 ans d’expérience terrain.',
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
    expertiseIntro: {
      heading: 'Expertise',
      headingAccent: 'de l’équipe',
      subtext:
        'Des professionnels pluridisciplinaires aux compétences pointues en finance, opérations et stratégie.',
    },
    expertiseCards: [
      {
        icon: 'tabler:school',
        title: 'Titulaires de doctorat',
        description:
          'Diplômes avancés en comptabilité, finance, audit et management issus d’universités reconnues.',
      },
      {
        icon: 'tabler:certificate',
        title: 'Experts-comptables certifiés',
        description:
          'Certifications professionnelles et formation continue sur les normes comptables, l’analyse financière et la conformité.',
      },
      {
        icon: 'tabler:building',
        title: 'Spécialistes sectoriels',
        description:
          'Expertise approfondie en industrie, santé, agroalimentaire, immobilier et services.',
      },
      {
        icon: 'tabler:settings',
        title: 'Consultants ERP',
        description:
          'Maîtrise des ERP, de la transformation digitale et de l’automatisation des processus.',
      },
      {
        icon: 'tabler:chart-line',
        title: 'Analystes financiers',
        description:
          'Modélisation financière, analyse des coûts, budgets et systèmes de pilotage de la performance.',
      },
      {
        icon: 'tabler:users',
        title: 'Experts en formation',
        description:
          'Développement des compétences internes et transfert de savoir efficace.',
      },
    ],
    collaborationIntro: {
      eyebrow: 'Excellence internationale',
      heading: 'Normes internationales,',
      headingAccent: 'regard local',
      subtext:
        'Notre équipe collabore avec un réseau international d’experts pour appliquer les meilleures pratiques tout en comprenant la dynamique des marchés régionaux et les cultures d’entreprise.',
    },
    collaborationItems: [
      {
        icon: 'tabler:world',
        title: 'Réseau d’experts mondiaux',
        description:
          'Collaboration régulière avec des consultants et des institutions académiques pour l’échange de savoir-faire.',
      },
      {
        icon: 'tabler:award',
        title: 'Références internationales',
        description:
          'Mise en œuvre des meilleures pratiques en gestion financière, audit et optimisation des processus.',
      },
      {
        icon: 'tabler:book',
        title: 'Formation continue',
        description:
          'Perfectionnement professionnel : conférences, certifications et partenariats de recherche.',
      },
      {
        icon: 'tabler:globe',
        title: 'Adaptation culturelle',
        description:
          'Adapter les méthodes mondiales aux cultures locales et aux cadres réglementaires.',
      },
    ],
    collaborationImageAlt: 'Collaboration internationale et partage des connaissances en conseil',
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
    devImageAlt: 'Formation continue et développement professionnel en conseil',
  },

  ar: {
    hero: {
      eyebrow: 'الفريق',
      heading: 'قيادة',
      headingAccent: 'متميزة',
      subtext:
        'بقيادة د. محمد عمرية، رائد إدارة الربحية في الشرق الأوسط مع أكثر من 26 عاماً من الخبرة العملية المتخصصة.',
    },
    profile: {
      imageAlt: 'د. محمد عمرية - المؤسس والمدير العام',
      name: 'د. محمد عمرية',
      role: 'المؤسس والمدير العام',
      bio: 'دكتوراه في المراجعة وكشف الاحتيال من جامعة عين شمس، ماجستير في التكلفة المستهدفة والنماذج الإحصائية المتكاملة. أكثر من 26 عاماً في إدارة الربحية عبر القطاعات الصناعية والخدمية في الشرق الأوسط.',
      academicTitle: 'التميز الأكاديمي',
      academicBullets: [
        'دكتوراه المراجعة وكشف الاحتيال',
        'ماجستير التكلفة المستهدفة',
        'خبير النماذج الإحصائية',
      ],
      impactTitle: 'الأثر الصناعي',
      impactBullets: ['+60 قطاعاً مخدوماً', '+200 شركة موجهة', 'قيادة الشرق الأوسط'],
    },
    expertiseIntro: {
      heading: 'خبرات',
      headingAccent: 'فريقنا',
      subtext:
        'مهنيون متعددو التخصصات بمعرفة متخصصة عبر المالية والعمليات والإدارة الاستراتيجية.',
    },
    expertiseCards: [
      {
        icon: 'tabler:school',
        title: 'حملة الدكتوراه',
        description:
          'مؤهلات أكاديمية متقدمة في المحاسبة والمالية والمراجعة وإدارة الأعمال من الجامعات الرائدة.',
      },
      {
        icon: 'tabler:certificate',
        title: 'محاسبون معتمدون',
        description:
          'شهادات مهنية وتعليم مستمر في معايير المحاسبة والتحليل المالي والامتثال التنظيمي.',
      },
      {
        icon: 'tabler:building',
        title: 'متخصصون قطاعيون',
        description:
          'خبرة قطاعية عميقة عبر التصنيع والرعاية الصحية ومعالجة الأغذية والعقارات والصناعات الخدمية.',
      },
      {
        icon: 'tabler:settings',
        title: 'استشاريو ERP',
        description:
          'خبرة تقنية في أنظمة تخطيط موارد المؤسسة والتحول الرقمي وأتمتة العمليات.',
      },
      {
        icon: 'tabler:chart-line',
        title: 'محللون ماليون',
        description:
          'مهارات متقدمة في النمذجة المالية وتحليل التكاليف وتخطيط الميزانيات وأنظمة قياس الأداء.',
      },
      {
        icon: 'tabler:users',
        title: 'متخصصو التدريب',
        description:
          'خبراء التطوير المهني الذين يبنون القدرات الداخلية وينقلون المعرفة بفعالية.',
      },
    ],
    collaborationIntro: {
      eyebrow: 'التميز الدولي',
      heading: 'معايير عالمية،',
      headingAccent: 'رؤية محلية',
      subtext:
        'يتعاون فريقنا مع خبراء أمريكيين لضمان أفضل الممارسات العالمية مع الحفاظ على فهم عميق لديناميكيات السوق الإقليمية وثقافة الأعمال.',
    },
    collaborationItems: [
      {
        icon: 'tabler:world',
        title: 'شبكة الخبراء الأمريكيين',
        description:
          'تعاون منتظم مع المهنيين الاستشاريين الأمريكيين والمؤسسات الأكاديمية لتبادل المعرفة.',
      },
      {
        icon: 'tabler:award',
        title: 'المعايير الدولية',
        description:
          'تطبيق أفضل الممارسات العالمية في الإدارة المالية والمراجعة وتحسين العمليات التجارية.',
      },
      {
        icon: 'tabler:book',
        title: 'التعلم المستمر',
        description:
          'التطوير المهني المستمر من خلال المؤتمرات الدولية والشهادات والشراكات البحثية.',
      },
      {
        icon: 'tabler:globe',
        title: 'التكيف الثقافي',
        description:
          'القدرة على تكييف المنهجيات العالمية مع الثقافات التجارية المحلية والبيئات التنظيمية.',
      },
    ],
    collaborationImageAlt: 'التعاون الدولي وتبادل المعرفة في الاستشارات',
    valuesIntro: {
      heading: '',
      headingAccent: 'قيمنا',
      subtext:
        'المبادئ التي توجه عملنا وتحدد التزامنا بنجاح العملاء والتميز المهني.',
    },
    valuesCards: [
      {
        icon: 'tabler:target',
        title: 'الدقة',
        description:
          'كل تحليل وتوصية وتنفيذ يتم بعناية فائقة بالتفاصيل.',
      },
      {
        icon: 'tabler:shield-check',
        title: 'النزاهة',
        description:
          'تواصل صادق وشفاف وممارسات تجارية أخلاقية في جميع علاقات العملاء.',
      },
      {
        icon: 'tabler:bulb',
        title: 'الابتكار',
        description:
          'تحسين مستمر للمنهجيات واعتماد تقنيات جديدة لنتائج أفضل.',
      },
      {
        icon: 'tabler:users',
        title: 'الشراكة',
        description:
          'علاقات تعاونية طويلة الأمد تركز على النجاح المستدام والنمو المتبادل.',
      },
    ],
    devIntro: {
      eyebrow: 'التميز من خلال التعلم',
      heading: 'التطوير المهني',
      headingAccent: 'المستمر',
      subtext:
        'نستثمر باستمرار في التدريب لدمج التميز الأكاديمي مع البصيرة الصناعية العملية، مما يضمن بقاء فريقنا في المقدمة في ابتكار إدارة الربح.',
    },
    devCards: [
      {
        icon: 'tabler:certificate',
        title: 'الشهادات المتقدمة',
        description:
          'السعي المنتظم للحصول على شهادات مهنية في المحاسبة والمراجعة وأنظمة ERP والاستشارات الإدارية.',
      },
      {
        icon: 'tabler:flask',
        title: 'البحث والتطوير',
        description:
          'المشاركة النشطة في البحث الأكاديمي وتطوير منهجيات جديدة لإدارة الربح.',
      },
      {
        icon: 'tabler:presentation',
        title: 'المؤتمرات الصناعية',
        description:
          'الحضور المنتظم للمؤتمرات الدولية للبقاء على اطلاع بالاتجاهات العالمية وأفضل الممارسات.',
      },
      {
        icon: 'tabler:share',
        title: 'تبادل المعرفة',
        description:
          'برامج تدريب داخلية وجلسات مشاركة لتطوير خبرة الفريق بالكامل.',
      },
    ],
    devImageAlt: 'التعلم المستمر والتطوير المهني في الاستشارات',
  },
};
