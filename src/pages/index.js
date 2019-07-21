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
  margin: 50px auto 100px 200px;
  height: 100vh;
  @media (max-width: 768px) {
    width: 100%;
    margin: 100px auto;
    padding: 15px;
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
