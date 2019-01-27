import React from 'react'
import BGVideo from '../../../video/pbjs-talk-bg-clip.mp4'

const Hero = props => {
  return (
    <div id='landing' className='landing-page landing-container'>
      <div className='landing-video'>
        <video autoPlay muted loop playsInline>
          <source src={BGVideo} type='video/mp4' />
        </video>
      </div>
      <div className='landing-video-overlay' />
      <div className='landing-text'>
        <p>
          Hello, World! My name is Chris, and I am a web developer currently
          located in South Florida. I have a background in teaching, yet I
          simultaneously and continuously hold the position of student. I am
          always looking to expand my knowledge and to grow as a developer with
          the aim of creating software that benefits everyone involved in the
          process!
        </p>
      </div>
    </div>
  )
}

export default Hero
