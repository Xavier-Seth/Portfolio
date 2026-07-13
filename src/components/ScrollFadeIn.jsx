import { useEffect, useRef, useState } from 'react'

export default function ScrollFadeIn({ children, delay = 0, durationMs = 700, threshold = 0.1, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={`transition-all motion-reduce:transition-none ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 motion-reduce:opacity-100 motion-reduce:translate-y-0'} ${className}`}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: `${durationMs}ms` }}
    >
      {children}
    </div>
  )
}
