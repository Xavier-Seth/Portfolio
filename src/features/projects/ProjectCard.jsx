import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PlaceholderBlock from '../../components/PlaceholderBlock'
import TerminalLabel from '../../components/TerminalLabel'
import TechBadge from '../../components/TechBadge'
import ScrollFadeIn from '../../components/ScrollFadeIn'

export default function ProjectCard({ project, featured = false }) {
  return (
    <ScrollFadeIn>
      <div className="group bg-bg-surface border border-slate-800 hover:border-amber transition-colors duration-300 h-full flex flex-col">
        <div className={`overflow-hidden border-b border-slate-800 ${featured ? 'h-80' : 'h-64'}`}>
          <PlaceholderBlock
            color={project.placeholderColor}
            className="w-full h-full group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        <div className="p-6 flex flex-col flex-1 gap-4">
          <TerminalLabel>{project.type.toUpperCase()}</TerminalLabel>

          <div>
            <h3 className="font-display text-2xl text-amber uppercase font-bold tracking-tight">
              {project.title}
            </h3>
            <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mt-1">
              {project.subtitle}
            </p>
          </div>

          <p className="font-body text-sm text-text-muted line-clamp-2">{project.description}</p>

          <ul className="flex flex-col gap-1 flex-1">
            {project.highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-amber mt-1.5 shrink-0" />
                <span className="font-mono text-[10px] text-slate-400 leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>

          <motion.div
            className="flex flex-wrap gap-1.5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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

          <div className="flex items-center gap-4 pt-2 border-t border-slate-800">
            <Link
              to={`/projects/${project.slug}`}
              className="font-mono text-xs text-amber uppercase tracking-widest hover:text-glow-amber transition-all"
            >
              CASE STUDY →
            </Link>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex items-center gap-1 font-mono text-[10px] text-slate-500 uppercase tracking-widest border border-slate-700 px-2 py-1 hover:border-amber hover:text-amber transition-colors"
              aria-label="GitHub"
            >
              <span className="material-symbols-outlined text-sm">code</span>
              GITHUB
            </a>
          </div>
        </div>
      </div>
    </ScrollFadeIn>
  )
}
