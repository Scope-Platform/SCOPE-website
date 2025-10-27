import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-8 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(20, 184, 166, 0.15) 0%, transparent 50%)`
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(226, 232, 240, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(226, 232, 240, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
          }}
        ></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Animated Logo */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-teal-500/20 blur-3xl rounded-full"></div>
            <svg width="120" height="120" viewBox="0 0 100 100" className="relative">
              <defs>
                <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#14B8A6', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#0D9488', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="48" fill="none" stroke="#F1F5F9" strokeWidth="1" />
              <path d="M 50 2 A 48 48 0 0 1 98 50" fill="none" stroke="url(#heroGradient)" strokeWidth="4" strokeLinecap="round">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 50 50"
                  to="360 50 50"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </path>
              <path d="M 50 14 A 36 36 0 0 1 86 50" fill="none" stroke="url(#heroGradient)" strokeWidth="3" strokeLinecap="round" opacity="0.5">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 50 50"
                  to="360 50 50"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </path>
              <path d="M 50 26 A 24 24 0 0 1 74 50" fill="none" stroke="url(#heroGradient)" strokeWidth="2" strokeLinecap="round" opacity="0.3">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 50 50"
                  to="360 50 50"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
        </div>

        {/* Hero Text */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-slate-900 mb-8 leading-[0.9]">
          Smarter IBNR.
          <br />
          <span className="font-extralight text-slate-600">Minimal Interface.</span>
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">Executive-Ready</span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-teal-500/20 -z-0"></span>
          </span>{' '}
          <span className="font-extralight text-slate-600">Outputs.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
          A modern reserving engine for health plans. Blend methods, stress-test scenarios,
          export governance packs — all without the spreadsheet sprawl.
        </p>

        <button
          onClick={() => scrollToSection('demo')}
          className="group inline-flex items-center gap-3 bg-slate-900 hover:bg-teal-600 text-white px-10 py-5 rounded-full transition-all duration-500 text-lg font-light"
        >
          Schedule Demo
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Subtle Metric */}
        <div className="mt-20 inline-flex items-center gap-8 text-sm font-light text-slate-500">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extralight text-teal-600">60%</span>
            <span>faster monthly close</span>
          </div>
          <div className="w-px h-12 bg-slate-200"></div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extralight text-teal-600">100%</span>
            <span>governance ready</span>
          </div>
        </div>
      </div>
    </section>
  )
}
