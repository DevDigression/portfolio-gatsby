import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/Sections/Hero'
import About from '../components/Sections/About'
import Projects from '../components/Sections/Projects'
import Contact from '../components/Sections/Contact'
import HomeNavbar from '../components/Navbar'

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    <HomeNavbar />
    <MainSection>
      <SEO title="Home" keywords={[`web development`, `gatsby`, `react`]} />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </MainSection>
  </Layout>
)

export default LandingPage
