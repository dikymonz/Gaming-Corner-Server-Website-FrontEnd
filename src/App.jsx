// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import './App.css'

// Import Components
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

// Import Pages
import Hero from './pages/Hero.jsx'
import Packages from './pages/Packages/index.jsx'
import WhyChoose from './pages/WhyChoose.jsx' 
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <main>
        <Hero />
        <Packages />
        <WhyChoose />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App