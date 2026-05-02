import { NavLink, useLocation } from 'react-router-dom'
import { projects } from '../data/projects'

const mainLinks = [
  { to: '/', label: 'HOME', end: true },
  { to: '/projects', label: 'WORK' },
  { to: '/about', label: 'ABOUT & CONTACT' },
]

export default function Sidebar() {
  const location = useLocation()
  const isProjects = location.pathname.startsWith('/projects')

  return (
    <aside className="hidden lg:flex flex-col sticky top-20 w-64 bg-bg-surface border-r border-slate-800 h-[calc(100vh-80px)] overflow-y-auto shrink-0">
      <nav className="flex flex-col py-4">
        {mainLinks.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `font-mono text-xs uppercase tracking-widest px-4 py-3 transition-colors ${
                isActive
                  ? 'bg-amber text-bg-base font-bold'
                  : 'text-slate-400 hover:bg-bg-high hover:text-amber'
              }`
            }
          >
            {label}
          </NavLink>
        ))}

        {isProjects && (
          <>
            <div className="px-4 pt-4 pb-1">
              <span className="font-mono text-[10px] text-slate-600 uppercase tracking-widest">// PROJECTS</span>
            </div>
            {projects.map((p) => (
              <NavLink
                key={p.slug}
                to={`/projects/${p.slug}`}
                className={({ isActive }) =>
                  `font-mono text-[10px] uppercase tracking-widest px-6 py-2 transition-colors truncate ${
                    isActive
                      ? 'text-amber border-l-2 border-amber'
                      : 'text-slate-600 hover:text-amber border-l-2 border-transparent'
                  }`
                }
              >
                {p.title}
              </NavLink>
            ))}
          </>
        )}
      </nav>
    </aside>
  )
}
