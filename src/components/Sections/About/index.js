import React from 'react'
import { Link } from 'gatsby'

const About = props => (
  <div id="about" className="about-page">
    <header>About Me</header>
    <div className="about-text">
      <p>
        Prior to working in software, I was a social studies teacher - as well
        as de facto tech support - at a small private school in South Florida.
      </p>
      <p>
        I enjoy learning as much - if not, more - than I enjoy teaching! My
        passion for learning can easily lead me to research and obsess over
        topics ranging from the development of utopian communities throughout
        mid-nineteenth-century America to the disappearance of shopping malls to
        the nuances of music subgenres. I appreciate great style, and I am
        always in pursuit of intellectual conversation!
      </p>
      <p>
        My interest in web development began in the mid-1990s when I created a
        webpage for my favorite video game of all time:{' '}
        <a href="https://en.wikipedia.org/wiki/Chrono_Trigger" target="_blank">
          Chrono Trigger
        </a>
        . Some twenty years later, after completing Bachelor's and Master's
        degrees in History, I began taking courses en route to obtaining a third
        degree in Computer Science. While being steered toward web development,
        I discovered and completed a Web Development Bootcamp with{' '}
        <a href="http://www.thinkful.com" target="_blank">
          Thinkful
        </a>
        , from which I learned the fundamentals of frontend and server-side
        development.
      </p>
      <p>
        I used my experience in education (both as a teacher and a student) to
        design several web applications which help to solve issues for students,
        teachers, coders, job-seekers, and all-of-the-above! (Please feel free
        to <a href="#projects">check them out!</a>)
      </p>
      <p>
        Getting involved in the local coding community has further combined my
        passion for learning and teaching. I was invited the host of a local
        coding meetup to{' '}
        <a href="https://www.youtube.com/watch?v=G9y3yJtEWYk" target="_blank">
          give a presentation
        </a>{' '}
        about the challenges faced by those learning to code in the present
        year. I was also fortunate enough to offer my skills as a participant in
        a{' '}
        <a
          href="https://palmbeachtech.org/2018-palm-beach-tech-hackathon/"
          target="_blank"
        >
          Hackathon
        </a>{' '}
        devoted to creating software which benefits the local county school
        district.
      </p>
      <p>
        Throughout my experience, I have also maintained a{' '}
        <Link to="/blog">blog</Link> to serve as a journal of my progress as
        well as to offer a bit of assistance to newcomers to the field. Feel
        free to <Link to="/blog">check it out</Link>!
      </p>
    </div>
  </div>
)

export default About
