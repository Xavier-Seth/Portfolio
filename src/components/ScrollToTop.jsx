import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    // Back/Forward: let the browser's native scroll restoration handle it.
    if (navigationType === 'POP') return
    // Anchor URLs: let the browser scroll to the target element instead.
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return null
}
