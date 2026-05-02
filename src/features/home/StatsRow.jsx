import ScrollFadeIn from '../../components/ScrollFadeIn'

const stats = [
  { label: '// YEARS_CODING', value: '3+' },
  { label: '// PROJECTS', value: '6' },
  { label: '// LANGUAGES', value: '4' },
  { label: '// ACTIVE', value: '2025' },
]

export default function StatsRow() {
  return (
    <div className="border-t border-slate-800 py-12 grid grid-cols-2 md:grid-cols-4">
      {stats.map((s, i) => (
        <ScrollFadeIn key={s.label} delay={i * 100}>
          <div className="flex flex-col items-center gap-2 py-4 border-r border-slate-800 last:border-0 even:border-0 md:even:border-r md:last:border-0">
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">{s.label}</span>
            <span className="font-display text-4xl text-amber font-bold">{s.value}</span>
          </div>
        </ScrollFadeIn>
      ))}
    </div>
  )
}
