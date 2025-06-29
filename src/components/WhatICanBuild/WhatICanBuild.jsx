import React from 'react'
// eslint-disable-next-line
import { motion } from 'framer-motion'
import { FaLaptopCode, FaGlobe, FaShoppingCart, FaServer, FaBolt, FaRocket, FaChartBar, FaPuzzlePiece } from 'react-icons/fa'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const services = [
  {
    title: "Web Applications",
    desc: "Full-featured apps tailored to your business.",
    icon: <FaLaptopCode size={40} />
  },
  {
    title: "Landing Pages",
    desc: "Fast, eye-catching pages to showcase offers.",
    icon: <FaGlobe size={40} />
  },
  {
    title: "E-Commerce Integrations",
    desc: "Payments & online stores that convert.",
    icon: <FaShoppingCart size={40} />
  },
  {
    title: "API Integrations",
    desc: "Connect services like CRMs, payments & more.",
    icon: <FaServer size={40} />
  },
  {
    title: "Interactive UI & UX",
    desc: "Engaging experiences that keep users hooked.",
    icon: <FaBolt size={40} />
  },
  {
    title: "Performance & SEO",
    desc: "Fast-loading, optimized sites that rank.",
    icon: <FaRocket size={40} />
  },
  {
    title: "Dashboards & Reports",
    desc: "Visualize data to make smart decisions.",
    icon: <FaChartBar size={40} />
  },
  {
    title: "Technical Consulting",
    desc: "Help planning or upgrading your tech stack.",
    icon: <FaPuzzlePiece size={40} />
  },
]

const WhatICanBuild = () => (
  <section id="services" className="py-20 px-4 max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold mb-12 text-center">
      What I Can Build For You
    </h2>
    <motion.div
      className="grid grid-cols-1 md:grid-cols-4 gap-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {services.map((service, idx) => (
        <motion.div
          key={idx}
          variants={item}
          className="bg-black/60 rounded-xl p-6 text-center 
            transition transform hover:-translate-y-2 hover:shadow-cyan-400"
        >
          <div className="mb-4 text-cyan-400 flex justify-center">
            {service.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-300 text-sm">{service.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
)

export default WhatICanBuild
