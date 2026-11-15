/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#F8F1E7',
          200: '#F0E5D4',
          300: '#E6D5BE',
          DEFAULT: '#F8F1E7',
        },
        terracotta: {
          light: '#DE886D',
          DEFAULT: '#C66B4E',
          dark: '#A65338',
          deep: '#893F29',
        },
        sage: {
          light: '#A0B296',
          DEFAULT: '#829477',
          dark: '#67785C',
          deep: '#4E5C45',
        },
        dustyRose: {
          light: '#E5B2B3',
          DEFAULT: '#D89A9B',
          dark: '#BD7E80',
        },
        lavender: {
          light: '#BAA7D0',
          DEFAULT: '#A18BB9',
          dark: '#85709C',
        },
        amberGold: {
          light: '#DC9F51',
          DEFAULT: '#C68B3E',
          dark: '#A8712B',
        },
        burgundy: {
          light: '#8E4F57',
          DEFAULT: '#713C43',
          dark: '#54292F',
        },
        warmSand: {
          light: '#F2DFBE',
          DEFAULT: '#E8CFA8',
          dark: '#CFB287',
        },
        espresso: {
          light: '#534239',
          DEFAULT: '#382B24',
          dark: '#241B16',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Italiana"', '"Cormorant Garamond"', 'serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(56, 43, 36, 0.08)',
        'soft-lg': '0 20px 40px -15px rgba(56, 43, 36, 0.12)',
        'luxury': '0 25px 50px -12px rgba(56, 43, 36, 0.18)',
        'glow-terracotta': '0 0 25px rgba(198, 107, 78, 0.3)',
        'glow-amber': '0 0 25px rgba(198, 139, 62, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
