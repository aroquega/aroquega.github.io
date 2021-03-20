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
      <p className="mt-2 mb-4 text-sm">
        {project.description}
      </p>
      <div className="flex">
        {project.links.detail.available && <Link>
          ver en detalle
        </Link>}
        {project.links.source.available && <Link type='text'>
          ver código fuente
        </Link>}
        {project.links.live.available && <Link type='text'>
          ver demo
        </Link>}
      </div>
    </article>
  )
}

export default Card