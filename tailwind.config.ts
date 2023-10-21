/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
        default: '24px',
      },
      gap: {
        xs: '8px',
        s: '12px',
        m: '16px',
        l: '24px',
      },
      backgroundColor: {
        'black': '#111',
        'grid': '#E4E5E4',
        'card-inner': '#E4E5E4',
      },
    },
    plugins: [require("tailwindcss-animate")],
  }
}