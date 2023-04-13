/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      green: {
        900: '#14532D',
        800: '#166534',
        700: '#15803D',
        600: '#16A34A',
        500: '#22C55E',
        400: '#4ADE80',
        300: '#86EFAC',
        200: '#BBF7D0',
        100: '#DCFCE7',
        000: '#F0FDF4',
      },
      gray: {
        900: '#111827',
        800: '#262626',
        700: '#404040',
        600: '#525252',
        500: '#737373',
        400: '#A3A3A3',
        300: '#D4D4D4',
        200: '#E5E5E5',
        100: '#F5F5F5',
      },
      red: {
        900: '#7F1D1D',
        800: '#991B1B',
        700: '#B91C1C',
        600: '#DC2626',
        500: '#EF4444',
        400: '#F87171',
        300: '#FCA5A5',
        200: '#FECACA',
        100: '#FEE2E2',
        50: '#FEF2F2',
      },
      white: '#FFFFFF',
      greenRGB: 'rgba(22, 163, 74, 0.2)',
      blackRGB: 'rgba(0, 0, 0, 0.6)',
    },
    boxShadow: {
      '3xl': '0px 0px 4px 1px rgba(255, 255, 255, 0.4)',
      shadow1: '0px, 0px rgba(22, 163, 74, 0.4)',
    },

    backgroundImage: {
      gradient1: 'linear-gradient(90deg, #16A34A 0%, rgba(22, 163, 74, 0) 100%)',
      gradient2: ' linear-gradient(90deg, #16A34A 0%, #262626 142.89%)',
      gradient3:
        ' linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),linear-gradient(0deg, rgba(22, 163, 74, 0.2), rgba(22, 163, 74, 0.2))',
      gradient4: 'linear-gradient(90deg, #16A34A 0%, #FFFFFF 69.27%)',
    },

    extend: {},
  },
  plugins: [],
};
