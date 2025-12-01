import React from 'react'
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi'

const Contact: React.FC = () => (
  <section id="contact" className="py-[32px] bg-yellow-50">
    <div className="w-full">
      <div className="mx-auto max-w-[calc(100%-32px)] border-4 border-blue-950 rounded-2xl p-0">
        <div className="p-12 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 underline decoration-blue-950 decoration-2 underline-offset-8">Contact</h2>
            <p className="mt-3 text-slate-700">Get in touch for quotes, bulk orders or technical help.</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-100 rounded-lg border border-yellow-200">
                  <FiPhone className="w-6 h-6 text-blue-950" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Phone</div>
                  <a href="tel:9843777772" className="text-slate-700">98437 77772</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-100 rounded-lg border border-yellow-200">
                  <FiMail className="w-6 h-6 text-blue-950" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Email</div>
                  <a href="mailto:info@example.com" className="text-slate-700">info@example.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-100 rounded-lg border border-yellow-200">
                  <FiMapPin className="w-6 h-6 text-blue-950" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Address</div>
                  <div className="text-slate-700">Local store / warehouse (update address)</div>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-yellow-100 p-8 rounded-lg border-4 border-blue-950 shadow-sm">
            <div className="grid grid-cols-1 gap-4">
              <input className="p-3 rounded border border-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-950/30" placeholder="Your name" />
              <input className="p-3 rounded border border-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-950/30" placeholder="Email" />
              <textarea className="p-3 rounded border border-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-950/30" rows={5} placeholder="Message" />
              <button type="button" className="self-start inline-flex items-center gap-2 bg-blue-950 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-200/40">
                <FiSend className="w-4 h-4" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
)

export default Contact
