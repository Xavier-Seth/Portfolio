export default function TerminalFrame({ src, path, caption }) {
  const alt = `${caption.split(' — ')[0]} screenshot`

  return (
    <figure>
      <div className="border border-slate-800 bg-bg-surface">
        <div className="flex items-center gap-3 px-4 py-2.5 border-b border-slate-800">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="w-2 h-2 rounded-full bg-slate-600" />
            <span className="w-2 h-2 rounded-full bg-slate-600" />
            <span className="w-2 h-2 rounded-full bg-slate-600" />
          </span>
          <span className="font-mono text-xs text-slate-500 tracking-wide">{path}</span>
        </div>
        <img
          src={src}
          alt={alt}
          width={1365}
          height={600}
          loading="lazy"
          decoding="async"
          className="block w-full h-auto rounded-b-sm"
        />
      </div>
      <figcaption className="mt-3 font-mono text-xs text-slate-500 leading-relaxed">
        // {caption}
      </figcaption>
    </figure>
  )
}
