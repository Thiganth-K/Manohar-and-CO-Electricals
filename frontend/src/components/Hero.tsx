import React from 'react'

const Hero: React.FC = () => (
  <section id="hero" className="py-[32px] bg-yellow-50">
    <div className="w-full">
      <div className="mx-auto max-w-[calc(100%-32px)] border-4 border-blue-950 rounded-2xl p-0 box-border overflow-hidden">
        <div className="p-12 max-w-6xl mx-auto w-full py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <img src="/src/assets/brand.jpg" alt="Manohar & Co logo" className="w-40 h-40 object-contain rounded-full shadow-lg mb-6" />
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900">MANOHAR & CO ELECTRICALS</h1>
            <p className="mt-4 text-lg text-slate-700 max-w-xl">Wholesale & retail electrical supplies — quality products, trusted service.</p>
            <div className="mt-6 flex gap-4">
              <a href="#contact" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-5 py-3 rounded-md">Contact Us</a>
              <a href="#services" className="inline-block border border-slate-300 text-slate-800 px-5 py-3 rounded-md">Our Services</a>
            </div>
          </div>
          <div className="lg:w-1/2">
            
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
