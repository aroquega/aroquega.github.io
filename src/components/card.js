import React from 'react'
import {Link} from '../components/controls'

function Card() {
  return (
    <article
      className="
        w-full h-60 m-2
        rounded shadow-lg">
      <header className="p-2 font-bold text-lg">
        <h3>Título del Proyecto</h3>  
      </header>    
      <img/>
      <p className="p-2 text-sm">
        Descripción del Proyecto
      </p>
      <div className="p-2 flex">
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