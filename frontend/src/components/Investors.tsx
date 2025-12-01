import React from 'react'

const Investors: React.FC = () => (
  <section id="investors" className="py-16">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-2xl font-bold">Investors & Partners</h2>
      <p className="mt-3 text-slate-600">We’re proud to work with local organisations and partners.</p>
      <div className="mt-8 flex items-center justify-center gap-8 flex-wrap">
        <div className="w-36 h-12 bg-white rounded shadow flex items-center justify-center">Partner A</div>
        <div className="w-36 h-12 bg-white rounded shadow flex items-center justify-center">Partner B</div>
        <div className="w-36 h-12 bg-white rounded shadow flex items-center justify-center">Partner C</div>
      </div>
    </div>
  </section>
)

export default Investors
