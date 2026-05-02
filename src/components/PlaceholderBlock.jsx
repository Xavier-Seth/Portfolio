export default function PlaceholderBlock({ color = '#ffb000', className = '' }) {
  const isAmber = color === '#ffb000'
  const gradient = isAmber
    ? `linear-gradient(135deg, ${color}22 0%, ${color}44 40%, #172128 100%)`
    : `linear-gradient(135deg, #172128 0%, ${color} 50%, #0b141c 100%)`

  return (
    <div
      className={`relative overflow-hidden bg-grid-overlay ${className}`}
      style={{ background: gradient }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 40%, ${color}66 0%, transparent 60%)`,
        }}
      />
      <div className="absolute bottom-4 left-4 font-mono text-[10px] tracking-widest text-amber/40 uppercase">
        // PROJECT_PREVIEW
      </div>
    </div>
  )
}
