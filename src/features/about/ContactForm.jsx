import { useState, useRef } from 'react'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import TerminalLabel from '../../components/TerminalLabel'

const HCAPTCHA_SITEKEY = '50b2fe65-b00b-4b9e-ad62-3ba471098be2'

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [captchaToken, setCaptchaToken] = useState(null)
  const captchaRef = useRef(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!captchaToken) return
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          'h-captcha-response': captchaToken,
          ...form,
        }),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
        setCaptchaToken(null)
        captchaRef.current?.resetCaptcha()
      } else {
        setStatus('error')
        captchaRef.current?.resetCaptcha()
        setCaptchaToken(null)
      }
    } catch {
      setStatus('error')
      captchaRef.current?.resetCaptcha()
      setCaptchaToken(null)
    }
  }

  const inputClass =
    'w-full bg-bg-darkest border border-slate-800 focus:border-amber outline-none font-mono text-mono-data text-text-base placeholder:text-slate-700 px-4 py-3 transition-colors'

  return (
    <section id="contact" className="py-16">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Info */}
        <div>
          <TerminalLabel className="mb-6">INITIALIZE_CONTACT</TerminalLabel>
          <h2 className="font-display text-headline-md text-text-base uppercase font-bold mb-4">
            LET'S BUILD SOMETHING
          </h2>
          <p className="font-body text-text-muted mb-8">
            Available for freelance projects, OJT opportunities, and full-time roles. Based in the Philippines — open to remote.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:noynay09xavier@gmail.com"
              className="font-mono text-xs text-slate-400 hover:text-amber uppercase tracking-widest transition-colors"
            >
              // noynay09xavier@gmail.com
            </a>
            <a
              href="https://github.com/Xavier-Seth"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-slate-400 hover:text-amber uppercase tracking-widest transition-colors"
            >
              // github.com/Xavier-Seth
            </a>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            required
            placeholder="TYPE_NAME_HERE..."
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="TYPE_EMAIL_HERE..."
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="TYPE_MESSAGE_HERE..."
            value={form.message}
            onChange={handleChange}
            className={inputClass + ' resize-none'}
          />

          <HCaptcha
            ref={captchaRef}
            sitekey={HCAPTCHA_SITEKEY}
            onVerify={setCaptchaToken}
            onExpire={() => setCaptchaToken(null)}
            theme="dark"
            reCaptchaCompat={false}
          />

          {status === 'sent' && (
            <TerminalLabel className="!text-green-400 !border-green-400/40 self-start">
              MESSAGE_SENT
            </TerminalLabel>
          )}
          {status === 'error' && (
            <TerminalLabel className="!text-red-400 !border-red-400/40 self-start">
              ERROR — TRY AGAIN
            </TerminalLabel>
          )}

          <button
            type="submit"
            disabled={status === 'sending' || status === 'sent' || !captchaToken}
            className="font-mono font-bold text-sm uppercase tracking-widest bg-amber text-bg-base px-8 py-4 transition-all duration-200 hover:shadow-[0_0_15px_#ffb000] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'TRANSMITTING...' : 'INITIALIZE PROTOCOL'}
          </button>
        </form>
      </div>
    </section>
  )
}
