import React from 'react'
import { FiBox, FiShoppingCart, FiHardDrive, FiTool, FiPackage, FiHeadphones } from 'react-icons/fi'

const services = [
  { title: 'Wholesale Supply', text: 'Bulk orders and trade pricing.', icon: FiPackage },
  { title: 'Retail Sales', text: 'Counter sales for small purchases.', icon: FiShoppingCart },
  { title: 'Project Procurement', text: 'Sourcing for large projects.', icon: FiHardDrive },
  { title: 'Technical Support', text: 'Advice on parts and installation.', icon: FiTool },
  { title: 'Custom Orders', text: 'Specialised equipment when needed.', icon: FiBox },
  { title: 'After-sales Service', text: 'Help with warranties and returns.', icon: FiHeadphones },
]

const Services: React.FC = () => (
  <section id="services" className="py-[32px] bg-yellow-50">
    <div className="w-full">
      <div className="mx-auto max-w-[calc(100%-32px)] border-4 border-blue-950 rounded-2xl p-0">
        <div className="p-12 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 underline decoration-blue-950 decoration-2 underline-offset-8">Services</h2>
          <p className="mt-3 text-slate-700">We cover a range of services for businesses and homeowners.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="p-8 bg-yellow-100 rounded-lg border border-yellow-200 shadow-sm flex flex-col items-start">
                  <Icon className="w-10 h-10 text-blue-950 mb-4" />
                  <h3 className="font-semibold text-slate-900">{s.title}</h3>
                  <p className="text-sm text-slate-700 mt-3">{s.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Services
