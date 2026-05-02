import { useNavigate, useLocation } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleEmailClick = (e) => {
    e.preventDefault()
    const scrollToContact = () => {
      const el = document.getElementById('contact')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    if (location.pathname === '/about') {
      scrollToContact()
    } else {
      navigate('/about')
      // scroll after navigation + paint
      setTimeout(scrollToContact, 150)
    }
  }

  return (
    <footer className="bg-bg-darkest border-t border-slate-800 py-12 px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[10px] tracking-widest text-amber uppercase">XAVIER-SETH.DEV</span>
          <span className="font-mono text-[10px] text-slate-600">© 2025 Xavier-Seth C. Noynay</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
          <span className="font-mono text-[10px] text-slate-500 tracking-widest">// AVAILABLE_FOR_WORK</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Xavier-Seth"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-widest text-slate-600 hover:text-amber uppercase transition-colors"
          >
            GITHUB
          </a>
          <a
            href="#contact"
            onClick={handleEmailClick}
            className="font-mono text-[10px] tracking-widest text-slate-600 hover:text-amber uppercase transition-colors cursor-pointer"
          >
            EMAIL
          </a>
        </div>
      </div>
    </footer>
  )
}
