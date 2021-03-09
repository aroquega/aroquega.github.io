import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

function Header({ location }) {
  // const [scrollPos, setScrollPos] = useState(window.pageYOffset)
  // const [active, setActive] = useState(false)

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     const currentScrollPos = window.pageYOffset
  //     console.log(`current: ${currentScrollPos}. prev: ${scrollPos}`)
  //     setActive(scrollPos > currentScrollPos)
  //     setScrollPos(currentScrollPos)
  //   })
  //   return () => {
  //     window.removeEventListener('scroll')
  //   }
  // })

  const actionButton = getActionButton(location.pathname)
  return (
    <header
      className={`
        h-16 w-full px-6
        flex items-center justify-between
        bg-xiketic text-eggshell shadow-md fixed
        bg-opacity-95`}>
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
  if (pathname === '/cv') {
    return { to: '/', name: 'ver portafolio' }
  }
  return { to: '/cv', name: 'ver cv' }
}

export default Header