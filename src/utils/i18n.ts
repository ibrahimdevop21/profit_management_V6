export const languages = {
  en: 'English',
  ar: 'العربية',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.industries': 'Industries',
    'nav.why': 'Why Choose Us',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    'lang.switch': 'Switch Language',
    'footer.company': 'Company',
    'footer.services': 'Services',
    'footer.support': 'Support',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.copyright': '© 2024 Profit Management Consulting & Training. All rights reserved.',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'عن الشركة',
    'nav.services': 'الخدمات',
    'nav.industries': 'القطاعات',
    'nav.why': 'لماذا نحن',
    'nav.team': 'الفريق',
    'nav.contact': 'اتصل بنا',
    'nav.faq': 'الأسئلة الشائعة',
    'lang.switch': 'تغيير اللغة',
    'footer.company': 'الشركة',
    'footer.services': 'الخدمات',
    'footer.support': 'الدعم',
    'footer.legal': 'قانوني',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.copyright': '© 2024 إدارة الربح للاستشارات والتدريب. جميع الحقوق محفوظة.',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getLocalizedPath(path: string, lang: string) {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}

export function getAlternateLanguage(currentLang: string) {
  return currentLang === 'en' ? 'ar' : 'en';
}
