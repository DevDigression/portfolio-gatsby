import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'

const MainSection = styled.div`
  min-width: 80%;
  margin-left: 200px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 100px;
  }
`

const LandingPage = () => (
  <Layout>
    <MainSection>
      <SEO title='Home' keywords={[`web development`, `gatsby`, `react`]} />
      <Hero />
      <About />
    </MainSection>
  </Layout>
)

export default LandingPage
