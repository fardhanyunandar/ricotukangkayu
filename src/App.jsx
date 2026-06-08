import Navbar from './components/navbar'
import Hero from './components/sections/hero'
import About from './components/sections/about'
import Services from './components/sections/services'
import Portfolio from './components/sections/portofolio'
import Testimonials from './components/sections/testimonials'
import FAQ from './components/sections/faq'
import Contact from './components/sections/contact'
import Footer from './components/sections/footer'

import './styles/global.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}