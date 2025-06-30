import React, { useEffect, useState } from 'react'
// eslint-disable-next-line
import { motion } from 'framer-motion'
import { useTranslation } from "react-i18next"

const Modal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  const [hoveredImage, setHoveredImage] = useState(null)
  const { t } = useTranslation()

  if (!project) return null

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={onClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-black rounded-lg w-11/12 md:w-3/4 h-4/5 flex overflow-hidden relative"
      >
        {/* Floating hovered image */}
          {hoveredImage && (
            <div className="absolute top-0 left-1/3 w-2/3 h-full flex items-center justify-center z-30 pointer-events-none">
              <img
                src={hoveredImage}
                alt="Large preview"
                className="max-h-[75%] max-w-[75%] rounded-lg shadow-2xl shadow-cyan-400 transition-transform duration-300"
              />
            </div>
          )}

        {/* Left 1/3 summary */}
        <div className="w-1/3 p-8 flex flex-col justify-between border-r border-cyan-400">
          <div>
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <p className="text-gray-300 mb-6">{t(`projects.${project.title}.description`)}</p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Technologies:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-400">
                {project.tech.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </div>
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
        <div className={`w-2/3 p-8 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6 transition-opacity duration-300 ${hoveredImage ? 'opacity-40' : 'opacity-100'}`}>
          {project.screenshots.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${project.title} screenshot ${idx+1}`}
              className="w-full h-60 object-cover rounded-md transition-shadow"
              onMouseEnter={() => setHoveredImage(src)}
              onMouseLeave={() => setHoveredImage(null)}
            />
          ))}
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 bg-black/50 px-3 py-1 rounded-full text-cyan-400 text-4xl hover:text-cyan-300 transition z-50"
        >
          ✕
        </button>
      </motion.div>
    </div>
  )
}

export default Modal
