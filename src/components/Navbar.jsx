import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'HOME', end: true },
  { to: '/projects', label: 'WORK' },
  { to: '/about', label: 'ABOUT & CONTACT' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center px-6 md:px-12 border-b border-slate-800"
      style={{ background: 'rgba(11,20,28,0.85)', backdropFilter: 'blur(24px)' }}>
      <div className="flex items-center gap-2 flex-1">
        <span className="material-symbols-outlined text-amber text-xl select-none">terminal</span>
        <span className="font-mono text-xs tracking-widest text-amber uppercase">XAVIER-SETH.DEV</span>
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `font-mono text-xs uppercase tracking-widest transition-all duration-200 pb-1 ${
                isActive
                  ? 'text-amber border-b border-amber text-glow-amber'
                  : 'text-slate-500 hover:text-amber hover:shadow-[0_0_8px_#ffb000]'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-amber"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-20 left-0 right-0 bg-bg-surface border-b border-slate-800 flex flex-col p-6 gap-4 md:hidden">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-mono text-xs uppercase tracking-widest ${
                  isActive ? 'text-amber' : 'text-slate-400'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
