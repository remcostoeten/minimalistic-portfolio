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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
        'body': 'var(--body)',
        'grid': '#E4E5E4',
        'card-inner': 'var(--accent)',
        'card-inner-dark': '#111',
        'body-dark': 'var(--darkmain)',
        'body-dark-accent': 'var(--mainaccentn)',
        'dark-alt': 'var(--accent)',
      },
      width: {
        '198': '792px'
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("daisyui"),
    nextui({
      prefix: "nextui",
      addCommonColors: false,
      defaultTheme: "dark",
      defaultExtendTheme: "dark",
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
      },
    }),
  ],
};