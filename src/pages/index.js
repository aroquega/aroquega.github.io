import React from "react"

import Header from '../components/header'
import Card from '../components/card'

const IndexPage = ({ location }) => (
  <>
    <Header location={location}></Header>
    <div className="bg-mountains-md bg-cover bg-center bg-center p-5 h-screen">
      <div className="mt-20 bg-cyanprocess bg-opacity-75 p-5 w-full md:w-2/4 shadow-md">
        <p className="text-xl">
          I'm a backend web developer that focuses on creating high quality code.
          I'm always learning and trying out new technologies and areas.
        </p>
      </div>
    </div>
    <article className="p-5">
      <h2 className="text-3xl">Projects</h2>
      <div class="flex flex-wrap">
        <Card />
        <Card />
      </div>
    </article>
  </>
)

export default IndexPage
