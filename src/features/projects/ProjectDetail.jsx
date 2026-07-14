import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PlaceholderBlock from '../../components/PlaceholderBlock'
import TerminalLabel from '../../components/TerminalLabel'
import TechBadge from '../../components/TechBadge'
import TerminalFrame from '../../components/TerminalFrame'
import ScrollFadeIn from '../../components/ScrollFadeIn'
import { projects } from '../../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/projects" replace />

  return (
    <main className="flex-1 pb-16">
      {/* Hero */}
      <div className="relative h-80">
        <PlaceholderBlock color={project.placeholderColor} className="w-full h-full" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-bg-base/90 to-transparent">
          <TerminalLabel className="mb-3">{project.type.toUpperCase()}</TerminalLabel>
          <h1 className="font-display text-5xl text-amber uppercase font-black tracking-tight">
            {project.title}
          </h1>
          <p className="font-mono text-xs text-slate-400 uppercase tracking-widest mt-1">
            {project.subtitle}
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 pt-10 max-w-4xl">
        <Link
          to="/projects"
          className="font-mono text-xs text-slate-500 hover:text-amber uppercase tracking-widest transition-colors mb-8 inline-block"
        >
          ← BACK TO PROJECTS
        </Link>

        {/* Specs grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 border border-slate-800 p-6 bg-bg-surface">
          {[
            { key: 'FRAMEWORK', val: project.stack[0] },
            { key: 'TYPE', val: project.type },
            { key: 'YEAR', val: project.year },
            { key: 'STATUS', val: project.isPrivate ? 'PRIVATE' : 'PUBLIC' },
          ].map(({ key, val }) => (
            <div key={key}>
              <span className="font-mono text-[10px] text-slate-600 uppercase tracking-widest block mb-1">
                // {key}
              </span>
              <span className="font-mono text-sm text-text-base">{val}</span>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="mb-10">
          <TerminalLabel className="mb-4">TOOLS & MANIFEST</TerminalLabel>
          <motion.div
            className="flex flex-wrap gap-2 mt-4"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.05 } }, hidden: {} }}
          >
            {project.stack.map((tech) => (
              <motion.div
                key={tech}
                variants={{ hidden: { opacity: 0, y: 4 }, visible: { opacity: 1, y: 0 } }}
              >
                <TechBadge tech={tech} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Description */}
        <div className="mb-10">
          <p className="font-body text-base text-text-muted leading-relaxed">{project.description}</p>
        </div>

        {/* Highlights */}
        <div className="mb-10">
          <TerminalLabel className="mb-4">HIGHLIGHTS</TerminalLabel>
          <ul className="flex flex-col gap-3 mt-4">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span className="font-mono text-amber text-xs mt-0.5 shrink-0">&gt;</span>
                <span className="font-mono text-sm text-slate-300">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Screens */}
        {project.screenshots?.length > 0 && (
          <div className="mb-10">
            <TerminalLabel className="mb-4">SCREENS</TerminalLabel>
            <div
              className={
                project.screenshots.every((s) => s.orientation === 'portrait')
                  ? 'grid grid-cols-2 md:grid-cols-4 gap-4 mt-4'
                  : 'flex flex-col gap-12 mt-4'
              }
            >
              {project.screenshots.map((shot, i) => (
                <ScrollFadeIn key={shot.src} delay={i * 80} durationMs={450} threshold={0.15} className="ease-out">
                  <TerminalFrame {...shot} />
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex flex-wrap items-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono font-bold text-sm uppercase tracking-widest bg-amber text-bg-base px-6 py-3 transition-all duration-200 hover:shadow-[0_0_15px_#ffb000]"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              LIVE SITE →
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono font-bold text-sm uppercase tracking-widest border border-amber text-amber px-6 py-3 hover:bg-amber hover:text-bg-base transition-all duration-200 hover:shadow-[0_0_15px_#ffb000]"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              VIEW SOURCE →
            </a>
          )}
        </div>
        {project.isPrivate && project.privateNote && (
          <p className="mt-6 font-mono text-xs text-slate-500 tracking-wide leading-relaxed max-w-xl">
            // {project.privateNote}
          </p>
        )}
      </div>
    </main>
  )
}
