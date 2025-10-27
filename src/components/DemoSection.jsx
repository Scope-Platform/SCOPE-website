import { useState } from 'react'
import { Send } from 'lucide-react'

export default function DemoSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      company: e.target.company.value,
      role: e.target.role.value,
      reason: e.target.message.value
    }

    try {
      await fetch('https://script.google.com/macros/s/AKfycbyHlMIdCctWNL9WEwMKRTcavB0QSfzxOjjc5gwdIuwm_hGeubiHwFeJLo_jMyJ5P5lERQ/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      setShowSuccess(true)
      e.target.reset()

      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)

    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting the form. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="demo" className="relative py-40 px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900 mb-6">
            Schedule a Demo
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            Tell us about your team and monthly close needs. We'll tailor a walkthrough
            to your data and governance framework.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          {showSuccess && (
            <div className="mb-6 bg-teal-600 text-white px-6 py-4 rounded-lg text-center">
              Thank you! We'll be in touch soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-light text-slate-600 mb-3">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-0 py-4 border-0 border-b-2 border-slate-200 focus:border-teal-600 outline-none transition-colors bg-transparent text-lg font-light"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-light text-slate-600 mb-3">Work Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-0 py-4 border-0 border-b-2 border-slate-200 focus:border-teal-600 outline-none transition-colors bg-transparent text-lg font-light"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-light text-slate-600 mb-3">Organization</label>
                <input
                  type="text"
                  name="company"
                  required
                  className="w-full px-0 py-4 border-0 border-b-2 border-slate-200 focus:border-teal-600 outline-none transition-colors bg-transparent text-lg font-light"
                  placeholder="Your Health Plan"
                />
              </div>
              <div>
                <label className="block text-sm font-light text-slate-600 mb-3">Role</label>
                <input
                  type="text"
                  name="role"
                  className="w-full px-0 py-4 border-0 border-b-2 border-slate-200 focus:border-teal-600 outline-none transition-colors bg-transparent text-lg font-light"
                  placeholder="Chief Actuary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-light text-slate-600 mb-3">Message</label>
              <textarea
                name="message"
                rows="4"
                className="w-full px-0 py-4 border-0 border-b-2 border-slate-200 focus:border-teal-600 outline-none transition-colors bg-transparent text-lg font-light resize-none"
                placeholder="Tell us about your monthly close process..."
              ></textarea>
            </div>

            <div className="pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-teal-600 text-white px-12 py-5 rounded-full transition-all duration-500 text-lg font-light disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Request Demo'}
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>

          {/* Quote */}
          <div className="mt-20 text-center">
            <p className="text-2xl font-light text-slate-600 italic">
              "The future of health reserving is transparent, fast, and explainable."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
