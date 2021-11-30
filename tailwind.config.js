module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      pluviophile: '#66E2DC',
      'island-pink': '#FA7453',
      'warm-apricot': '#FFB964',
      'cool-december': '#FCFAF9',
      'coarse-wool': '#191826',
    },
    fontSize: {
      h1: [
        '88px',
        {
          lineHeight: '88px',
          letterSpacing: '-1px',
        },
      ],
      h2: [
        '40px',
        {
          lineHeight: '52px',
        },
      ],
      body: [
        '20px',
        {
          lineHeight: '34px',
        },
      ],
      'body-2': [
        '16px',
        {
          lineHeight: '26px',
        },
      ],
    },
    fontFamily: {
      sans: ['IBM Plex Sans'],
    },
    extend: {
      backgroundImage: {
        mobile: "url('/bg-main-mobile.png')",
        tablet: "url('/bg-main-tablet.png')",
        desktop: "url('/bg-main-desktop.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
