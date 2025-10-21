export default function Footer() {
  return (
    <footer className="py-12 px-8 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <svg width="32" height="32" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#14B8A6', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#0D9488', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="48" fill="none" stroke="#E2E8F0" strokeWidth="1.5" opacity="0.3" />
            <path d="M 50 2 A 48 48 0 0 1 98 50" fill="none" stroke="url(#footerGradient)" strokeWidth="3" strokeLinecap="round" />
            <path d="M 50 14 A 36 36 0 0 1 86 50" fill="none" stroke="url(#footerGradient)" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
          </svg>
          <span className="text-lg font-light text-slate-900">SCOPE Reserve Studio</span>
        </div>
        <div className="text-sm font-light text-slate-500">
          © 2025 SCOPE Reserve Studio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
