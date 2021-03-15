import React from 'react'
import {Link} from '../components/controls'

function Card() {
  return (
    <article
      className="
        w-full h-60 my-4">
      <header className="text-lg">
        <h3>Título del Proyecto</h3>  
      </header>    
      <img/>
      <p className="mt-2 mb-4 text-sm">
        Descripción del Proyecto
      </p>
      <div className="flex">
        <Link>
          ver en detalle
        </Link>
        <Link type='text'>
          ir a github
        </Link>
        <Link type='text'>
          ver demo
        </Link>
      </div>
    </article>
  )
}

export default Card