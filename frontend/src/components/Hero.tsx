import React, { useMemo } from 'react'
import Masonry from './ui/Masonry'

const Hero: React.FC = () => {
  const items = useMemo(
    () => [
      { id: '1', img: '/img/products/fan.png', url: '#', height: 320 },
      { id: '2', img: '/img/products/fan2.png', url: '#', height: 240 },
      { id: '3', img: '/img/products/fan3.png', url: '#', height: 280 },
      { id: '4', img: '/img/products/light.png', url: '#', height: 360 },
      { id: '5', img: '/img/products/light2.png', url: '#', height: 200 },
      { id: '6', img: '/img/products/light3.png', url: '#', height: 300 },
      { id: '7', img: '/img/products/light4.png', url: '#', height: 220 },
      { id: '8', img: '/img/products/motor1.png', url: '#', height: 340 },
      { id: '9', img: '/img/products/motor2.png', url: '#', height: 260 },
      { id: '10', img: '/img/products/pipe1.png', url: '#', height: 180 },
      { id: '11', img: '/img/products/switch.png', url: '#', height: 310 },
      { id: '12', img: '/img/products/switch2.png', url: '#', height: 200 },
      { id: '13', img: '/img/products/fan.png', url: '#', height: 190 },
      { id: '14', img: '/img/products/light.png', url: '#', height: 180 }
    ],
    []
  )

  return (
    <section id="hero" className="py-[32px] bg-yellow-50">
      <div className="w-full">
        <div className="mx-auto max-w-[calc(100%-32px)] border-4 border-blue-950 rounded-2xl p-0 box-border overflow-hidden">
          <div className="p-12 max-w-6xl mx-auto w-full py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <div className="w-40 h-40 rounded-full shadow-lg mb-6 overflow-hidden">
                <img
                  src="/img/logo.jpg"
                  alt="Manohar & Co logo"
                  className="w-full h-full object-cover transform scale-110"
                />
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900">MANOHAR & CO ELECTRICALS</h1>
              <p className="mt-4 text-lg text-slate-700 max-w-xl">Wholesale & retail electrical supplies — quality products, trusted service.</p>
              <div className="mt-6 flex gap-4">
                <a href="#contact" className="inline-block border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white font-semibold px-5 py-3 rounded-md transition-colors">Contact Us</a>
                <a href="#services" className="inline-block border border-slate-300 text-slate-800 hover:border-yellow-400 hover:text-yellow-500 font-semibold px-5 py-3 rounded-md transition-colors">Our Services</a>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="w-full h-72 lg:h-96">
                <Masonry items={items} animateFrom="bottom" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
