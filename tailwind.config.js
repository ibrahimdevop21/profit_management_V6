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
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        profit: {
          navy: '#0E1422',
          gold: '#C9A227',
          light: '#F7F7F7',
          text: '#1C1C1C',
          bg: '#ffffff',
          border: '#e5e5e5',
        },
      },
      fontFamily: {
        sans: ['InterVariable', 'var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['Montserrat', 'var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        body: ['InterVariable', 'var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
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
