import React, { useState } from 'react'

function Header({ location }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`
        h-16 w-full px-6
        flex items-center justify-start md:justify-between
        bg-xiketic text-white shadow-md
        sticky top-0
        bg-opacity-95
        `}>
      <div className="flex items-center">
        {/* <button className="mr-2" onClick={() => setMenuOpen(true)}>
          <span className="material-icons block md:hidden">
            menu
          </span>
        </button> */}
        <h1>
          Hristo Roque
        </h1>
      </div>
      {/* <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/about" className="py-2 px-4 block flex items-center">
              <span className="material-icons mr-2">person</span> About me
            </a>
          </li>
          <li>
            <a href="/projects" className="py-2 px-4 block flex items-center">
              <span className="material-icons mr-2">folder</span> Projects
            </a>
          </li>
          <li>
            <a href="/resume" className="py-2 px-4 block flex items-center">
              <span className="material-icons mr-2">description</span> Resume
            </a>
          </li>
        </ul>
      </nav>
      <nav
        className={
          `md:hidden bg-xiketic fixed top-0 bottom-0 left-0 w-full shadow-lg
          transform-gpu ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          transition duration-500 ease-in-out
          `}>
        <div className="flex justify-end p-2 bg-primaryLight h-16">
          <button onClick={() => setMenuOpen(false)}>
            <span className="material-icons">close</span>
          </button>
        </div>
        <ul>
          <li>
            <a href="/about" className="py-2 px-4 block flex items-center">
              <span className="material-icons mr-2">person</span> About me
            </a>
          </li>
          <li>
            <a href="/projects" className="py-2 px-4 block flex items-center">
              <span className="material-icons mr-2">folder</span> Projects
            </a>
          </li>
          <li>
            <a href="/resume" className="py-2 px-4 block flex items-center">
              <span className="material-icons mr-2">description</span> Resume
            </a>
          </li>
        </ul>
      </nav> */}
    </header >
  )
}

export default Header