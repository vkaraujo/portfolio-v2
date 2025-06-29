import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => (
  <footer className="bg-black/90 py-10 mt-20 text-center relative">
    <p className="text-xl font-semibold mb-6">
      Let’s build something bold together 🚀
    </p>

    <div className="flex justify-center space-x-6">
      <a
        href="https://github.com/vkaraujo"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:text-cyan-300 transition text-2xl hover:shadow-cyan-400"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/viktor-araujo"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:text-cyan-300 transition text-2xl hover:shadow-cyan-400"
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:your-email@example.com"
        className="text-cyan-400 hover:text-cyan-300 transition text-2xl hover:shadow-cyan-400"
      >
        <FaEnvelope />
      </a>
    </div>
  </footer>
)

export default Footer
