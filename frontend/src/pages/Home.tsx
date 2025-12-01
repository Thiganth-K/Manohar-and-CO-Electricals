import React from 'react'
import { Hero } from '../components'
import { About } from '../components'
import { Services } from '../components'
import { Investors } from '../components'
import { FAQ } from '../components'
import { Contact } from '../components'

const Home: React.FC = () => {
  return (
    <main className="min-h-screen text-slate-800">
      <Hero />
      <About />
      <Services />
      <Investors />
      <FAQ />
      <Contact />
      <footer className="py-8 bg-slate-900 text-white text-center">
        <div className="max-w-6xl mx-auto px-6">© {new Date().getFullYear()} Manohar & Co Electricals</div>
      </footer>
    </main>
  )
}

export default Home
