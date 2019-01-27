import React from 'react'
import { pathOr } from 'ramda'
import { ProjectData } from './data'

const Projects = () => {
  return (
    <div id="projects" className="projects-page">
      <header>Projects</header>
      {ProjectData.map(project => {
        return (
          <>
            <div className="project">
              <div className={`project-image ${project.alignImages}`}>
                <img
                  className={`project-image-${project.alignImages} ${
                    project.alignImages
                  }`}
                  src={project.headerImage}
                />
                <img
                  className={`project-image-${project.alignImages} ${
                    project.alignImages
                  }`}
                  src={project.appImage}
                />
                <img
                  className={`project-image-mobile`}
                  src={project.mobileImage}
                />
              </div>
              <div className="project-description right">
                <h2>{project.title}</h2>
                <div className="project-tech">
                  <ul>
                    <li>
                      <strong>{project.technologies[0]}</strong>
                    </li>
                    <li> | </li>
                    <li>
                      <strong>{project.technologies[1]}</strong>
                    </li>
                    <li> | </li>
                    <li>
                      <strong>{project.technologies[2]}</strong>
                    </li>
                  </ul>
                </div>
                <p>{project.description1}</p>
                <p>{project.description2}</p>
                <div className="project-links">
                  <a href={project.liveLink} target="_blank">
                    <button>Live</button>
                  </a>
                  <a href={project.codeLink} target="_blank">
                    <button>Code</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="clear" />
          </>
        )
      })}
    </div>
  )
}

export default Projects
