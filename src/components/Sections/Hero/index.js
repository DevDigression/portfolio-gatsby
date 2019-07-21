import React from 'react'
import styled from 'styled-components'
import BGVideo from '../../../video/pbjs-talk-bg-clip.mp4'

const HeroText = styled.p`
  font-size: 28px;
  width: 80%;
  padding: 20px;
  margin: 30px auto;
  color: #fff;
  z-index: 3;
  text-shadow: 1px 1px #333;
  @media (max-width: 768px) {
    margin: 0 auto;
    font-size: 24px;
    width: 90%;
    padding: 0 20px 100px 20px;
    color: #fff;
    z-index: 2;
  }
  @media (max-width: 400px) {
    font-size: 20px;
  }
`

const Hero = props => {
  return (
    <div id="landing" className="landing-page landing-container">
      <div className="landing-video">
        <video autoPlay muted loop playsInline>
          <source src={BGVideo} type="video/mp4" />
        </video>
      </div>
      <div className="landing-video-overlay" />
      <HeroText>
        Hello, World! My name is Chris, and I am a web developer currently
        located in South Florida. I have a background in teaching, yet I
        simultaneously and continuously hold the position of student. I am
        always looking to expand my knowledge and to grow as a developer with
        the aim of creating software that benefits everyone involved in the
        process!
      </HeroText>
    </div>
  )
}

export default Hero
