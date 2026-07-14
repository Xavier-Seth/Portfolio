import { Link } from 'react-router-dom'
import TerminalLabel from '../../components/TerminalLabel'
import ProjectCard from '../projects/ProjectCard'
import { projects } from '../../data/projects'

const FEATURED_SLUGS = ['qms-iso-system', 'docunet', 'juls-fried-chicken']

export default function SelectedWork() {
  const [featured, ...side] = FEATURED_SLUGS.map((slug) =>
    projects.find((p) => p.slug === slug)
  ).filter(Boolean)

  return (
    <section className="py-16 px-6 md:px-0">
      <div className="mb-8">
        <TerminalLabel>SELECTED_WORK_V2.0</TerminalLabel>
      </div>

      <div className="grid md:grid-cols-12 gap-4">
        <div className="md:col-span-8">
          <ProjectCard project={featured} featured />
        </div>
        <div className="md:col-span-4 flex flex-col gap-4">
          {side.map((p) => (
            <div key={p.id} className="flex-1">
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <Link
          to="/projects"
          className="font-mono text-xs uppercase tracking-widest text-slate-500 hover:text-amber transition-colors"
        >
          VIEW ALL PROJECTS →
        </Link>
      </div>
    </section>
  )
}
