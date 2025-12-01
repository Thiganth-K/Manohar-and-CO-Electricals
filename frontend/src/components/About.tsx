import React from 'react'
import { FiCheckCircle, FiTruck, FiMessageSquare, FiShield } from 'react-icons/fi'

const About: React.FC = () => (
  <section id="about" className="min-h-screen bg-blue-950 py-[12px] md:py-[24px]">
    <div className="w-full">
      <div className="border-4 border-yellow-500 rounded-2xl p-0 max-w-[calc(100%-32px)] mx-auto">
        <div className="p-16 text-center max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-yellow-300 underline decoration-yellow-300 decoration-2 underline-offset-8 mb-6">About Us</h2>
          <p className="mt-6 text-slate-200 mx-auto max-w-3xl">Manohar & Co is a family-run electrical supplies company serving the region with quality products and fast service. We supply contractors, retailers and DIY customers.</p>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <span className="inline-block border border-yellow-500 text-yellow-300 font-semibold px-3 py-1 rounded-full bg-transparent">Trusted Since 1990</span>
            <span className="inline-block border border-yellow-500 text-yellow-300 font-semibold px-3 py-1 rounded-full bg-transparent">100+ Brands</span>
            <span className="inline-block border border-yellow-500 text-yellow-300 font-semibold px-3 py-1 rounded-full bg-transparent">Same-day Dispatch</span>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="p-8 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center text-center">
            <FiCheckCircle className="w-12 h-12 mb-4 text-yellow-300" />
            <h3 className="font-semibold text-white">Quality Products</h3>
            <p className="text-sm text-slate-200 mt-2">We stock leading manufacturers and perform quality checks on every batch, ensuring components are reliable for both residential and commercial projects.</p>
          </div>
          <div className="p-8 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center text-center">
            <FiTruck className="w-12 h-12 mb-4 text-yellow-300" />
            <h3 className="font-semibold text-white">Fast Delivery</h3>
            <p className="text-sm text-slate-200 mt-2">Fast local delivery, flexible pickup options, and dependable wholesale fulfilment with priority handling for trade customers.</p>
          </div>
          <div className="p-8 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center text-center">
            <FiMessageSquare className="w-12 h-12 mb-4 text-yellow-300" />
            <h3 className="font-semibold text-white">Trusted Advice</h3>
            <p className="text-sm text-slate-200 mt-2">Our knowledgeable team provides technical guidance, product recommendations, and support to help you select the correct parts and specifications for your job.</p>
          </div>
          <div className="p-8 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center text-center">
            <FiShield className="w-12 h-12 mb-4 text-yellow-300" />
            <h3 className="font-semibold text-white">Safety & Compliance</h3>
            <p className="text-sm text-slate-200 mt-2">Products carry necessary certifications and our team helps you choose compliant components so projects meet regulatory and safety standards.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
)

export default About
