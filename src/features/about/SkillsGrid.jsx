import TerminalLabel from '../../components/TerminalLabel'
import TechBadge from '../../components/TechBadge'
import ScrollFadeIn from '../../components/ScrollFadeIn'

const categories = [
  {
    id: '01',
    label: 'BACKEND',
    icon: 'dns',
    span: 'md:col-span-2',
    techs: ['Laravel', 'PHP', 'Python', 'Flask', 'MySQL', 'SQLite'],
  },
  {
    id: '02',
    label: 'FRONTEND',
    icon: 'code',
    span: 'md:col-span-1',
    techs: ['Vue.js', 'Inertia.js'],
  },
  {
    id: '03',
    label: 'AI / ML',
    icon: 'psychology',
    span: 'md:col-span-1',
    techs: ['Python', 'Flask', 'NumPy'],
  },
  {
    id: '04',
    label: 'MOBILE',
    icon: 'phone_android',
    span: 'md:col-span-1',
    techs: ['Flutter', 'Dart'],
  },
  {
    id: '05',
    label: 'DEVOPS & INFRA',
    icon: 'cloud',
    span: 'md:col-span-1',
    techs: ['Docker', 'Tauri'],
  },
]

export default function SkillsGrid() {
  return (
    <section className="py-16 border-b border-slate-800">
      <div className="mb-8">
        <TerminalLabel>SKILLS_MANIFEST</TerminalLabel>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <ScrollFadeIn key={cat.id} delay={i * 80} className={cat.span}>
            <div className="group p-6 border border-slate-800 hover:border-amber transition-colors bg-bg-surface h-full">
              <div className="flex items-start justify-between mb-4">
                <span className="material-symbols-outlined text-amber text-3xl">{cat.icon}</span>
                <span className="font-mono text-mono-data text-slate-600 group-hover:text-amber transition-colors">
                  [{cat.id}]
                </span>
              </div>
              <h3 className="font-display text-headline-md uppercase font-bold text-text-base mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((t) => (
                  <TechBadge key={t} tech={t} />
                ))}
              </div>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </section>
  )
}
