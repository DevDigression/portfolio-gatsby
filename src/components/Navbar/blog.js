import React from 'react'
import { Link as NavLink } from 'react-scroll'
import { Link } from 'gatsby'
import { propOr, pathOr } from 'ramda'
import NavIcon from '../../images/Nav-Icon.png'

const pageLinks = [
  { title: 'About Me', location: '/#about' },
  { title: 'Projects', location: '/#projects' },
  { title: 'Contact', location: '/#contact' },
]

class BlogNavbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav>
        <div className="landing-nav">
          <NavLink
            name="blog-header"
            to="blog-header"
            spy={true}
            smooth={true}
            duration={800}
          >
            <img className="nav-icon" src={NavIcon} />
          </NavLink>
        </div>
        <div className="landing-nav-mobile">
          <NavLink
            name="blog-header"
            to="#blog-header"
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
              <li key={title}>
                <Link to={location} className={`${location.slice(1)}-nav`}>
                  {title}
                </Link>
              </li>
            ) : (
              <li key={title}>
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
          <li>
            <NavLink
              name="blog"
              className={`blog-nav active`}
              to="#"
              spy={true}
              smooth={true}
              duration={800}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default BlogNavbar
