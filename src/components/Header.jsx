import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleDemoClick = () => {
    if (location.pathname === '/') {
      scrollToSection('demo')
    } else {
      window.location.hash = '#/'
      setTimeout(() => scrollToSection('demo'), 100)
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrolled ? 'bg-white/70 backdrop-blur-2xl border-b border-slate-200/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative w-10 h-10">
              <svg width="40" height="40" viewBox="0 0 100 100" className="opacity-90">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#14B8A6', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#0D9488', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="48" fill="none" stroke="#E2E8F0" strokeWidth="1.5" opacity="0.3" />
                <path d="M 50 2 A 48 48 0 0 1 98 50" fill="none" stroke="url(#logoGradient)" strokeWidth="3" strokeLinecap="round" />
                <path d="M 50 14 A 36 36 0 0 1 86 50" fill="none" stroke="url(#logoGradient)" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
              </svg>
            </div>
            <span className="text-2xl font-light tracking-tight text-slate-900 group-hover:text-teal-600 transition-colors duration-300">SCOPE</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {/* Team link temporarily hidden - can be re-enabled later */}
            {/* <Link
              to="/team"
              className="text-sm font-medium text-slate-900 hover:text-teal-600 transition-colors duration-300"
            >
              Team
            </Link> */}
            <button
              onClick={handleDemoClick}
              className="text-sm font-medium text-slate-900 hover:text-teal-600 transition-colors duration-300"
            >
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
