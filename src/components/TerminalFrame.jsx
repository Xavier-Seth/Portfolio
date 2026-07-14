export default function TerminalFrame({ src, path, caption, orientation = 'landscape' }) {
  const portrait = orientation === 'portrait'
  const alt = `${caption.split(' — ')[0]} screenshot`

  return (
    <figure>
      <div className="border border-slate-800 bg-bg-surface">
        <div
          className={`flex items-center border-b border-slate-800 ${
            portrait ? 'gap-1.5 px-2 py-1.5' : 'gap-3 px-4 py-2.5'
          }`}
        >
          <span className={`flex ${portrait ? 'gap-1' : 'gap-1.5'}`} aria-hidden="true">
            <span className={`rounded-full bg-slate-600 ${portrait ? 'w-1.5 h-1.5' : 'w-2 h-2'}`} />
            <span className={`rounded-full bg-slate-600 ${portrait ? 'w-1.5 h-1.5' : 'w-2 h-2'}`} />
            <span className={`rounded-full bg-slate-600 ${portrait ? 'w-1.5 h-1.5' : 'w-2 h-2'}`} />
          </span>
          <span
            className={`font-mono text-slate-500 tracking-wide ${
              portrait ? 'text-[10px] truncate' : 'text-xs'
            }`}
          >
            {path}
          </span>
        </div>
        <img
          src={src}
          alt={alt}
          width={portrait ? 554 : 1365}
          height={portrait ? 1200 : 600}
          loading="lazy"
          decoding="async"
          className="block w-full h-auto rounded-b-sm"
        />
      </div>
      <figcaption
        className={`font-mono text-slate-500 leading-relaxed ${
          portrait ? 'mt-2 text-[10px]' : 'mt-3 text-xs'
        }`}
      >
        // {caption}
      </figcaption>
    </figure>
  )
}
