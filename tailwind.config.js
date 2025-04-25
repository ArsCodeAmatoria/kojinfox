/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1400px",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: '#d97706', // amber-600
          hover: '#b45309',
          light: '#fbbf24',
          dark: '#92400e',
        },
        secondary: {
          DEFAULT: '#22c55e', // emerald-500
          hover: '#16a34a',
          light: '#4ade80',
          dark: '#15803d',
        },
        background: {
          DEFAULT: '#0e0e0e', // black
          light: '#1f1f1f',
          dark: '#000000',
          card: '#1a1a1a',
        },
        text: {
          DEFAULT: '#e5e7eb', // zinc-200
          muted: '#9ca3af',
          dark: '#d1d5db',
          light: '#f3f4f6',
        },
        highlight: {
          DEFAULT: '#fde68a', // amber-200
          hover: '#fcd34d',
        },
      },
    },
  },
  plugins: [],
}; 