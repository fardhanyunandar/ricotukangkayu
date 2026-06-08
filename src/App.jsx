import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Portfolio from './components/sections/portofolio'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
// import Contact from './components/sections/Contact'
// import Footer from './components/Footer'
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
        {/* <Contact /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}