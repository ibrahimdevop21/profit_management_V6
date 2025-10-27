export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Services',
      href: '/services',
    },
    {
      text: 'Industries',
      href: '/industries',
    },
    {
      text: 'Why Choose Us',
      href: '/why',
    },
    {
      text: 'Team',
      href: '/team',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ],
  actions: [{ text: 'Book a Consultation', href: '/contact', variant: 'primary' as const }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'All Services', href: '/services' },
        { text: 'Corporate Profit Growth', href: '/services#profit-growth' },
        { text: 'Business Transformation', href: '/services#transformation' },
        { text: 'Strategic Decision Support', href: '/services#strategic-support' },
        { text: 'Training & Development', href: '/services#training' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Our Team', href: '/team' },
        { text: 'Industries Served', href: '/industries' },
        { text: 'Why Choose Us', href: '/why' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Contact Us', href: '/contact' },
        { text: 'Book Consultation', href: '/contact' },
        { text: 'Training Programs', href: '/services#training' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: '/legal/privacy' },
        { text: 'Terms of Service', href: '/legal/terms' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/profit-management-consulting/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profitmanagement/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/profitmanagement/' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@profitmanagement' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Profit Management Consulting & Training. All rights reserved.
  `,
};
