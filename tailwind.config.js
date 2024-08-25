/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'open-sans': ['Open Sans', 'sans-serif']
    },

    colors: {
      transparent: '#ffffff00',
      lightGray: '#f0f0f0', // Center lighter shade
      darkGray: '#d1d1d1', // Darker shade on the sides

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
     "orange":{
      600:"#EEA90E",
     },

      yellow: {
        100: '#E8C204',
        200: '#EEA90E'
      }
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
          '50%': { transform: 'translateY(-8px)' }
        }
      },
      animation: {
        float: 'float 0.7s ease-in '
      }
    }
  },
  plugins: []
}
