import type { MetaData } from '~/types';
import { SITE, METADATA } from '~/config';

// Default OG image - using stacked Profit Management logo
const DEFAULT_OG_IMAGE = {
  url: '/profit-stacked.svg', // Using stacked Profit Management logo
  width: 1200,
  height: 630,
};

export interface PageMetadata {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

export function createMetadata(pageData: PageMetadata = {}): MetaData {
  const {
    title,
    description,
    canonical,
    image = '/profit-stacked.svg',
    type = 'website',
    noindex = false
  } = pageData;

  const fullTitle = title 
    ? `${title} | Profit Management Consulting & Training`
    : METADATA.title.default;

  const fullDescription = description || METADATA.description;
  
  const pageUrl = canonical 
    ? `${SITE.site}${canonical}`
    : SITE.site;

  // Use default image object - processing handled by Metadata.astro
  const imageObj = image === '/profit-stacked.svg' 
    ? DEFAULT_OG_IMAGE
    : { url: image, width: 1200, height: 630 };

  return {
    title: fullTitle,
    description: fullDescription,
    canonical: pageUrl,
    robots: {
      index: !noindex,
      follow: !noindex,
    },
    openGraph: {
      url: pageUrl,
      siteName: SITE.name,
      images: [imageObj],
      type,
    },
    twitter: {
      handle: '@profitmanagement',
      site: '@profitmanagement',
      cardType: 'summary_large_image',
    },
  };
}

// Predefined metadata for common pages
export const PAGE_METADATA = {
  home: createMetadata({
    title: 'Leading Your Business to Profit Growth',
    description: 'Profit Management Consulting & Training helps companies achieve higher profitability and sustainable growth through strategic financial expertise and 26 years of hands-on industry experience.',
    canonical: '/',
  }),
  
  about: createMetadata({
    title: 'About Us',
    description: 'Learn about Profit Management Consulting & Training, led by Dr. Mohamed Amria with 26+ years of experience helping businesses achieve sustainable profit growth across 60+ industries.',
    canonical: '/about',
  }),
  
  services: createMetadata({
    title: 'Our Services',
    description: 'Comprehensive consulting and training services covering corporate profitability, cost management, budget development, feasibility studies, ERP integration, and training.',
    canonical: '/services',
  }),
  
  industries: createMetadata({
    title: 'Industries Served',
    description: 'We have guided profitability projects across 60+ industries including medical, food & agriculture, manufacturing, real estate, and engineering sectors.',
    canonical: '/industries',
  }),
  
  why: createMetadata({
    title: 'Why Choose Us',
    description: 'Discover why Profit Management is the partner of choice for sustainable profit growth through data-driven solutions and proven methodologies.',
    canonical: '/why',
  }),
  
  team: createMetadata({
    title: 'Our Team',
    description: 'Meet our multidisciplinary team of accountants, auditors, and business strategists with over 26 years of field experience in profit management.',
    canonical: '/team',
  }),
  
  contact: createMetadata({
    title: 'Contact Us',
    description: 'Get in touch with Profit Management Consulting & Training for consulting, training, or system integration services. Build your profit growth plan today.',
    canonical: '/contact',
  }),
  
  faq: createMetadata({
    title: 'FAQs',
    description: 'Common questions about our profit management consulting and training services.',
    canonical: '/faq',
  }),
};
