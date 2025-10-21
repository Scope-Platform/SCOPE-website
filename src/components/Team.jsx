export default function Team() {
  const teamMembers = [
    {
      name: 'Roy Machamire',
      title: 'FSA, Actuarial Lead',
      description: "Fellow of the Society of Actuaries with deep expertise in medical insurance reserving and claims analytics. Roy's background in actuarial consulting ensures SCOPE meets the rigorous standards health insurers and TPAs demand.",
      linkedin: 'https://www.linkedin.com/in/roy-machamire-fsa/',
      color: 'teal'
    },
    {
      name: 'Tye Rubin',
      title: 'Medical Economics Analyst',
      description: "Expert in medical insurance data and healthcare economics with hands-on experience analyzing complex claim patterns. Tye's deep understanding of medical cost drivers shapes SCOPE's analytical precision.",
      linkedin: 'https://www.linkedin.com/in/tye-rubin-4725a01aa/',
      color: 'slate'
    },
    {
      name: 'Adam McAvoy',
      title: 'Software Engineer',
      description: 'Proven track record building enterprise platforms that power mission-critical operations at industry-leading companies. Adam architects SCOPE\'s infrastructure for the reliability and scale actuaries require.',
      linkedin: 'https://www.linkedin.com/in/adam-mcavoy-965018152/',
      color: 'teal'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center gap-6 mb-8 justify-center">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            <span className="text-sm font-medium text-slate-400 tracking-wider uppercase">The Team</span>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          </div>

          <h1 className="text-6xl md:text-7xl font-light tracking-tight text-slate-900 mb-6">
            Meet the Team
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
            Built by actuaries and engineers with deep expertise in insurance analytics and enterprise software
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2"
                style={{
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
                }}
              >
                {/* Border accent */}
                <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl ${
                  member.color === 'teal' ? 'bg-gradient-to-r from-teal-500 to-teal-600' : 'bg-gradient-to-r from-slate-600 to-slate-700'
                }`}></div>

                <div className="relative">
                  {/* Name & Title */}
                  <h3 className="text-2xl font-light text-slate-900 mb-2">
                    {member.name}
                  </h3>
                  <div className={`text-sm font-medium tracking-wide mb-4 ${
                    member.color === 'teal' ? 'text-teal-600' : 'text-slate-600'
                  }`}>
                    {member.title}
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-6 font-light">
                    {member.description}
                  </p>

                  {/* LinkedIn Link */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-teal-600 transition-colors duration-300 group"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>LinkedIn Profile</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
            Ready to transform your reserving process?
          </h2>
          <p className="text-xl text-slate-400 font-light mb-8 leading-relaxed">
            See how SCOPE can streamline your monthly close and improve reserve accuracy.
          </p>
          <a
            href="/#demo"
            className="inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-500 text-white px-10 py-5 rounded-full transition-all duration-500 text-lg font-light"
          >
            Schedule a Demo
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}
