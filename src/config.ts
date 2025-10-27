export const SITE = {
  name: 'Profit Management Consulting & Training',
  site: 'https://www.profitmanagement.com',
  base: '/',
  trailingSlash: false,
  googleSiteVerificationId: '', // Update with actual Google verification ID when available
};

export const METADATA = {
  title: {
    default: 'Profit Management Consulting & Training | Profit as Precision',
    template: '%s | Profit Management Consulting & Training',
  },
  description: 'A leading consultancy empowering organizations to achieve sustainable profit growth through financial, operational, and digital excellence.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    site_name: 'Profit Management Consulting & Training',
    images: [
      {
        url: '/profit-stacked.svg', // Using stacked Profit Management logo
        width: 1200,
        height: 630,
        alt: 'Profit Management Consulting & Training | Profit as Precision',
      },
    ],
    type: 'website',
    title: 'Profit Management Consulting & Training | Profit as Precision',
    description: 'A leading consultancy empowering organizations to achieve sustainable profit growth through financial, operational, and digital excellence.',
  },
  twitter: {
    handle: '@profitmanagement',
    site: '@profitmanagement',
    cardType: 'summary_large_image',
    title: 'Profit Management Consulting & Training | Profit as Precision',
    description: 'A leading consultancy empowering organizations to achieve sustainable profit growth through financial, operational, and digital excellence.',
  },
};

// I18N removed - not using internationalization

export const APP_BLOG = {
  isEnabled: false, // Disabled since we removed blog functionality
  postsPerPage: 6,
  post: {
    isEnabled: false,
    permalink: '/%slug%',
    robots: {
      index: true,
    },
  },
  list: {
    isEnabled: false,
    pathname: 'blog',
    robots: {
      index: true,
    },
  },
  category: {
    isEnabled: false,
    pathname: 'category',
    robots: {
      index: true,
    },
  },
  tag: {
    isEnabled: false,
    pathname: 'tag',
    robots: {
      index: false,
    },
  },
  isRelatedPostsEnabled: false,
  relatedPostsCount: 4,
};

export const ANALYTICS = {
  vendors: {
    googleAnalytics: {
      id: null,
      partytown: false,
    },
  },
};

export const UI = {
  theme: 'system',
};
