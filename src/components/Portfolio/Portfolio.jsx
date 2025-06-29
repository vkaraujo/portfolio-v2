import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import Card from './Card'
import { AnimatePresence } from 'framer-motion'

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: "StrayPawBridge",
      image: "/image.jpg",
      screenshots: ["/image.jpg", "/image.jpg", "/image.jpg"],
      summary: "A pet adoption platform with listings, adoptions, and admin moderation.",
      live: "#",
      github: "#",
    },
    {
      title: "APIpalooza",
      image: "/image.jpg",
      screenshots: ["/image.jpg", "/image.jpg"],
      summary: "A festival of API integrations in Rails + Hotwire.",
      live: "#",
      github: "#",
    },
    {
      title: "Dice Roller",
      image: "/image.jpg",
      screenshots: ["/image.jpg", "/image.jpg"],
      summary: "Hope & Fear dice roller for Daggerheart built with React & Framer.",
      live: "#",
      github: "#",
    },
    {
      title: "Dice Roller",
      image: "/image.jpg",
      screenshots: ["/image.jpg", "/image.jpg"],
      summary: "Hope & Fear dice roller for Daggerheart built with React & Framer.",
      live: "#",
      github: "#",
    },
    {
      title: "Dice Roller",
      image: "/image.jpg",
      screenshots: ["/image.jpg", "/image.jpg"],
      summary: "Hope & Fear dice roller for Daggerheart built with React & Framer.",
      live: "#",
      github: "#",
    },
    {
      title: "Dice Roller",
      image: "/image.jpg",
      screenshots: ["/image.jpg", "/image.jpg"],
      summary: "Hope & Fear dice roller for Daggerheart built with React & Framer.",
      live: "#",
      github: "#",
    },
  ]

  return (
    <section id="portfolio" className="py-16">
      <h2 className="font-heading text-3xl font-bold mb-12 text-center">Projects</h2>
      <div className="font-sans flex justify-center items-center space-x-[-4rem]">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            project={project}
            onClick={setSelectedProject}
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
