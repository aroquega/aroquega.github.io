import React from 'react'
import {Link} from 'gatsby'

function Header({location}) {
  const actionButton = getActionButton(location.pathname)

  return (
    <header 
      className="
        h-16 px-6
        flex items-center justify-between
        bg-xiketic text-eggshell shadow-md">
      <h1>
        Hristo Roque
      </h1>
      <nav>
        <Link
          to={actionButton.to} 
          className="
            block text-xiketic text-xs text-center font-bold uppercase w-32
            bg-cyanprocess p-2 rounded shadow-md">
          {actionButton.name}
        </Link>
      </nav>
    </header>
  )
}

function getActionButton(pathname) {
  if(pathname === '/cv'){
    return {to: '/', name: 'ver portafolio'}
  }
  return {to: '/cv', name: 'ver cv'}
}

export default Header