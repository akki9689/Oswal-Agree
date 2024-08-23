/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      "open-sans": ["Open Sans", "sans-serif"],
    },

    colors: {
      transparent: "#ffffff00",

      "white-shade": {
        100: "#FFF",
        200: "#F4F4F4",
        
      },

      richblack: {
        100: "#B7B7B7",
        200: "#7A7A7A",
        300: "#515050",
        400: "#54595F",
        500: "#0C0000",

      },
     
      "dark-green": {
        100: "#23A455",
        200: "#007936",
       
      
      },
      "light-green":{
        100: "#6EC1E4",
        200: "#B7DA7A",
        300: "#BAD900",
        

      },
      "yellow":{
        100: "#E8C204",
        200: "#EEA90E",

      },
     

    },

    screens : {

      'dxs' : '300px',
      // => @media (min-width: 300px) { ... }

      'xxs' : '400px',
      // => @media (min-width: 400px) { ... }

      'xsm' : '458px',
      // => @media (min-width: 400px) { ... }

      'xs' : '500px',
      // => @media (min-width: 500px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }


      'md': '768px',
      // => @media (min-width: 768px) { ... }
      
      'smd' : '800px',
         // => @media (min-width: 860px) { ... }

      'mmd': '860px',
        // => @media (min-width: 860px) { ... }

      'xmd' : '930px',
        // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }


       'xlg' : '1110px',
           // => @media (min-width: 1110px) { ... }


      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'xxl': '1390px',
      // => @media (min-width: 1280px) { ... }

      
    },

    extend: {
      
    },
  },
  plugins: [],
};

