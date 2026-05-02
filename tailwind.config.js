/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-base':    '#0b141c',
        'bg-surface': '#172128',
        'bg-low':     '#131d24',
        'bg-high':    '#212b33',
        'bg-highest': '#2c363e',
        'bg-bright':  '#313a43',
        'bg-darkest': '#060f17',
        amber: {
          DEFAULT: '#ffb000',
          light:   '#ffd597',
          pale:    '#ffddaf',
          dim:     '#ffba43',
        },
        'text-base':  '#dae4ef',
        'text-muted': '#d7c4ac',
        'text-dim':   '#c2c7ce',
      },
      fontFamily: {
        display: ['Epilogue', 'sans-serif'],
        body:    ['Work Sans', 'sans-serif'],
        mono:    ['IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        'display-lg':  ['72px', { lineHeight: '1.1', letterSpacing: '-0.04em', fontWeight: '700' }],
        'headline-md': ['32px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        'body-main':   ['16px', { lineHeight: '1.6' }],
        'mono-label':  ['12px', { lineHeight: '1.4', letterSpacing: '0.05em' }],
        'mono-data':   ['14px', { lineHeight: '1.5' }],
        'mono-xs':     ['10px', { lineHeight: '1.4', letterSpacing: '0.05em' }],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
