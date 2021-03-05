import React from 'react'
import Header from '../components/header'

function CVPage({location}){
  return (
    <>
      <Header location={location}></Header>
      <main className="p-4">
        <h1 className="text-3xl">Software Developer / Web Developer</h1>
        <p>
          I'm a backend web developer that focuses on creating high quality code.
          I'm always learning and trying out new technologies and areas.
        </p>
      </main>
    </>
  )
}

export default CVPage