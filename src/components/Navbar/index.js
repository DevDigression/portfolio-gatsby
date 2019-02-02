import React from 'react'
import { Link as NavLink } from 'react-scroll'
import { Link } from 'gatsby'
import { propOr, pathOr } from 'ramda'
import NavIcon from '../../images/Nav-Icon.png'

const pageLinks = [
  { title: 'About Me', location: 'about' },
  { title: 'Projects', location: 'projects' },
  { title: 'Contact', location: 'contact' },
  { title: 'Blog', location: '/blog' },
]

class HomeNavbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav>
        <div className="landing-nav">
          <NavLink
            name="landing"
            to="landing"
            spy={true}
            smooth={true}
            duration={800}
          >
            <img className="nav-icon" src={NavIcon} />
          </NavLink>
        </div>
        <div className="landing-nav-mobile">
          <NavLink
            name="landing"
            to="landing"
            spy={true}
            smooth={true}
            duration={800}
          >
            <img className="nav-icon" src={NavIcon} />
          </NavLink>
        </div>
        <ul>
          {pageLinks.map(link => {
            const location = propOr(null, ['location'], link)
            const title = propOr(null, ['title'], link)
            return location.includes('/') ? (
              <li>
                <Link to={location} className={`${location.slice(1)}-nav`}>
                  {title}
                </Link>
              </li>
            ) : (
              <li>
                <NavLink
                  name={location}
                  className={`${location}-nav`}
                  to={location}
                  spy={true}
                  smooth={true}
                  duration={800}
                >
                  {title}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default HomeNavbar
