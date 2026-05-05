import { useState } from 'react'
import { Link } from 'react-router-dom'
import TypewriterText from '../../components/TypewriterText'
import CursorBlink from '../../components/CursorBlink'
import TerminalLabel from '../../components/TerminalLabel'
import TechBadge from '../../components/TechBadge'

const HERO_TEXT = 'CRAFTING DIGITAL INFRASTRUCTURE FROM THE PHILIPPINES'
const ACCENT_WORD = 'PHILIPPINES'

const STACK_CHIPS = ['PHP', 'Vue.js', 'Flutter', 'Python']

export default function HeroSection() {
  const [cursorVisible, setCursorVisible] = useState(false)
  const { displayed, done } = TypewriterText({
    text: HERO_TEXT,
    speed: 35,
    onComplete: () => setCursorVisible(true),
  })

  const accentStart = HERO_TEXT.indexOf(ACCENT_WORD)
  const before = displayed.slice(0, accentStart)
  const accent = displayed.slice(accentStart, accentStart + ACCENT_WORD.length)
  const after = displayed.slice(accentStart + ACCENT_WORD.length)

  return (
    <section className="min-h-[751px] flex items-center border-l border-slate-800 pl-6 md:pl-12 pr-6 md:pr-0 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-overlay opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        <div className="mb-6">
          <TerminalLabel>USER: XAVIER-SETH</TerminalLabel>
        </div>

        <h1 className="font-display text-5xl md:text-[72px] leading-[1.1] tracking-[-0.04em] font-black uppercase text-text-base mb-6 min-h-[1.1em]">
          {displayed.length <= accentStart ? (
            <>{displayed}</>
          ) : (
            <>
              {before}
              <span className="text-amber">{accent}</span>
              {after}
            </>
          )}
          {(done ? cursorVisible : true) && !done && <CursorBlink />}
          {done && cursorVisible && <CursorBlink />}
        </h1>

        <p className="font-body text-xl text-text-muted mb-8 max-w-2xl">
          Aspiring Web and Software Developer from the Philippines, eager to learn, build, and grow with every project.
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {STACK_CHIPS.map((t) => (
            <TechBadge key={t} tech={t} />
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/projects"
            className="font-mono font-bold text-sm uppercase tracking-widest bg-amber text-bg-base px-8 py-4 transition-all duration-200 hover:shadow-[0_0_15px_#ffb000]"
          >
            VIEW PROJECTS →
          </Link>
          <a
            href="#"
            className="font-mono text-sm uppercase tracking-widest border border-slate-700 text-text-muted px-8 py-4 transition-all duration-200 hover:border-amber hover:text-amber"
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </section>
  )
}
