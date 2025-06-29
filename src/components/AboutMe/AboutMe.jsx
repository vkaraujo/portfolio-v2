import React from 'react'
// eslint-disable-next-line
import { motion } from 'framer-motion'

const facts = [
  { emoji: "⚡", text: "Turns coffee into code" },
  { emoji: "🎲", text: "Dungeon Master on weekends" },
  { emoji: "🇧🇷", text: "Based in Brazil" },
  { emoji: "🚀", text: "Always chasing that next creative spark" },
]

const AboutMe = () => (
  <section id="about" className="py-20 px-4 max-w-5xl mx-auto flex flex-col items-center gap-12">
    <div className="absolute inset-0 -z-10 opacity-10 bg-gradient-to-tr from-cyan-400/30 via-transparent to-cyan-400/30 blur-2xl"></div>
    {/* Image + facts together */}
    <div className="flex flex-col md:flex-row items-center gap-12">
      <motion.img
        src="/my-photo.jpeg"
        alt="Viktor Araujo"
        className="w-60 h-60 object-cover rounded-full border-4 border-cyan-400 shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      />

      <motion.ul
        className="space-y-6 text-lg"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        {facts.map((fact, idx) => (
          <li key={idx} className="flex items-center space-x-4">
            <span className="text-2xl">{fact.emoji}</span>
            <span>{fact.text}</span>
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
      I started out learning to build robust web applications with <span className="font-bold text-cyan-400">Ruby on Rails</span> and <span className="font-bold text-cyan-400">PostgreSQL</span>, adding <span className="font-bold text-cyan-400">Hotwire</span> and <span className="font-bold text-cyan-400">Tailwind</span> for a responsive, dynamic experience. Over time, I dove into <span className="font-bold text-cyan-400">React</span> and <span className="font-bold text-cyan-400">Vite</span> to craft rich front-end interactions, explored <span className="font-bold text-cyan-400">Elixir + Phoenix LiveView</span> to understand real-time systems, and wrote detailed technical documentation to keep projects clear and maintainable. Whether it’s integrating payments with <span className="font-bold text-cyan-400">Safe2Pay</span>, working with APIs like <span className="font-bold text-cyan-400">TMDB</span> and <span className="font-bold text-cyan-400">OpenWeather</span>, or building tools for <span className="font-bold text-cyan-400">Dungeons & Dragons</span> campaigns, I love combining clean code with engaging user experiences.
    </motion.p>
  </section>
)

export default AboutMe
