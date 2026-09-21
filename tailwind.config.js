/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        void: '#0a0a0c',
        surface: '#141417',
        'surface-2': '#1c1c21',
        signal: '#ff5200',
        ember: '#b23300',
        bone: '#f4f2ef',
        ash: '#9a9aa2',
        dust: '#5a5a62',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        display: ['Archivo', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        label: '0.28em',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'drift': 'drift 14s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '100%': { transform: 'translate3d(-2%, 1%, 0)' },
        },
      },
    },
  },
  plugins: [],
}
