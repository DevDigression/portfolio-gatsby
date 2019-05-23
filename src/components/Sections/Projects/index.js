import React from 'react'
import { theme } from '../../../theme'
import styled from 'styled-components'
import { FluidContainer, Row, Column } from '../../Styles/grid'
import { ProjectData } from './data'

const Project = styled(Column)`
  border: 2px solid ${theme.colors.deepPink};
  .project-tech > ul {
    list-style: none;
    padding-left: 0;
    > li {
      display: inline;
    }
  }
`

const ImageColumn = styled(Column)`
  .project-image-mobile {
    display: none;
    @media (max-width: 768px) {
      display: block;
      width: 90%;
    }
  }
  .project-image-left,
  .project-image-right {
    display: block;
    width: 90%;
    @media (max-width: 768px) {
      display: none;
    }
  }
`

const TextColumn = styled(Column)`
  .project-tech {
    width: 100%;
    margin: 15px auto;
    color: #9a1750;
  }
`

const Projects = () => {
  return (
    <div id="projects" className="projects-page">
      <header>Projects</header>
      {ProjectData.map(project => {
        return (
          <Row>
            <Project
              width={9 / 10}
              my={[20, null, null, 50]}
              mx="auto"
              bg="#fff"
              color="#333"
            >
              <Row flexDirection={['column', null, null, 'row']}>
                <ImageColumn width={[1, null, null, 1 / 2]}>
                  <img
                    className={`project-image-${project.alignImages}`}
                    src={project.headerImage}
                  />
                  <img
                    className={`project-image-${project.alignImages}`}
                    src={project.appImage}
                  />
                  <img
                    className={`project-image-mobile`}
                    src={project.mobileImage}
                  />
                </ImageColumn>
                <TextColumn width={[1, null, null, 1 / 2]}>
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
                </TextColumn>
              </Row>
            </Project>
            <div className="clear" />
          </Row>
        )
      })}
    </div>
  )
}

export default Projects
