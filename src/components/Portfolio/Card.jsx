import React from 'react'

const Card = ({ project, onClick, idx }) => (
  <div
    onClick={() => onClick(project)}
    className={`relative bg-black/60 rounded-xl p-6 shadow-lg 
      transition-all duration-300 
      hover:z-10 hover:scale-105 hover:rotate-0 cursor-pointer`}
    style={{
      transform: `rotate(${[-8, 5, -5][idx % 3]}deg)`,
    }}
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-64 h-40 object-cover rounded-md mb-4"
    />
    <h3 className="text-xl font-semibold">{project.title}</h3>
  </div>
)

export default Card
