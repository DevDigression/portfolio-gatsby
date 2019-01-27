import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='projects-page'>
      <header>Projects</header>
      <div className='project'>
        <div className='project-image left'>
          <img className='project-image-left left' src='' />
          <img className='project-image-left left' src='' />
          <img className='project-image-mobile' src='' />
        </div>
        <div className='project-description right'>
          <h2>Apply Yourself</h2>
          <div className='project-tech'>
            <ul>
              <li>
                <strong>React</strong> + <strong>Redux</strong>
              </li>
              <li> | </li>
              <li>
                <strong>Node</strong> + <strong>Express</strong>
              </li>
              <li> | </li>
              <li>
                <strong>MongoDB</strong> + <strong>Mongoose</strong>
              </li>
            </ul>
          </div>
          <p>
            Finding a job can be its own job! As coders and job seekers, we know
            all too well the laborious task of searching job postings, editing
            resumes and cover letters and trying to remember which company was
            sent which copy and what interview was scheduled when!
          </p>
          <p>
            Apply Yourself takes care of the drudgery of monitoring job
            prospects from beginning to end by keeping all aspects collected and
            organized, with a particular emphasis on the elements related to
            coding jobs!
          </p>
          <div className='project-links'>
            <a href='https://apply-yourself.netlify.com/' target='_blank'>
              <button>Live</button>
            </a>
            <a
              href='https://github.com/DevDigression/apply-yourself-client'
              target='_blank'
            >
              <button>Code</button>
            </a>
          </div>
        </div>
      </div>
      <div className='clear' />
      <div className='project'>
        <div className='project-image right'>
          <img className='project-image-right right' src='' />
          <img className='project-image-right right' src='' />
          <img className='project-image-mobile' src='' />
        </div>
        <div className='project-description left'>
          <h2>Studyficient</h2>
          <div className='project-tech'>
            <ul>
              <li>
                <strong>Node</strong> + <strong>Express</strong>{' '}
              </li>
              <li>|</li>
              <li>
                {' '}
                <strong>MongoDB</strong> + <strong>Mongoose</strong>{' '}
              </li>
              <li>|</li>
              <li>
                {' '}
                <strong>Bootstrap</strong>
              </li>
            </ul>
          </div>
          <p>
            Distractions are everywhere! Studyficient is an app that helps you
            to eliminate them and maintain focus by allowing you to keep all of
            your study materials in one place, and in the form that is most
            helpful to you!
          </p>
          <p>
            {' '}
            Studyficient takes into account different learning styles by
            allowing you to use written notes combined with videos for lecture
            material or other content you find helpful. Just as importantly,
            Studyficient keeps you organized by allowing you to categorize and
            arrange your notes and videos by subject.
          </p>
          <div className='project-links'>
            <a href='https://studyficient.herokuapp.com/' target='_blank'>
              <button>Live</button>
            </a>
            <a
              href='https://github.com/DevDigression/Studyficient'
              target='_blank'
            >
              <button>Code</button>
            </a>
          </div>
        </div>
      </div>
      <div className='clear' />
      <div className='project'>
        <div className='project-image left'>
          <img className='project-image-left left' src='' />
          <img className='project-image-left' src='' />
          <img
            className='project-image-mobile'
            src='http://devdigression.com/wp-content/uploads/2017/11/Featured-Image-Be-There.png'
          />
        </div>
        <div className='project-description right'>
          <h2>
            Be <em>There</em> - For Your Career
          </h2>
          <div className='project-tech'>
            <ul>
              <li>
                <strong>D3.js</strong>{' '}
              </li>
              <li>|</li>
              <li>
                {' '}
                <strong>Javascript</strong> + <strong>jQuery</strong>{' '}
              </li>
              <li>|</li>
              <li>
                {' '}
                <strong>HTML5</strong>{' '}
              </li>
              <li>|</li>
              <li>
                {' '}
                <strong>CSS3</strong>{' '}
              </li>
            </ul>
          </div>
          <p>
            Planning to enter a new career field? Looking to change things up a
            bit in your current field? This app will help you do either (or
            both)! Be There allows you to search for a career field and receive
            data about the best locations for that field based on the number of
            jobs available – including the states and cities with the most jobs.
          </p>
          <p>
            Additionally, you can enter your current job title in order to find
            related jobs, along with related statistics such as the number of
            jobs available and median salary. Links are provided for each job
            title in order to browse the job listings over at Glassdoor.
          </p>
          <div className='project-links'>
            <a href='https://devdigression.github.io/Be-There/' target='_blank'>
              <button>Live</button>
            </a>
            <a href='https://github.com/DevDigression/Be-There' target='_blank'>
              <button>Code</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
