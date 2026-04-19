import { homepageUi } from '~/utils/i18n-homepage';
import { servicesPageUi } from '~/utils/i18n-services-page';
import { contactPageUi } from '~/utils/i18n-contact-page';

export const languages = {
  en: 'English',
  ar: 'العربية',
  fr: 'Français',
};

export const defaultLang = 'en';

export const ui: Record<string, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.industries': 'Sectors',
    'nav.why': 'Why Us',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    'lang.switch': 'Switch language',
    
    // Common
    'common.readMore': 'Read more',
    'common.learnMore': 'Learn more',
    'common.getStarted': 'Get started',
    'common.bookConsultation': 'Book consultation',
    'common.contactUs': 'Contact Us',
    'common.ourServices': 'Our Services',
    'common.aboutUs': 'About Us',
    
    // Hero Section
    'hero.title': 'We engineer profits that',
    'hero.titleHighlight': 'withstand uncertainty',
    'hero.subtitle': 'For over 26 years, Profit Management has helped organizations master cost accuracy, margin optimization, and long-term profitability.',
    'hero.ctaPrimary': 'Book a consultation',
    'hero.ctaSecondary': 'Discover our approach',
    'hero.stat1': 'Companies Served',
    'hero.stat2': 'Industries',
    'hero.stat3': 'Years Experience',
    'hero.stat4': 'Avg. Profit Increase',
    
    // Home Page
    'home.tagline': 'About Us',
    'home.title': 'Profit Management Consulting & Training',
    'home.description': 'Profit Management Consulting & Training is an Egyptian consulting firm specialized in profitability management and training. Led by Dr. Mohamed Amria, a pioneer in profit management across the Middle East, the company empowers organizations to enhance margins, improve efficiency, and achieve long-term success.',
    'home.subtitle': 'We combine global consulting standards with local insight to deliver measurable, sustainable profit growth.',
    'home.servicesTitle': 'Core Services Overview',
    'home.servicesSubtitle': 'Comprehensive consulting and training services covering every dimension of corporate profitability—linking finance, operations, and strategy.',
    
    // Services
    'services.profitGrowth': 'Corporate Profit Growth',
    'services.transformation': 'Business Transformation',
    'services.decisionSupport': 'Strategic Decision Support',
    'services.training': 'Training & Development',
    'services.profitAnalysis': 'Profitability Analysis',
    'services.costOptimization': 'Cost Optimization',
    'services.performanceManagement': 'Performance Management',
    
    // About/Team
    'about.leadership': 'Leadership Excellence',
    'about.teamExpertise': 'Our Team Expertise',
    'about.globalStandards': 'Global Standards, Local Insight',
    'about.ourValues': 'Our Values',
    'about.precision': 'Precision',
    'about.integrity': 'Integrity',
    'about.innovation': 'Innovation',
    'about.partnership': 'Partnership',
    
    // Industries
    'industries.title': 'Major Industry Sectors',
    'industries.subtitle': 'Each partnership demonstrates our ability to adapt proven methodologies to specific industry challenges and deliver measurable results.',
    'industries.medical': 'Medical Industries',
    'industries.food': 'Food Processing',
    'industries.manufacturing': 'Manufacturing',
    'industries.realEstate': 'Real Estate',
    'industries.retail': 'Retail & Commerce',
    'industries.technology': 'Technology',
    
    // Why Choose Us
    'why.title': 'What Sets Us Apart',
    'why.subtitle': 'Our unique combination of academic excellence, practical experience, and proven methodologies delivers results that last.',
    'why.experience': '26+ Years Experience',
    'why.industries': '60+ Industries Served',
    'why.companies': '200+ Companies Guided',
    'why.expertise': 'PhD-Level Expertise',
    'why.globalReach': 'Global Standards',
    'why.provenResults': 'Proven Results',
    
    // Contact
    'contact.title': 'Get started today',
    'contact.subtitle': 'Tell us about your business challenges and goals. We\'ll respond within 24 hours with a customized consultation plan.',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.company': 'Company Name',
    'contact.phone': 'Phone Number',
    'contact.message': 'Message',
    'contact.send': 'Send message',
    'contact.required': 'Required',
    
    // Partners
    'partners.tagline': 'Trusted Partners',
    'partners.title': 'Organizations We\'ve Served',
    'partners.subtitle': 'We are proud to have partnered with leading organizations across various industries, delivering measurable results and sustainable growth.',
    'partners.trustStatement': 'Join the growing list of organizations that trust Profit Management for their business transformation.',
    
    // Footer
    'footer.company': 'Company',
    'footer.services': 'Services',
    'footer.support': 'Support',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy policy',
    'footer.terms': 'Terms of service',
    'footer.copyright':
      '© {year} Profit Management Consulting & Training. All rights reserved.',
    'footer.description': 'Empowering organizations across the Middle East to achieve sustainable profit growth through specialized consulting and training.',
    'footer.address': 'Cairo, Egypt',
    'footer.phone': '+20 XXX XXX XXXX',
    'footer.email': 'info@profit-manage.com',
    'footer.allServices': 'All services',
    'footer.corpProfitGrowth': 'Corporate profit growth',
    'footer.businessTransformation': 'Business transformation',
    'footer.strategicSupport': 'Strategic decision support',
    'footer.trainingDev': 'Training & development',
    'footer.aboutUs': 'About us',
    'footer.ourTeam': 'Our team',
    'footer.industriesServed': 'Industries served',
    'footer.whyChooseUs': 'Why us',
    'footer.contactUs': 'Contact us',
    'footer.bookConsultation': 'Book consultation',
    'footer.trainingPrograms': 'Training programs',
    'nav.openMenu': 'Open main menu',

    // Site-wide CTA banner
    'cta.heading': 'Ready to Transform Your',
    'cta.headingAccent': 'Profitability?',
    'cta.subtext':
      "Let's discuss how our comprehensive consulting and training services can help your organization achieve sustainable profit growth.",
    'cta.primaryBtn': 'Book a Consultation',
    'cta.ghostBtn': 'Call Us Now',
    'cta.directContact': 'Direct Contact',
    'cta.company': 'Profit Management Consulting & Training',
    'cta.location': 'Cairo, Egypt',
    'cta.phone': '+201068970607',

    'pageHero.services.eyebrow': 'Services',
    'pageHero.services.heading': 'Consulting & training',
    'pageHero.services.headingAccent': 'that move the needle',
    'pageHero.services.subtext':
      'Structured capability groups—profit growth, transformation, decision support, and training—delivered with the same disciplined cadence on every engagement.',
    'pageHero.faq.eyebrow': 'Support',
    'pageHero.faq.heading': 'Frequently asked',
    'pageHero.faq.headingAccent': 'questions',
    'pageHero.faq.subtext':
      'Straight answers about how we work, what to expect, and how engagements are scoped and measured.',
    'pageHero.privacy.eyebrow': 'Legal',
    'pageHero.privacy.heading': 'Privacy',
    'pageHero.privacy.headingAccent': 'policy',
    'pageHero.privacy.subtext':
      'How we collect, use, and protect personal information when you interact with Profit Management.',
    'pageHero.terms.eyebrow': 'Legal',
    'pageHero.terms.heading': 'Terms of',
    'pageHero.terms.headingAccent': 'service',
    'pageHero.terms.subtext':
      'Conditions that apply when you engage Profit Management for consulting, training, or related professional services.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.industries': 'Secteurs',
    'nav.why': 'Atouts',
    'nav.team': 'Équipe',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    'lang.switch': 'Changer de langue',
    
    // Common
    'common.readMore': 'Lire la suite',
    'common.learnMore': 'En savoir plus',
    'common.getStarted': 'Commencer',
    'common.bookConsultation': 'Réserver une consultation',
    'common.contactUs': 'Nous contacter',
    'common.ourServices': 'Nos services',
    'common.aboutUs': 'À propos',
    
    // Hero Section
    'hero.title': 'Nous concevons des profits qui',
    'hero.titleHighlight': 'résistent à l’incertitude',
    'hero.subtitle':
      'Depuis plus de 26 ans, Profit Management aide les organisations à maîtriser la précision des coûts, l’optimisation des marges et une rentabilité pérenne.',
    'hero.ctaPrimary': 'Réserver une consultation',
    'hero.ctaSecondary': 'Découvrir notre approche',
    'hero.stat1': 'Entreprises accompagnées',
    'hero.stat2': 'Secteurs',
    'hero.stat3': "Années d'expérience",
    'hero.stat4': 'Hausse moyenne du profit',
    
    // Home Page
    'home.tagline': 'À propos',
    'home.title': 'Profit Management Consulting & Training',
    'home.description': 'Profit Management Consulting & Training is an Egyptian consulting firm specialized in profitability management and training. Led by Dr. Mohamed Amria, a pioneer in profit management across the Middle East, the company empowers organizations to enhance margins, improve efficiency, and achieve long-term success.',
    'home.subtitle': 'We combine global consulting standards with local insight to deliver measurable, sustainable profit growth.',
    'home.servicesTitle': 'Core Services Overview',
    'home.servicesSubtitle': 'Comprehensive consulting and training services covering every dimension of corporate profitability—linking finance, operations, and strategy.',
    
    // Services
    'services.profitGrowth': 'Corporate Profit Growth',
    'services.transformation': 'Business Transformation',
    'services.decisionSupport': 'Strategic Decision Support',
    'services.training': 'Training & Development',
    'services.profitAnalysis': 'Profitability Analysis',
    'services.costOptimization': 'Cost Optimization',
    'services.performanceManagement': 'Performance Management',
    
    // About/Team
    'about.leadership': 'Leadership Excellence',
    'about.teamExpertise': 'Our Team Expertise',
    'about.globalStandards': 'Global Standards, Local Insight',
    'about.ourValues': 'Our Values',
    'about.precision': 'Precision',
    'about.integrity': 'Integrity',
    'about.innovation': 'Innovation',
    'about.partnership': 'Partnership',
    
    // Industries
    'industries.title': 'Major Industry Sectors',
    'industries.subtitle': 'Each partnership demonstrates our ability to adapt proven methodologies to specific industry challenges and deliver measurable results.',
    'industries.medical': 'Medical Industries',
    'industries.food': 'Food Processing',
    'industries.manufacturing': 'Manufacturing',
    'industries.realEstate': 'Real Estate',
    'industries.retail': 'Retail & Commerce',
    'industries.technology': 'Technology',
    
    // Why Choose Us
    'why.title': 'What Sets Us Apart',
    'why.subtitle': 'Our unique combination of academic excellence, practical experience, and proven methodologies delivers results that last.',
    'why.experience': '26+ Years Experience',
    'why.industries': '60+ Industries Served',
    'why.companies': '200+ Companies Guided',
    'why.expertise': 'PhD-Level Expertise',
    'why.globalReach': 'Global Standards',
    'why.provenResults': 'Proven Results',
    
    // Contact
    'contact.title': 'Commencez aujourd’hui',
    'contact.subtitle': 'Tell us about your business challenges and goals. We\'ll respond within 24 hours with a customized consultation plan.',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.company': 'Company Name',
    'contact.phone': 'Phone Number',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le message',
    'contact.required': 'Required',
    
    // Partners
    'partners.tagline': 'Partenaires de confiance',
    'partners.title': 'Organisations accompagnées',
    'partners.subtitle':
      'Nous sommes fiers d’avoir collaboré avec des organisations leaders dans de nombreux secteurs, avec des résultats mesurables et une croissance durable.',
    'partners.trustStatement':
      'Rejoignez les entreprises qui font confiance à Profit Management pour leur transformation.',
    
    // Footer
    'footer.company': 'Entreprise',
    'footer.services': 'Services',
    'footer.support': 'Assistance',
    'footer.legal': 'Légal',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions d’utilisation',
    'footer.copyright':
      '© {year} Profit Management Consulting & Training. Tous droits réservés.',
    'footer.description':
      'Nous aidons les organisations au Moyen-Orient à sécuriser une croissance rentable durable grâce au conseil et à la formation spécialisés.',
    'footer.address': 'Cairo, Egypt',
    'footer.phone': '+20 XXX XXX XXXX',
    'footer.email': 'info@profit-manage.com',
    'footer.allServices': 'Tous les services',
    'footer.corpProfitGrowth': 'Croissance des profits',
    'footer.businessTransformation': 'Transformation d’entreprise',
    'footer.strategicSupport': 'Appui stratégique',
    'footer.trainingDev': 'Formation et développement',
    'footer.aboutUs': 'À propos',
    'footer.ourTeam': 'Notre équipe',
    'footer.industriesServed': 'Secteurs servis',
    'footer.whyChooseUs': 'Pourquoi nous',
    'footer.contactUs': 'Contact',
    'footer.bookConsultation': 'Réserver une consultation',
    'footer.trainingPrograms': 'Programmes de formation',
    'nav.openMenu': 'Ouvrir le menu principal',

    'cta.heading': 'Prêt à transformer votre',
    'cta.headingAccent': 'rentabilité ?',
    'cta.subtext':
      'Discutons de la façon dont nos services complets de conseil et de formation peuvent aider votre organisation à atteindre une croissance rentable durable.',
    'cta.primaryBtn': 'Réserver une consultation',
    'cta.ghostBtn': 'Appelez-nous',
    'cta.directContact': 'Contact direct',
    'cta.company': 'Profit Management Conseil & Formation',
    'cta.location': 'Le Caire, Égypte',
    'cta.phone': '+201068970607',

    'pageHero.services.eyebrow': 'Services',
    'pageHero.services.heading': 'Conseil et formation',
    'pageHero.services.headingAccent': 'qui changent la donne',
    'pageHero.services.subtext':
      'Des blocs de capacités structurés — croissance du profit, transformation, aide à la décision et formation — avec la même exigence sur chaque mission.',
    'pageHero.faq.eyebrow': 'Aide',
    'pageHero.faq.heading': 'Questions',
    'pageHero.faq.headingAccent': 'fréquentes',
    'pageHero.faq.subtext':
      'Réponses claires sur notre façon de travailler, les délais et la manière dont nous cadrons les engagements.',
    'pageHero.privacy.eyebrow': 'Légal',
    'pageHero.privacy.heading': 'Politique de',
    'pageHero.privacy.headingAccent': 'confidentialité',
    'pageHero.privacy.subtext':
      'Comment nous traitons vos données lorsque vous interagissez avec Profit Management.',
    'pageHero.terms.eyebrow': 'Légal',
    'pageHero.terms.heading': 'Conditions',
    'pageHero.terms.headingAccent': 'générales',
    'pageHero.terms.subtext':
      'Modalités applicables lorsque vous faites appel à Profit Management pour du conseil, de la formation ou des prestations associées.',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'الخدمات',
    'nav.industries': 'القطاعات',
    'nav.why': 'لماذا نحن',
    'nav.team': 'فريقنا',
    'nav.contact': 'تواصل',
    'nav.faq': 'الأسئلة الشائعة',
    'lang.switch': 'تغيير اللغة',
    
    // Common
    'common.readMore': 'اقرأ المزيد',
    'common.learnMore': 'تعلم المزيد',
    'common.getStarted': 'ابدأ الآن',
    'common.bookConsultation': 'احجز استشارة',
    'common.contactUs': 'تواصل معنا',
    'common.ourServices': 'خدماتنا',
    'common.aboutUs': 'من نحن',
    
    // Hero Section
    'hero.title': 'نهندس أرباحاً',
    'hero.titleHighlight': 'تصمد أمام عدم اليقين',
    'hero.subtitle': 'لأكثر من 26 عاماً، ساعدت إدارة الربح المؤسسات على إتقان دقة التكاليف وتحسين الهوامش والربحية طويلة الأمد.',
    'hero.ctaPrimary': 'احجز استشارة',
    'hero.ctaSecondary': 'استكشف منهجيتنا',
    'hero.stat1': 'شركة مخدومة',
    'hero.stat2': 'قطاع',
    'hero.stat3': 'عام خبرة',
    'hero.stat4': 'متوسط زيادة الربح',
    
    // Home Page
    'home.tagline': 'من نحن',
    'home.title': 'إدارة الربح للاستشارات والتدريب',
    'home.description': 'إدارة الربح للاستشارات والتدريب هي شركة استشارية مصرية متخصصة في إدارة الربحية والتدريب. بقيادة الدكتور محمد عمرية، رائد إدارة الربح في الشرق الأوسط، تمكن الشركة المؤسسات من تعزيز الهوامش وتحسين الكفاءة وتحقيق النجاح طويل المدى.',
    'home.subtitle': 'نجمع بين معايير الاستشارات العالمية والرؤى المحلية لتقديم نمو ربحي مستدام وقابل للقياس.',
    'home.servicesTitle': 'نظرة عامة على الخدمات الأساسية',
    'home.servicesSubtitle': 'خدمات استشارية وتدريبية شاملة تغطي كل بُعد من أبعاد الربحية المؤسسية - تربط بين المالية والعمليات والاستراتيجية.',
    
    // Services
    'services.profitGrowth': 'نمو الأرباح المؤسسية',
    'services.transformation': 'التحول في الأعمال',
    'services.decisionSupport': 'دعم اتخاذ القرار الاستراتيجي',
    'services.training': 'التدريب والتطوير',
    'services.profitAnalysis': 'تحليل الربحية',
    'services.costOptimization': 'تحسين التكاليف',
    'services.performanceManagement': 'إدارة الأداء',
    
    // About/Team
    'about.leadership': 'التميز القيادي',
    'about.teamExpertise': 'خبرة فريقنا',
    'about.globalStandards': 'معايير عالمية، رؤية محلية',
    'about.ourValues': 'قيمنا',
    'about.precision': 'الدقة',
    'about.integrity': 'النزاهة',
    'about.innovation': 'الابتكار',
    'about.partnership': 'الشراكة',
    
    // Industries
    'industries.title': 'القطاعات الصناعية الرئيسية',
    'industries.subtitle': 'تُظهر كل شراكة قدرتنا على تكييف المنهجيات المُثبتة مع تحديات الصناعة المحددة وتحقيق نتائج قابلة للقياس.',
    'industries.medical': 'الصناعات الطبية',
    'industries.food': 'تجهيز الأغذية',
    'industries.manufacturing': 'التصنيع',
    'industries.realEstate': 'العقارات',
    'industries.retail': 'التجزئة والتجارة',
    'industries.technology': 'التكنولوجيا',
    
    // Why Choose Us
    'why.title': 'ما يميزنا',
    'why.subtitle': 'مزيجنا الفريد من التميز الأكاديمي والخبرة العملية والمنهجيات المُثبتة يحقق نتائج دائمة.',
    'why.experience': 'خبرة أكثر من 26 عامًا',
    'why.industries': 'أكثر من 60 قطاعًا',
    'why.companies': 'أكثر من 200 شركة',
    'why.expertise': 'خبرة على مستوى الدكتوراه',
    'why.globalReach': 'معايير عالمية',
    'why.provenResults': 'نتائج مُثبتة',
    
    // Contact
    'contact.title': 'ابدأ اليوم',
    'contact.subtitle': 'أخبرنا عن تحديات وأهداف عملك. سنرد خلال 24 ساعة بخطة استشارية مخصصة.',
    'contact.name': 'الاسم الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.company': 'اسم الشركة',
    'contact.phone': 'رقم الهاتف',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.required': 'مطلوب',
    
    // Partners
    'partners.tagline': 'شركاء الثقة',
    'partners.title': 'المؤسسات التي خدمناها',
    'partners.subtitle': 'نفخر بشراكتنا مع المؤسسات الرائدة في مختلف القطاعات، حيث حققنا نتائج قابلة للقياس ونمواً مستداماً.',
    'partners.trustStatement': 'انضم إلى القائمة المتنامية من المؤسسات التي تثق في إدارة الأرباح لتحويل أعمالها.',
    
    // Footer
    'footer.company': 'الشركة',
    'footer.services': 'الخدمات',
    'footer.support': 'الدعم',
    'footer.legal': 'قانوني',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.copyright': '© {year} إدارة الربح للاستشارات والتدريب. جميع الحقوق محفوظة.',
    'footer.description': 'تمكين المؤسسات في جميع أنحاء الشرق الأوسط لتحقيق نمو ربحي مستدام من خلال الاستشارات والتدريب المتخصص.',
    'footer.address': 'القاهرة، مصر',
    'footer.phone': '+20 XXX XXX XXXX',
    'footer.email': 'info@profit-manage.com',
    'footer.allServices': 'كل الخدمات',
    'footer.corpProfitGrowth': 'نمو الأرباح المؤسسية',
    'footer.businessTransformation': 'التحول في الأعمال',
    'footer.strategicSupport': 'دعم اتخاذ القرار',
    'footer.trainingDev': 'التدريب والتطوير',
    'footer.aboutUs': 'من نحن',
    'footer.ourTeam': 'فريقنا',
    'footer.industriesServed': 'القطاعات المخدومة',
    'footer.whyChooseUs': 'لماذا نحن',
    'footer.contactUs': 'تواصل معنا',
    'footer.bookConsultation': 'احجز استشارة',
    'footer.trainingPrograms': 'برامج التدريب',
    'nav.openMenu': 'فتح القائمة الرئيسية',

    'cta.heading': 'هل أنت مستعد لتحويل',
    'cta.headingAccent': 'ربحيتك؟',
    'cta.subtext':
      'دعنا نناقش كيف يمكن لخدمات الاستشارة والتدريب الشاملة لدينا مساعدة مؤسستك على تحقيق نمو ربحي مستدام.',
    'cta.primaryBtn': 'احجز استشارة',
    'cta.ghostBtn': 'اتصل بنا الآن',
    'cta.directContact': 'التواصل المباشر',
    'cta.company': 'إدارة الربح للاستشارات والتدريب',
    'cta.location': 'القاهرة، مصر',
    'cta.phone': '+201068970607',

    'pageHero.services.eyebrow': 'الخدمات',
    'pageHero.services.heading': 'استشارات وتدريب',
    'pageHero.services.headingAccent': 'يحركان النتائج',
    'pageHero.services.subtext':
      'قدرات منظمة لنمو الأرباح والتحول ودعم القرار والتدريب — بنفس الإيقاع المنهجي في كل تعاقد.',
    'pageHero.faq.eyebrow': 'الدعم',
    'pageHero.faq.heading': 'أسئلة',
    'pageHero.faq.headingAccent': 'شائعة',
    'pageHero.faq.subtext':
      'إجابات مباشرة حول كيفية عملنا وما يمكن توقعه وكيف نحدد نطاق المشاريع.',
    'pageHero.privacy.eyebrow': 'قانوني',
    'pageHero.privacy.heading': 'سياسة',
    'pageHero.privacy.headingAccent': 'الخصوصية',
    'pageHero.privacy.subtext':
      'كيف نجمع معلوماتك الشخصية ونستخدمها ونحميها عند التواصل مع إدارة الربح.',
    'pageHero.terms.eyebrow': 'قانوني',
    'pageHero.terms.heading': 'شروط',
    'pageHero.terms.headingAccent': 'الخدمة',
    'pageHero.terms.subtext':
      'الشروط التي تنطبق عند التعاقد مع إدارة الربح للاستشارات أو التدريب أو الخدمات المهنية ذات الصلة.',
  },
};

Object.assign(ui.en, homepageUi.en);
Object.assign(ui.fr, homepageUi.fr);
Object.assign(ui.ar, homepageUi.ar);

Object.assign(ui.en, servicesPageUi.en);
Object.assign(ui.fr, servicesPageUi.fr);
Object.assign(ui.ar, servicesPageUi.ar);

Object.assign(ui.en, contactPageUi.en);
Object.assign(ui.fr, contactPageUi.fr);
Object.assign(ui.ar, contactPageUi.ar);

/** Explicit union — `ui` is typed as Record<string, …> so `keyof typeof ui` becomes `string` in TS */
export type SiteLang = 'en' | 'ar' | 'fr';

export function getLangFromUrl(url: URL): SiteLang {
  const seg = url.pathname.split('/')[1];
  if (seg === 'ar' || seg === 'fr') return seg;
  return 'en';
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    return ui[lang]?.[key] || ui[defaultLang]?.[key] || key;
  };
}

export function getLocalizedPath(path: string, lang: string) {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}

export function stripLocalePrefix(pathname: string) {
  if (pathname === '/ar' || pathname.startsWith('/ar/')) return pathname.replace(/^\/ar/, '') || '/';
  if (pathname === '/fr' || pathname.startsWith('/fr/')) return pathname.replace(/^\/fr/, '') || '/';
  return pathname || '/';
}

export function localizePath(pathname: string, locale: string) {
  const base = stripLocalePrefix(pathname);
  if (locale === 'en') return base;
  return `/${locale}${base === '/' ? '' : base}`;
}

export function getAlternateLanguage(currentLang: string) {
  if (currentLang === 'en') return 'ar';
  if (currentLang === 'ar') return 'fr';
  return 'en';
}
