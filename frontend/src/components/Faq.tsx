import React, { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'

const faqs = [
  {
    question: 'What are your business hours?',
    answer: 'We are open Monday to Saturday from 8:00 AM to 6:00 PM. Closed on Sundays and public holidays.',
  },
  {
    question: 'Do you offer delivery services?',
    answer: 'Yes, we offer same-day delivery for local orders and next-day delivery for regional customers. Delivery charges apply based on distance and order size.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, credit/debit cards, bank transfers, and offer credit terms for registered trade customers.',
  },
  {
    question: 'Can I return a product if it\'s not suitable?',
    answer: 'Yes, unopened products in original packaging can be returned within 30 days with a valid receipt. Special orders and cut cables may not be returnable.',
  },
  {
    question: 'Do you provide technical advice?',
    answer: 'Absolutely! Our experienced team can help you select the right products for your project and provide technical guidance on specifications and compliance.',
  },
  {
    question: 'Is there a minimum order for wholesale pricing?',
    answer: 'Wholesale pricing is available for registered trade customers. Minimum order quantities vary by product category. Contact us for details.',
  },
]

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 bg-blue-950 text-yellow-200">
      <div className="w-full">
        <div className="mx-auto max-w-[calc(100%-32px)] border-4 border-yellow-200 rounded-2xl p-0">
          <div className="p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-yellow-200 text-center underline decoration-yellow-200 decoration-2 underline-offset-8 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-white mb-8">
              Find answers to common questions about our products and services.
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-yellow-200/8 rounded-lg border border-yellow-200 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-blue-900/30 transition-colors"
                  >
                    <span className="font-semibold text-yellow-200 pr-4">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <FiMinus className="w-5 h-5 text-yellow-200 flex-shrink-0" />
                    ) : (
                      <FiPlus className="w-5 h-5 text-yellow-200 flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-5 pb-5 text-white">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
