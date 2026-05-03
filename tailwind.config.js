/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono:    ['"JetBrains Mono"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
        body:    ['Outfit', 'sans-serif'],
      },
      colors: {
        bg:    '#080c14',
        bg2:   '#0d1220',
        sur:   '#111827',
        sur2:  '#161f30',
        cyan:  '#63d2ff',
        lime:  '#a8ff57',
        org:   '#ff7b3d',
        pink:  '#ff4dab',
        muted: '#5a6a85',
      },
      boxShadow: {
        cyan:     '0 0 30px rgba(99,210,255,0.45), 0 0 60px rgba(99,210,255,0.15)',
        'cyan-sm':'0 0 16px rgba(99,210,255,0.25)',
      },
    },
  },
  plugins: [],
};
