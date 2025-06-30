import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import Card from './Card'
import { AnimatePresence } from 'framer-motion'
import { projects } from "../../data/projects"
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const { t } = useTranslation();

  return (
    <section id="portfolio" className="py-16 max-w-7xl mx-auto px-6">
      <div className="flex items-center mb-12">
        <h2 className="font-heading text-3xl font-bold mr-4 whitespace-nowrap text-amber-400">
          {t('portfolio.title')}
        </h2>
        <div className="flex-1 h-px [background-color:#2992C1]"></div>
      </div>
      <div className="font-sans flex justify-center items-center space-x-[-4rem]">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            project={project}
            onClick={() => setSelectedProject(project)}
            idx={idx}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Modal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Portfolio
