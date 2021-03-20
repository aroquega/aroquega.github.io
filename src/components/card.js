import React from 'react'
import { Link } from '../components/controls'

function Card({ project }) {
  return (
    <article
      className="
        w-full h-32 my-4">
      <header className="text-lg">
        <h3>{project.title}</h3>
      </header>
      <img alt={project.title} />
      <p className="mt-2 mb-4 text-sm">
        {project.description}
      </p>
      <div className="flex">
        <Link>
          ver en detalle
        </Link>
        <Link type='text'>
          ver código fuente
        </Link>
        <Link type='text'>
          ver demo
        </Link>
      </div>
    </article>
  )
}

export default Card