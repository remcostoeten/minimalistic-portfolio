const { nextui } = require("@nextui-org/react");

module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      padding: {
        'card-outer': '16px',
        'card-inner': '14px',
        'default': '24px',
      },
      borderRadius: {
        'card-inner': '8px',
        'card-outer': '12px',
        '16': '16px',
      },
      borderColor: {
        'active': '#B3775F',
        'dark': '#252121ee',
      },
      fontSize: {
        '16': '16px',
        '18': "18px",
        '20': '20px',
        '22 ': '22px',
        '28': '28px',
      },
      gap: {
        xs: '8px',
        s: '12px',
        m: '16px',
        l: '24px',
      },
      lineHeight: {
        '25': '25px',
      },
      color: {
        'darkalt': '#7d7d7d',
      },
      backgroundColor: {
        'body': '#020000',
        'grid': '#E4E5E4',
        'card-inner': '#161616',
        'card-inner-dark': '#111',
        'body-dark': 'var(--darkmain)',
        'body-dark-accent': 'var(--mainaccentn)',
        'dark-alt': '#0d0d0d',
      },
      width: {
        '198': '792px'
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    nextui({
      prefix: "nextui",
      addCommonColors: false,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {},
      themes: {
        light: {
          layout: {},
          colors: {},
        },
        dark: {
          layout: {},
          colors: {},
        },
        // ... custom themes
      },
    }),
  ],
};