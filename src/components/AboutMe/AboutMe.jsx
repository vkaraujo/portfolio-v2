import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
// eslint-disable-next-line
import { motion } from 'framer-motion'

const AboutMe = () => {
  const { t } = useTranslation()
  const facts = t('about.facts', { returnObjects: true })

  return (
    <section id="about" className="py-20 px-4 max-w-5xl mx-auto flex flex-col items-center gap-12 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-10 bg-gradient-to-tr from-cyan-400/30 via-transparent to-cyan-400/30 blur-2xl"></div>
      
      {/* Image + facts together */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.img
          src="/my-photo.jpeg"
          alt="Viktor Araujo"
          className="w-60 h-60 object-cover border-4 border-cyan-400 shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        />

        <motion.ul
          className="font-sans space-y-6 text-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          {facts.map((fact, idx) => (
            <li key={idx} className="flex items-center space-x-4">
              <span>{fact}</span>
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Bio paragraph BELOW */}
      <motion.p
        className="max-w-3xl text-center text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <Trans i18nKey="about.bio" components={{ strong: <span className="font-sans font-bold text-cyan-400" /> }} />
      </motion.p>
    </section>
  )
}

export default AboutMe
