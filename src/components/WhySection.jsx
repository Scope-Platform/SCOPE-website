export default function WhySection() {
  return (
    <section id="why" className="relative py-40 px-8 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-32">
          <div className="flex items-center gap-6 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            <span className="text-sm font-medium text-slate-400 tracking-wider uppercase">The Difference</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          </div>

          <h2 className="text-6xl md:text-7xl font-light tracking-tight text-slate-900 text-center mb-6">
            Why SCOPE IBNR<br />Is Different
          </h2>
        </div>

        {/* Benefits - Typography Focused */}
        <div className="space-y-24">
          {/* Benefit 1 */}
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4">
              <div className="relative inline-block mb-6">
                <span className="text-8xl font-extralight text-teal-600/10 absolute -top-8 -left-4">01</span>
                <h3 className="text-4xl font-light text-slate-900 relative z-10">
                  Multi-Method<br />Engine
                </h3>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-2xl font-light text-slate-600 leading-relaxed mb-6">
                Blend lag and projection intelligently with real-time calibration. Switch between methods seamlessly,
                compare side-by-side, and let the engine recommend optimal approaches.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 border border-slate-200 rounded-full text-sm text-slate-600">Lag Development</span>
                <span className="px-4 py-2 border border-slate-200 rounded-full text-sm text-slate-600">Projection Methods</span>
                <span className="px-4 py-2 border border-slate-200 rounded-full text-sm text-slate-600">Auto-Calibration</span>
              </div>
            </div>
          </div>

          {/* Visual Separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

          {/* Benefit 2 */}
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8 order-2 md:order-1">
              <p className="text-2xl font-light text-slate-600 leading-relaxed mb-6">
                Detect lag-0 volatility and cutoff anomalies with precision. Automated alerts flag reporting delays,
                completeness issues, and pattern breaks before they impact your reserve.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-teal-600"></div>
                  <span className="text-slate-600">Lag-0 volatility detection</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-teal-600"></div>
                  <span className="text-slate-600">Cutoff anomaly alerts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-teal-600"></div>
                  <span className="text-slate-600">Reporting delay tracking</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 order-1 md:order-2 md:text-right">
              <div className="relative inline-block mb-6">
                <span className="text-8xl font-extralight text-teal-600/10 absolute -top-8 md:-right-4 -left-4 md:left-auto">02</span>
                <h3 className="text-4xl font-light text-slate-900 relative z-10">
                  Lag<br />Discipline
                </h3>
              </div>
            </div>
          </div>

          {/* Visual Separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

          {/* Benefit 3 */}
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4">
              <div className="relative inline-block mb-6">
                <span className="text-8xl font-extralight text-teal-600/10 absolute -top-8 -left-4">03</span>
                <h3 className="text-4xl font-light text-slate-900 relative z-10">
                  Scenario<br />Studio
                </h3>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-2xl font-light text-slate-600 leading-relaxed mb-8">
                Model stress tests, sensitivity, and PAD in one click. Create unlimited scenarios,
                compare outcomes side-by-side, understand the full range of reserve uncertainty.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 border border-slate-200 rounded-2xl">
                  <div className="text-5xl font-extralight text-teal-600 mb-2">5 min</div>
                  <div className="text-sm text-slate-500 font-light">Stress test setup</div>
                </div>
                <div className="p-6 border border-slate-200 rounded-2xl">
                  <div className="text-5xl font-extralight text-teal-600 mb-2">∞</div>
                  <div className="text-sm text-slate-500 font-light">Scenarios</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

          {/* Benefits 4-6 Compact */}
          <div className="grid md:grid-cols-3 gap-12 pt-12">
            <div>
              <div className="text-6xl font-extralight text-teal-600/10 mb-4">04</div>
              <h3 className="text-2xl font-light text-slate-900 mb-4">Seasonality Intelligence</h3>
              <p className="text-slate-600 leading-relaxed">Adjust for workdays, holidays, and data maturity with built-in calendar intelligence.</p>
            </div>
            <div>
              <div className="text-6xl font-extralight text-teal-600/10 mb-4">05</div>
              <h3 className="text-2xl font-light text-slate-900 mb-4">Governance Ready</h3>
              <p className="text-slate-600 leading-relaxed">ASOP-compliant documentation and override justification tools in every workflow.</p>
            </div>
            <div>
              <div className="text-6xl font-extralight text-teal-600/10 mb-4">06</div>
              <h3 className="text-2xl font-light text-slate-900 mb-4">Executive Outputs</h3>
              <p className="text-slate-600 leading-relaxed">Instant, branded PDF exports for leadership and regulators. Boardroom-ready in 30 seconds.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
