import React from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line
import { motion } from 'framer-motion';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center px-4">
      {/* Geometric soft background */}
      <div className="absolute w-[600px] h-[600px] [background-color:#2992C1]/10 blur-3xl rounded-full -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-heading text-5xl md:text-7xl font-extrabold tracking-wider text-white"
      >
        {t('hero.title')}
      </motion.h1>

      {/* Photo + bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 md:mt-14 relative group"
      >
        <img
          src="/ViktorVikingStyle.jpeg"
          alt="Photo of Viktor Araujo smiling"
          className="w-36 h-36 rounded-full border-4 [border-color:#2992C1] transition-transform duration-300 group-hover:scale-105 object-cover"
        />
        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute -top-3 -right-6 [background-color:#2992C1] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md"
        >
          {t('hero.greeting')}
        </motion.span>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="mt-12 flex space-x-6"
      >
        <a
          href="#portfolio"
          className="w-72 h-16 flex items-center justify-center [background-color:#2992C1] rounded-md text-2xl font-semibold text-white hover:opacity-90 transition"
        >
          {t('hero.seeWork')}
        </a>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-72 h-16 flex items-center justify-center border-2 [border-color:#2992C1] text-white rounded-md text-2xl font-semibold hover:[background-color:#2992C1] hover:text-white transition"
        >
          {t('hero.downloadCV')}
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

