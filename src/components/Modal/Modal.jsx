import React, { useEffect } from 'react'
// eslint-disable-next-line
import { motion } from 'framer-motion'

const Modal = ({ project, onClose }) => {
  // Escape key handler
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  if (!project) return null

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-black rounded-lg w-11/12 md:w-3/4 h-4/5 flex overflow-hidden relative"
      >
        {/* Left 1/3 summary */}
        <div className="w-1/3 p-8 flex flex-col justify-between border-r border-cyan-400">
          <div>
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <p className="text-gray-300 mb-6">{project.summary}</p>
          </div>
          <div className="flex flex-col space-y-4">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-400 text-black px-4 py-2 rounded-full hover:bg-cyan-300 transition text-center shadow hover:shadow-cyan-400"
            >
              Live
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cyan-400 px-4 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition text-center shadow hover:shadow-cyan-400"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Right 2/3 screenshots */}
        <div className="w-2/3 p-8 overflow-y-auto grid grid-cols-1 gap-6">
          {project.screenshots.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${project.title} screenshot ${idx+1}`}
              className="w-full rounded-md hover:shadow-cyan-400 transition-shadow"
            />
          ))}
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-cyan-400 text-3xl hover:text-cyan-300"
        >
          ✕
        </button>
      </motion.div>
    </div>
  )
}

export default Modal
