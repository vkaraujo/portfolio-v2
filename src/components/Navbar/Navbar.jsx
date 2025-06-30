import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300
      ${scrolled ? 'bg-black/80 backdrop-blur' : 'bg-transparent'}
    `}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="#top" className="text-2xl font-bold tracking-wider decoration-cyan-400">
          <span className="text-amber-400">V</span>i<span className="text-amber-400">k</span>tor Waissmann
        </a>

        <div className="flex space-x-6 items-center">
          <a href="#portfolio" className="hover:underline underline-offset-4 decoration-cyan-400">Portfolio</a>
          <a href="#services" className="hover:underline underline-offset-4 decoration-cyan-400">Services</a>
          <a href="#about" className="hover:underline underline-offset-4 decoration-cyan-400">About</a>
          <a href="#footer" className="hover:underline underline-offset-4 decoration-cyan-400">Contact</a>
          <div className="flex space-x-2">
            <button onClick={() => changeLanguage('en')}>🇺🇸</button>
            <button onClick={() => changeLanguage('pt')}>🇧🇷</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

