import TerminalLabel from '../../components/TerminalLabel'

export default function AboutSection() {
  return (
    <section className="py-16 border-b border-slate-800">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-8">
          <TerminalLabel className="mb-6">SYSTEM_FUNCTION_DATA</TerminalLabel>
          <h2 className="font-display text-headline-md text-text-base uppercase font-bold mb-6">
            ENGINEERING DIGITAL RESILIENCE
          </h2>
          <div className="flex flex-col gap-4 font-body text-base text-text-muted leading-relaxed">
            <p>
              BSIT student at Leyte Normal University, Philippines.
              I build real systems for real organizations, document management
              platforms, desktop tools, mobile apps, and ML-powered APIs for
              Philippine government institutions and schools.
            </p>
            <p>
              Many of my projects began as coursework or OJT requirements and evolved
              into deployed, usable software. I've worked across different stages of
              development, from building systems with minimal tooling to leveraging
              modern AI-assisted workflows, always making sure I understand the
              structure, logic, and decisions behind what I ship.
            </p>
            <p>
              I'm early in my career, always learning and adapting. I'm transparent
              about using AI as part of my workflow — to me it's just another tool,
              and knowing how to use it effectively is itself a skill worth having.
            </p>
          </div>
          <div className="mt-8 flex gap-4">
            <a
              href="#"
              className="font-mono font-bold text-sm uppercase tracking-widest border border-amber text-amber px-6 py-3 transition-all duration-200 hover:bg-amber hover:text-bg-base hover:shadow-[0_0_15px_#ffb000]"
            >
              DOWNLOAD CV
            </a>
            <a
              href="https://github.com/Xavier-Seth"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm uppercase tracking-widest border border-slate-700 text-slate-400 px-6 py-3 transition-all hover:border-amber hover:text-amber"
            >
              GITHUB →
            </a>
          </div>
        </div>

        <div className="md:col-span-4 flex items-start">
          <div className="w-full aspect-square bg-bg-high border border-slate-800 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-overlay opacity-30" />
            <div className="relative z-10 flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-amber text-6xl">person</span>
              <span className="font-mono text-[10px] text-slate-600 uppercase tracking-widest">// PROFILE_PHOTO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
