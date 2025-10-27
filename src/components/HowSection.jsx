export default function HowSection() {
  return (
    <section id="how" className="relative py-40 px-8 bg-slate-900 overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(white 1px, transparent 1px),
              linear-gradient(90deg, white 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="mb-32">
          <div className="flex items-center gap-6 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <span className="text-sm font-medium text-white/40 tracking-wider uppercase">The Process</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white text-center">
            A Minimal Flow with<br />Powerful Guardrails
          </h2>
        </div>

        {/* Steps - Vertical Timeline */}
        <div className="max-w-4xl mx-auto space-y-24">
          {/* Step 1 */}
          <div className="relative pl-20">
            <div className="absolute left-0 top-0 w-12 h-12 rounded-full border-2 border-teal-500 flex items-center justify-center text-teal-500 font-light text-lg bg-slate-900">
              01
            </div>
            <div className="absolute left-6 top-12 w-px h-full bg-gradient-to-b from-teal-500/50 to-transparent"></div>

            <h3 className="text-4xl font-light text-white mb-4">Import & Profile</h3>
            <p className="text-xl text-slate-400 font-light leading-relaxed">
              Upload data; anomalies and outliers flagged automatically. No manual validation needed.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative pl-20">
            <div className="absolute left-0 top-0 w-12 h-12 rounded-full border-2 border-teal-500 flex items-center justify-center text-teal-500 font-light text-lg bg-slate-900">
              02
            </div>
            <div className="absolute left-6 top-12 w-px h-full bg-gradient-to-b from-teal-500/50 to-transparent"></div>

            <h3 className="text-4xl font-light text-white mb-4">Estimate & Blend</h3>
            <p className="text-xl text-slate-400 font-light leading-relaxed">
              Apply actuarial methods with transparent blending logic. Full visibility into every calculation.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative pl-20">
            <div className="absolute left-0 top-0 w-12 h-12 rounded-full border-2 border-teal-500 flex items-center justify-center text-teal-500 font-light text-lg bg-slate-900">
              03
            </div>

            <h3 className="text-4xl font-light text-white mb-4">Stress & Publish</h3>
            <p className="text-xl text-slate-400 font-light leading-relaxed">
              Run PAD, sensitivities, and export governance packs instantly. One click to complete documentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
