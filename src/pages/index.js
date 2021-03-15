import React from "react"

import Header from '../components/header'
import Card from '../components/card'
import Footer from '../components/footer'
import projects from '../data/projects'

const IndexPage = ({ location }) => (
  <>
    <div className="h-screen">
      <Header location={location}></Header>
      <div className="p-6 h-full">
        <div className="mb-6 text-4xl sm:text-5xl md:text-6xl ">
          <p>Hello, my name is <span className="text-cyanprocess">Hristo Roque</span>.</p>
          <p>I'm a <span className="text-cyanprocess">Web Developer</span>.</p>
        </div>
        <p>
          A committed and goal-centric person that is always learning new technologies.
        </p>
      </div>
    </div>
    <article className="px-6 py-14 bg-eggshell">
      <h2 className="text-3xl">Projects</h2>
      <div class="flex flex-wrap">
        {
          projects.map(project => <Card project={project}/>)
        }
      </div>
    </article>
    <Footer></Footer>
  </>
)

export default IndexPage
