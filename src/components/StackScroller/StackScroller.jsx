import React from 'react'
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt, FaNetworkWired } from 'react-icons/fa'
import { SiTailwindcss, SiRubyonrails, SiPostgresql, SiElixir, SiNextdotjs, SiRuby, SiJavascript, SiPhoenixframework, SiApollographql } from 'react-icons/si'

const techStack = [
  { icon: <FaReact size={40} color="#61DBFB" />, name: "React" },
  { icon: <SiTailwindcss size={40} color="#38BDF8" />, name: "Tailwind" },
  { icon: <SiRubyonrails size={40} color="#CC0000" />, name: "Rails" },
  { icon: <FaNodeJs size={40} color="#68A063" />, name: "Node.js" },
  { icon: <SiPostgresql size={40} color="#336791" />, name: "PostgreSQL" },
  { icon: <FaDocker size={40} color="#0db7ed" />, name: "Docker" },
  { icon: <FaGitAlt size={40} color="#F1502F" />, name: "Git" },
  { icon: <FaHtml5 size={40} color="#E44D26" />, name: "HTML5" },
  { icon: <FaCss3Alt size={40} color="#1572B6" />, name: "CSS3" },
  { icon: <FaPython size={40} color="#3776AB" />, name: "Python" },
  { icon: <SiElixir size={40} color="#6e4a7e" />, name: "Elixir" },
  { icon: <SiNextdotjs size={40} color="#FFFFFF" />, name: "Next.js" },
  { icon: <SiPhoenixframework size={40} color="#E8622E" />, name: "Phoenix" },
  { icon: <SiRuby size={40} color="#CC342D" />, name: "Ruby" },
  { icon: <FaNetworkWired size={40} color="#06b6d4" />, name: "APIs" },
  { icon: <SiJavascript size={40} color="#F7DF1E" />, name: "JavaScript" }
]
const getDelayClass = (idx) => {
  const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500', 'delay-600', 'delay-700', 'delay-800'];
  return delays[idx % delays.length];
}

const StackScroller = () => (
  <div className="relative overflow-hidden py-8">
    {/* fade edges */}
    <div className="pointer-events-none absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-900 via-slate-900/0 to-transparent z-10"></div>
    <div className="pointer-events-none absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-900 via-slate-900/0 to-transparent z-10"></div>

    {/* scrolling icons */}
    <div className="flex animate-scroll space-x-12">
      {techStack.concat(techStack).map((tech, idx) => (
        <div
          key={idx}
          className={`relative group opacity-0 animate-fade-in ${getDelayClass(idx)}`}
        >
          {tech.icon}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
            {tech.name}
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default StackScroller
