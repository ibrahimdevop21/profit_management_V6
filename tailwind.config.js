import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        // Premium Consulting Color Palette
        primary: '#1A2E45',      // Deep Navy
        accent: '#C9A227',       // Warm Gold
        'accent-hover': '#A68B1F', // Darker Gold
        
        // Core Brand Colors
        navy: '#1A2E45',         // Deep Navy for headings
        gold: '#C9A84C',         // Warm gold (aligned with --pm-accent)
        'pm-accent': '#C9A84C',
        'pm-surface': '#131926',
        'pm-surface-elevated': '#1A2235',
        'pm-muted': '#A8A8A8',
        'pm-cream': '#F0EDE6',
        'gold-hover': '#A68B1F', // Gold hover state
        'off-white': '#F9F9F9',  // Off-white background
        charcoal: '#1C1C1E',     // Muted charcoal for nav/footer
        gray: '#4B5563',         // Body text gray
        'gray-light': '#E5E7EB', // Borders and dividers
        'gray-bg': '#FAFAFA',    // Light background
        
        // Profit Management Brand Colors (used in components)
        'profit-navy': '#1A2E45',    // Deep Navy
        'profit-gold': '#C9A227',    // Warm Gold
        'profit-text': '#4B5563',    // Body text
        'profit-light': '#F9F9F9',   // Light background
        
        // Legacy support (will be phased out)
        finance: {
          charcoal: '#1A2E45',
          gold: '#C9A227',
          'gold-hover': '#A68B1F',
          ivory: '#F9F9F9',
          gray: '#4B5563',
          sand: '#E5E7EB',
          black: '#1C1C1E',
        },
        text: {
          primary: '#1A2E45',
          body: '#4B5563',
          secondary: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'Cairo', 'Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Playfair Display', 'Cairo', 'Georgia', 'Times New Roman', 'serif'],
        heading: ['Playfair Display', 'Cairo', 'Georgia', 'serif'],
        body: ['DM Sans', 'Cairo', ...defaultTheme.fontFamily.sans],
        mono: ['DM Mono', 'Cairo', 'ui-monospace', 'monospace'],
        arabic: ['Cairo', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        'heading': '600',
        'body': '400',
        'medium': '500',
      },
      letterSpacing: {
        'wide': '0.025em',
      },
      boxShadow: {
        'premium': '0 4px 12px rgba(26, 46, 69, 0.08)',
        'premium-sm': '0 2px 8px rgba(26, 46, 69, 0.05)',
        'premium-md': '0 8px 24px rgba(26, 46, 69, 0.12)',
        'premium-lg': '0 16px 40px rgba(26, 46, 69, 0.15)',
        // Legacy support
        'finance': '0 4px 12px rgba(26, 46, 69, 0.08)',
        'finance-sm': '0 2px 8px rgba(26, 46, 69, 0.05)',
        'finance-md': '0 8px 24px rgba(26, 46, 69, 0.12)',
      },
      borderRadius: {
        'premium': '12px',
        'premium-sm': '8px',
        'premium-lg': '16px',
      },
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '34': '8.5rem',   // 136px
        '38': '9.5rem',   // 152px
        '42': '10.5rem',  // 168px
        '46': '11.5rem',  // 184px
        '50': '12.5rem',  // 200px
      },

      animation: {
        fade: 'fadeInUp 1s both',
        fadeIn: 'fadeIn 1.2s ease-out forwards',
        'fadeIn-delay': 'fadeIn 1.2s ease-out 0.3s forwards',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
    require('flowbite/plugin'),
  ],
  // darkMode: 'class', // Removed for light-only theme
};
