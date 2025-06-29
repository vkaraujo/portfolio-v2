import './App.css'
import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Portfolio from './components/Portfolio/Portfolio'
import StackScroller from './components/StackScroller/StackScroller'
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
    <div className="relative text-white font-sans">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(270deg, #0f172a, #0e7490, #312e81, #9333ea, #0f172a, #1e3a8a, #0e7490, #0f172a)",
          backgroundSize: "2000% 2000%",
          animation: "gradientShift 40s cubic-bezier(0.25, 0.1, 0.25, 1) infinite"
        }}
      />
      <Navbar />
      <Hero />
      <Portfolio />
      <StackScroller />
      <WhatICanBuild />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default App

