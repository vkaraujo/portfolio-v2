import './App.css'
import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Portfolio from './components/Portfolio/Portfolio'
import WhatICanBuild from './components/WhatICanBuild/WhatICanBuild'
import AboutMe from './components/AboutMe/AboutMe'
import Footer from './components/Footer/Footer'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false
    })

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <Hero />
      <Portfolio />
      <WhatICanBuild />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default App

