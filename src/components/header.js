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

  return (
    <header
      className={`
        h-16 w-full px-6
        flex items-center justify-between
        bg-xiketic text-white shadow-md
        sticky top-0
        bg-opacity-95`}>
      <h1>
        Hristo Roque
      </h1>
      <nav>
        <a className="m-2">About me</a>
        <a className="m-2">Projects</a>
        <a className="m-2">Resume</a>
      </nav>
    </header>
  )
}

export default Header