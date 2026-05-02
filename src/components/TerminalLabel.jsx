export default function TerminalLabel({ children, className = '' }) {
  return (
    <span className={`inline-block font-mono text-mono-label tracking-widest uppercase text-amber border border-amber/40 px-2 py-0.5 ${className}`}>
      [ {children} ]
    </span>
  )
}
