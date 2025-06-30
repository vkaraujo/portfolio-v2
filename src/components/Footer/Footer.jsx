import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-black/90 py-10 mt-20 text-center relative">
      <p className="text-xl font-semibold mb-6">
        {t('footer.cta')}
      </p>

      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/vkaraujo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2992C1] hover:opacity-80 transition text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/viktor-araujo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2992C1] hover:opacity-80 transition text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:vkaraujo00@gmail.com"
          className="text-[#2992C1] hover:opacity-80 transition text-2xl"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20Viktor!"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2992C1] hover:opacity-80 transition text-2xl"
        >
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  )
}

export default Footer
