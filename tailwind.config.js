/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'open-sans': ['Open Sans', 'sans-serif'],
      hind: ['Hind Guntur', 'sans-serif'],
    },

    colors: {
      transparent: '#ffffff00',
      lightGray: '#f0f0f0', // Center lighter shade
      darkGray: '#d1d1d1', // Darker shade on the sides
      black: '#000000',
      white: '#FFFFFF',
      gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },
      red: {
        50: '#FEF2F2',
        100: '#FEE2E2',
        200: '#FECACA',
        300: '#FCA5A5',
        400: '#F87171',
        500: '#EF4444',
        600: '#DC2626',
        700: '#B91C1C',
        800: '#991B1B',
        900: '#7F1D1D',
      },
      yellow: {
        50: '#FFFBEB',
        100: '#FEF3C7',
        200: '#FDE68A',
        300: '#FCD34D',
        400: '#FBBF24',
        500: '#F59E0B',
        600: '#D97706',
        700: '#B45309',
        800: '#92400E',
        900: '#78350F',
      },
      green: {
        50: '#ECFDF5',
        100: '#D1FAE5',
        200: '#A7F3D0',
        300: '#6EE7B7',
        400: '#34D399',
        500: '#10B981',
        600: '#059669',
        700: '#047857',
        800: '#065F46',
        900: '#064E3B',
      },
      'white-shade': {
        100: '#FFF',
        200: '#F4F4F4'
      },

      richblack: {
        50: '#B6C9DB',
        100: '#B7B7B7',
        200: '#7A7A7A',
        300: '#515050',
        400: '#54595F',
        500: '#0C0000'
      },
      blue: {
        50: '#ebf8ff',  // Lightest
        100: '#bee3f8',
        200: '#90cdf4',
        300: '#63b3ed',
        400: '#4299e1',
        500: '#3182ce', // Default
        600: '#2b6cb0',
        700: '#2c5282',
        800: '#2a4365',
        900: '#1a365d', // Darkest
      },
      'dark-green': {
        100: '#23A455',
        200: '#007936'
      },
      'light-green': {
        100: '#6EC1E4',
        200: '#B7DA7A',
        300: '#BAD900',
        400: '#C4DDBF'
      },
      "orange": {
        600: "#EEA90E",
      },

    
    },

    screens: {
      dxs: '300px',
      // => @media (min-width: 300px) { ... }

      xxs: '400px',
      // => @media (min-width: 400px) { ... }

      xsm: '458px',
      // => @media (min-width: 400px) { ... }

      xs: '500px',
      // => @media (min-width: 500px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      smd: '800px',
      // => @media (min-width: 860px) { ... }

      mmd: '860px',
      // => @media (min-width: 860px) { ... }

      xmd: '930px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xlg: '1110px',
      // => @media (min-width: 1110px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      xxl: '1390px'
      // => @media (min-width: 1280px) { ... }
    },

    extend: {

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 2s ease-in-out infinite',
      },
    }
  },
  plugins: []
}
