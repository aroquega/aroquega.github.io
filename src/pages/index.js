import React from "react"

import Layout from '../components/layout'
import Header from '../components/header'
import CVSection from '../components/cvsection'

const IndexPage = () => (
  <Layout>
    <Header/>
    <CVSection
      title="About me"
      content={
        `I am a software web developer. I live in Arequipa, Peru I work with
        javascript, react, and python.`
      }
    />
    <CVSection
      title="Education"
      content={
        `I'm currently studying at UNSA University.`
      }
    />
    <CVSection
      title="Languages"
      content={
        `I am a native spanish speaker, and I'm `
      }
    />
  </Layout>
)

export default IndexPage
