/** Structured copy for Why Us page (EN, FR, AR). */

export interface WhyCard {
  icon: string;
  title: string;
  description: string;
}

export interface WhyMethodItem {
  icon: string;
  name: string;
}

export interface WhyStat {
  icon: string;
  value: string;
  label: string;
}

export interface WhyPageCopy {
  hero: {
    eyebrow: string;
    heading: string;
    headingAccent: string;
    subtext: string;
  };
  diffIntro: { eyebrow: string; heading: string; headingAccent: string; subtext: string };
  differentiators: WhyCard[];
  challengesIntro: { heading: string; headingAccent: string; subtext: string };
  challenges: WhyCard[];
  promiseEyebrow: string;
  promiseHeading: string;
  promiseHeadingAccent: string;
  promiseLead: string;
  promiseItems: WhyCard[];
  promiseImageAlt: string;
  methodologyIntro: { heading: string; headingAccent: string; subtext: string };
  methodologyItems: WhyMethodItem[];
  statsIntro: { heading: string; headingAccent: string; subtext: string };
  stats: WhyStat[];
}

export const whyPageCopy: Record<'en' | 'fr' | 'ar', WhyPageCopy> = {
  en: {
    hero: {
      eyebrow: 'Why Profit Management',
      heading: 'What Sets Us',
      headingAccent: 'Apart',
      subtext:
        'Our unique combination of academic excellence, practical experience, and proven methodologies delivers results that last.',
    },
    diffIntro: {
      eyebrow: 'Differentiators',
      heading: 'Built on experience,',
      headingAccent: 'rigor, and measurable impact',
      subtext:
        'Six pillars define how we engage—from leadership depth to sustainable capability building.',
    },
    differentiators: [
      {
        icon: 'tabler:calendar-stats',
        title: '26+ Years Experience',
        description:
          'Led by Dr. Mohamed Amria with over two decades of hands-on experience in profit management across the Middle East.',
      },
      {
        icon: 'tabler:briefcase',
        title: '60+ Industries Served',
        description:
          'Proven methodologies adapted to diverse sectors—from pharmaceuticals to manufacturing, real estate to food processing.',
      },
      {
        icon: 'tabler:school',
        title: 'Academic Excellence',
        description:
          'PhD-level expertise in auditing, fraud detection, and target costing with continuous research and development.',
      },
      {
        icon: 'tabler:world',
        title: 'Global Standards',
        description:
          'Collaboration with international experts ensures best practices while preserving local market insight.',
      },
      {
        icon: 'tabler:trending-up',
        title: 'Measurable Results',
        description:
          'Average 8.5% profit increase with comprehensive tracking and monitoring throughout engagements.',
      },
      {
        icon: 'tabler:leaf',
        title: 'Sustainable Solutions',
        description:
          'Build internal capabilities so profitability becomes a sustained competitive advantage—not a temporary lift.',
      },
    ],
    challengesIntro: {
      heading: 'When Your Business',
      headingAccent: 'Faces',
      subtext:
        'We are the partner of choice when your organization encounters challenges that affect long-term profitability and growth.',
    },
    challenges: [
      {
        icon: 'tabler:trending-down',
        title: 'Rising Revenues, Shrinking Margins',
        description:
          'Sales grow but margins decline due to hidden costs and inefficiencies—we diagnose root causes and tighten the model.',
      },
      {
        icon: 'tabler:question-mark',
        title: 'Lack of Real-Time Insight',
        description:
          'Critical decisions made without trustworthy financial visibility and actionable operational data.',
      },
      {
        icon: 'tabler:coins',
        title: 'High Operational Costs',
        description:
          'Operational spend erodes profits with unclear cost structures and uneven efficiency.',
      },
      {
        icon: 'tabler:users',
        title: 'Skills Gaps',
        description:
          'Teams need stronger financial management disciplines and ERP leverage to execute strategy.',
      },
    ],
    promiseEyebrow: 'Guaranteed Results',
    promiseHeading: 'Our',
    promiseHeadingAccent: 'Promise',
    promiseLead:
      'We diagnose root causes, implement data-driven solutions, and build capability so profitability is sustained—not a temporary win.',
    promiseItems: [
      {
        icon: 'tabler:chart-dots',
        title: 'Comprehensive Analysis',
        description:
          'Deep assessment of financial performance, operations, and market position to find every leakage point.',
      },
      {
        icon: 'tabler:settings',
        title: 'Tailored Solutions',
        description:
          'Methodologies tuned to your industry, scale, and culture—implemented with pragmatic governance.',
      },
      {
        icon: 'tabler:bulb',
        title: 'Knowledge Transfer',
        description:
          'Hands-on training so your teams can sustain and improve outcomes after the engagement.',
      },
      {
        icon: 'tabler:headset',
        title: 'Ongoing Support',
        description:
          'Guidance through implementation transitions to lock in sustainable performance.',
      },
    ],
    promiseImageAlt:
      'Professional commitment to sustainable profit growth and disciplined execution.',
    methodologyIntro: {
      heading: 'Our 11-Point',
      headingAccent: 'Methodology',
      subtext:
        'Profit Management applies eleven integrated mechanisms—from cost precision to ERP alignment—built around Profit as Precision.',
    },
    methodologyItems: [
      { name: 'Financial Analysis', icon: 'tabler:chart-line' },
      { name: 'Cost Control', icon: 'tabler:coin' },
      { name: 'Budget Management', icon: 'tabler:chart-pie' },
      { name: 'Performance Monitoring', icon: 'tabler:dashboard' },
      { name: 'ERP Integration', icon: 'tabler:plug-connected' },
      { name: 'Process Optimization', icon: 'tabler:settings' },
      { name: 'Resource Allocation', icon: 'tabler:users-group' },
      { name: 'Risk Assessment', icon: 'tabler:shield-check' },
      { name: 'Strategic Planning', icon: 'tabler:target' },
      { name: 'Training & Development', icon: 'tabler:certificate' },
      { name: 'Continuous Improvement', icon: 'tabler:refresh' },
    ],
    statsIntro: {
      heading: 'Proven',
      headingAccent: 'Results',
      subtext: 'Benchmarks from engagements where discipline, data, and capability converge.',
    },
    stats: [
      { icon: 'tabler:trending-up', value: '8.5%', label: 'Average Profit Increase' },
      { icon: 'tabler:heart-handshake', value: '94%', label: 'Client Retention Rate' },
      { icon: 'tabler:building-community', value: '60+', label: 'Industries Served' },
      { icon: 'tabler:award', value: '26+', label: 'Years of Experience' },
    ],
  },

  fr: {
    hero: {
      eyebrow: 'Pourquoi Profit Management',
      heading: 'Ce qui nous',
      headingAccent: 'différencie',
      subtext:
        'Notre combinaison unique d’excellence académique, d’expérience opérationnelle et de méthodes éprouvées produit des résultats durables.',
    },
    diffIntro: {
      eyebrow: 'Différenciation',
      heading: 'Une approche fondée sur l’expérience,',
      headingAccent: 'la rigueur et l’impact mesurable',
      subtext:
        'Six piliers définissent notre manière d’intervenir — de la profondeur du leadership au renforcement durable des capacités.',
    },
    differentiators: [
      {
        icon: 'tabler:calendar-stats',
        title: 'Plus de 26 ans d’expérience',
        description:
          'Piloté par le Dr Mohamed Amria, avec plus de deux décennies d’expérience terrain en gestion du profit au Moyen-Orient.',
      },
      {
        icon: 'tabler:briefcase',
        title: 'Plus de 60 secteurs',
        description:
          'Des méthodes éprouvées adaptées à des secteurs variés : pharmacie, industrie, immobilier, agroalimentaire, et bien d’autres.',
      },
      {
        icon: 'tabler:school',
        title: 'Excellence académique',
        description:
          'Expertise de niveau doctorat en audit, détection des fraudes et coût cible, avec recherche et développement continus.',
      },
      {
        icon: 'tabler:world',
        title: 'Références mondiales',
        description:
          'Collaboration avec des experts internationaux pour aligner les meilleures pratiques tout en préservant une lecture fine des marchés locaux.',
      },
      {
        icon: 'tabler:trending-up',
        title: 'Résultats mesurables',
        description:
          'En moyenne +8,5 % de profit, avec suivi complet des performances tout au long des missions.',
      },
      {
        icon: 'tabler:leaf',
        title: 'Solutions durables',
        description:
          'Renforcement des capacités internes pour que la rentabilité devienne un avantage concurrentiel durable.',
      },
    ],
    challengesIntro: {
      heading: 'Lorsque votre entreprise est',
      headingAccent: 'confrontée à',
      subtext:
        'Nous sommes le partenaire de référence lorsque votre organisation rencontre ces défis critiques pour la rentabilité et la croissance.',
    },
    challenges: [
      {
        icon: 'tabler:trending-down',
        title: 'CA en hausse, marges qui fondent',
        description:
          'Les ventes progressent mais la marge se réduit à cause de coûts cachés et d’inefficacités.',
      },
      {
        icon: 'tabler:question-mark',
        title: 'Données peu exploitables',
        description:
          'Décisions prises sans visibilité financière complète ni indicateurs fiables en temps réel.',
      },
      {
        icon: 'tabler:coins',
        title: 'Coûts opérationnels élevés',
        description:
          'Les charges absorbent les profits, avec peu d’efficience et une structure des coûts peu claire.',
      },
      {
        icon: 'tabler:users',
        title: 'Écarts de compétences',
        description:
          'L’équipe interne manque d’expertise avancée en gestion financière et en exploitation des systèmes ERP.',
      },
    ],
    promiseEyebrow: 'Résultats engageants',
    promiseHeading: 'Notre',
    promiseHeadingAccent: 'engagement',
    promiseLead:
      'Nous diagnostiquons les causes profondes, mettons en œuvre des solutions fondées sur les données et renforçons vos capacités internes pour que la rentabilité soit durable.',
    promiseItems: [
      {
        icon: 'tabler:chart-dots',
        title: 'Analyse exhaustive',
        description:
          'Exploration approfondie de la performance financière, des processus et du positionnement marché.',
      },
      {
        icon: 'tabler:settings',
        title: 'Solutions sur mesure',
        description:
          'Méthodes adaptées à votre secteur, à la taille de l’entreprise et à votre culture organisationnelle.',
      },
      {
        icon: 'tabler:bulb',
        title: 'Transfert de savoir-faire',
        description:
          'Formation et montée en compétences pour pérenniser et améliorer les résultats en autonomie.',
      },
      {
        icon: 'tabler:headset',
        title: 'Accompagnement continu',
        description:
          'Suivi pendant la mise en œuvre et les phases de transition pour sécuriser la réussite durable.',
      },
    ],
    promiseImageAlt: 'Engagement professionnel pour une croissance durable du profit.',
    methodologyIntro: {
      heading: 'Notre méthodologie en',
      headingAccent: '11 points',
      subtext:
        'Profit Management mobilise onze leviers — de la maîtrise des coûts à l’intégration ERP — autour du principe central : le profit comme précision.',
    },
    methodologyItems: [
      { name: 'Analyse financière', icon: 'tabler:chart-line' },
      { name: 'Maîtrise des coûts', icon: 'tabler:coin' },
      { name: 'Gestion budgétaire', icon: 'tabler:chart-pie' },
      { name: 'Suivi de la performance', icon: 'tabler:dashboard' },
      { name: 'Intégration ERP', icon: 'tabler:plug-connected' },
      { name: 'Optimisation des processus', icon: 'tabler:settings' },
      { name: 'Allocation des ressources', icon: 'tabler:users-group' },
      { name: 'Évaluation des risques', icon: 'tabler:shield-check' },
      { name: 'Planification stratégique', icon: 'tabler:target' },
      { name: 'Formation et développement', icon: 'tabler:certificate' },
      { name: 'Amélioration continue', icon: 'tabler:refresh' },
    ],
    statsIntro: {
      heading: 'Des résultats',
      headingAccent: 'éprouvés',
      subtext: 'Des chiffres qui parlent plus fort que les mots : notre historique de réussites.',
    },
    stats: [
      { icon: 'tabler:trending-up', value: '8,5 %', label: 'Hausse moyenne du profit' },
      { icon: 'tabler:heart-handshake', value: '94 %', label: 'Taux de fidélisation clients' },
      { icon: 'tabler:building-community', value: '60+', label: 'Secteurs accompagnés' },
      { icon: 'tabler:award', value: '26+', label: 'Années d’expérience' },
    ],
  },

  ar: {
    hero: {
      eyebrow: 'لماذا إدارة الربح',
      heading: 'ما الذي',
      headingAccent: 'يميزنا',
      subtext:
        'مزيج فريد من التميز الأكاديمي والخبرة الميدانية والمنهجيات المثبتة يحقق نتائج تدوم.',
    },
    diffIntro: {
      eyebrow: 'عوامل التميز',
      heading: 'خبرة عميقة،',
      headingAccent: 'أثر قابل للقياس',
      subtext:
        'ستة محاور تحكم طريقة عملنا — من قيادة ميدانية طويلة الأمد إلى بناء قدرات مستدامة داخل مؤسستكم.',
    },
    differentiators: [
      {
        icon: 'tabler:calendar-stats',
        title: 'خبرة تزيد عن 26 عامًا',
        description:
          'بقيادة الدكتور محمد عمرية، مع عقود من الخبرة العملية في إدارة الربحية عبر الشرق الأوسط.',
      },
      {
        icon: 'tabler:briefcase',
        title: 'أكثر من 60 قطاعًا',
        description:
          'منهجيات مثبتة تم تكييفها مع قطاعات متنوعة من الصيدلة إلى التصنيع والعقارات والأغذية.',
      },
      {
        icon: 'tabler:school',
        title: 'تميز أكاديمي',
        description:
          'خبرة على مستوى الدكتوراه في المراجعة وكشف الاحتيال والتكلفة المستهدفة مع بحث وتطوير مستمر.',
      },
      {
        icon: 'tabler:world',
        title: 'معايير عالمية',
        description:
          'التعاون مع خبراء دوليين يضمن أفضل الممارسات مع فهم عميق للسوق المحلي.',
      },
      {
        icon: 'tabler:trending-up',
        title: 'نتائج قابلة للقياس',
        description:
          'متوسط زيادة في الربحية 8.5٪ مع متابعة وتقارير أداء طوال المشروع.',
      },
      {
        icon: 'tabler:leaf',
        title: 'حلول مستدامة',
        description:
          'بناء قدرات داخلية بحيث تصبح الربحية ميزة تنافسية دائمة لا تحسينًا مؤقتًا.',
      },
    ],
    challengesIntro: {
      heading: 'عندما يواجه عملكم',
      headingAccent: 'تحديات حاسمة',
      subtext:
        'نكون الشريك المناسب عندما تؤثر هذه القضايا على الربحية والنمو على المدى الطويل.',
    },
    challenges: [
      {
        icon: 'tabler:trending-down',
        title: 'إيرادات تصعد وهوامش تضعف',
        description:
          'المبيعات تنمو لكن الهامش يتراجع بسبب تكاليف خفية وعدم كفاءة — نحدد الجذور ونضبط النموذج.',
      },
      {
        icon: 'tabler:question-mark',
        title: 'قلة الرؤية المالية اللحظية',
        description:
          'قرارات مصيرية تُتخذ دون بيانات مالية موثوقة ورؤية تشغيلية واضحة.',
      },
      {
        icon: 'tabler:coins',
        title: 'تكاليف تشغيل مرتفعة',
        description:
          'الإنفاق التشغيلي يقلص الأرباح مع هياكل تكلفة غير واضحة.',
      },
      {
        icon: 'tabler:users',
        title: 'فجوات في المهارات',
        description:
          'فريقكم يحتاج تعزيزًا في الإدارة المالية والاستفادة من أنظمة تخطيط الموارد.',
      },
    ],
    promiseEyebrow: 'التزام بالنتائج',
    promiseHeading: 'وعدنا',
    promiseHeadingAccent: 'لكم',
    promiseLead:
      'نشخص الأسباب الجذرية، ننفذ حلولاً مدفوعة بالبيانات، وننقل المعرفة حتى تظل النتائج مستدامة.',
    promiseItems: [
      {
        icon: 'tabler:chart-dots',
        title: 'تحليل شامل',
        description:
          'تقييم عميق للأداء المالي والعمليات والسوق لكشف كل نقاط تسرب الربح.',
      },
      {
        icon: 'tabler:settings',
        title: 'حلول مخصصة',
        description:
          'منهجيات مصممة لقطاعكم وحجمكم وثقافة مؤسستكم.',
      },
      {
        icon: 'tabler:bulb',
        title: 'نقل المعرفة',
        description:
          'تدريب عملي يمكّن فرقكم من الإبقاء على التحسين بعد انتهاء المشروع.',
      },
      {
        icon: 'tabler:headset',
        title: 'دعم مستمر',
        description:
          'مرافقة خلال التنفيذ والانتقال لضمان استدامة الأداء.',
      },
    ],
    promiseImageAlt: 'التزام مهني بنمو ربحي مستدام وتنفيذ منضبط.',
    methodologyIntro: {
      heading: 'منهجيتنا في',
      headingAccent: 'أحد عشر محورًا',
      subtext:
        'إدارة الربح تفعّل أحد عشر محورًا متكاملًا — من ضبط التكاليف إلى تكامل أنظمة ERP — حول مبدأ الربح كدقة.',
    },
    methodologyItems: [
      { name: 'التحليل المالي', icon: 'tabler:chart-line' },
      { name: 'ضبط التكاليف', icon: 'tabler:coin' },
      { name: 'إدارة الميزانيات', icon: 'tabler:chart-pie' },
      { name: 'مراقبة الأداء', icon: 'tabler:dashboard' },
      { name: 'تكامل ERP', icon: 'tabler:plug-connected' },
      { name: 'تحسين العمليات', icon: 'tabler:settings' },
      { name: 'توزيع الموارد', icon: 'tabler:users-group' },
      { name: 'تقييم المخاطر', icon: 'tabler:shield-check' },
      { name: 'التخطيط الاستراتيجي', icon: 'tabler:target' },
      { name: 'التدريب والتطوير', icon: 'tabler:certificate' },
      { name: 'التحسين المستمر', icon: 'tabler:refresh' },
    ],
    statsIntro: {
      heading: 'نتائج',
      headingAccent: 'مثبتة',
      subtext: 'مؤشرات من مشاريع حيث تلتقي الانضباط والبيانات وبناء القدرات.',
    },
    stats: [
      { icon: 'tabler:trending-up', value: '8.5٪', label: 'متوسط زيادة الربح' },
      { icon: 'tabler:heart-handshake', value: '94٪', label: 'معدل الاحتفاظ بالعملاء' },
      { icon: 'tabler:building-community', value: '60+', label: 'قطاع مخدوم' },
      { icon: 'tabler:award', value: '26+', label: 'عامًا من الخبرة' },
    ],
  },
};
