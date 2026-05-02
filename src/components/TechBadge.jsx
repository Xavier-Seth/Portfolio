const BADGE_COLORS = {
  'Laravel':    { bg: '#ff2d20', text: '#0b141c' },
  'Vue.js':     { bg: '#22c55e', text: '#0b141c' },
  'Flutter':    { bg: '#3b82f6', text: '#0b141c' },
  'Python':     { bg: '#ffed4e', text: '#0b141c' },
  'PHP':        { bg: '#ea580c', text: '#0b141c' },
  'Flask':      { bg: '#313a43', text: '#dae4ef' },
  'Docker':     { bg: '#2496ed', text: '#0b141c' },
  'Tauri':      { bg: '#212b33', text: '#ffb000' },
  'SQLite':     { bg: '#172128', text: '#ffd597' },
  'Dart':       { bg: '#00b4ab', text: '#0b141c' },
  'MySQL':      { bg: '#4479a1', text: '#0b141c' },
  'NumPy':      { bg: '#4dabcf', text: '#0b141c' },
  'Inertia.js': { bg: '#9553e9', text: '#ffffff' },
}

export default function TechBadge({ tech }) {
  const colors = BADGE_COLORS[tech] || null

  if (colors) {
    return (
      <span
        className="inline-block font-mono text-[10px] font-semibold tracking-widest uppercase px-2 py-1 rounded-sm"
        style={{ backgroundColor: colors.bg, color: colors.text }}
      >
        {tech}
      </span>
    )
  }

  return (
    <span className="inline-block font-mono text-[10px] font-semibold tracking-widest uppercase px-2 py-1 rounded-sm bg-bg-highest text-amber border border-amber/30">
      {tech}
    </span>
  )
}
