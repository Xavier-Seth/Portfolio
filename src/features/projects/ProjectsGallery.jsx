import TerminalLabel from '../../components/TerminalLabel'
import ProjectCard from './ProjectCard'
import { projects } from '../../data/projects'

export default function ProjectsGallery() {
  return (
    <main className="flex-1 py-12 px-6 md:px-12">
      <div className="mb-10">
        <TerminalLabel>ALL_PROJECTS</TerminalLabel>
        <h1 className="font-display text-headline-md text-text-base uppercase mt-4 font-bold">
          WORK ARCHIVE
        </h1>
        <p className="font-body text-text-muted mt-2 max-w-xl">
          6 public projects spanning web apps, desktop tools, ML APIs, and mobile.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </main>
  )
}
