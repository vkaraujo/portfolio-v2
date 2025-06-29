import React from 'react'
import { useTranslation } from 'react-i18next'
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

const icons = [
  <FaLaptopCode size={40} />,
  <FaGlobe size={40} />,
  <FaShoppingCart size={40} />,
  <FaServer size={40} />,
  <FaBolt size={40} />,
  <FaRocket size={40} />,
  <FaChartBar size={40} />,
  <FaPuzzlePiece size={40} />
]

const WhatICanBuild = () => {
  const { t } = useTranslation()

  return (
    <section id="services" className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="font-heading text-3xl font-bold mb-12 text-center">
        {t('services.heading')}
      </h2>
      <motion.div
        className="font-sans grid grid-cols-1 md:grid-cols-4 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {icons.map((icon, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="font-sans bg-slate-800/60 rounded-xl p-6 text-center 
              transition transform hover:-translate-y-2 hover:shadow-cyan-400"
          >
            <div className="mb-4 text-cyan-400 flex justify-center">
              {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {t(`services.items.${idx}.title`)}
            </h3>
            <p className="text-gray-300 text-sm">
              {t(`services.items.${idx}.desc`)}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default WhatICanBuild
