import React from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line
import { motion } from 'framer-motion';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center justify-center h-screen text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold tracking-wider"
      >
        {t('hero.title')}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-4 text-xl md:text-2xl max-w-xl"
      >
        {t('hero.subtitle')}
      </motion.p>

      {/* Friendly photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-8 relative"
      >
        <img
          src="/my-photo.jpeg"
          alt="Viktor smiling"
          className="w-32 h-32 rounded-full border-4 border-cyan-400"
        />
        <span className="absolute -top-4 -right-8 bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          👋 Hey there!
        </span>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="mt-8 flex space-x-6"
      >
        <a
          href="#portfolio"
          className="bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-cyan-300 transition"
        >
          {t('hero.seeWork')}
        </a>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-cyan-400 px-6 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition"
        >
          {t('hero.downloadCV')}
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
