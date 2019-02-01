import React from 'react'
import { Link as NavLink, scroller } from 'react-scroll'
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

    // this.state = {
    //   landing: false,
    //   about: false,
    //   projects: false,
    //   contact: false,
    // }

    this.handleClick = this.handleClick.bind(this)
  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    })
  }

  handleClick(link) {
    this.setState({ [link]: true })
    Object.keys(this.state).forEach(item => {
      if (item !== link) {
        this.setState({ [item]: false })
      }
    })
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
            duration={1000}
            // onClick={e => this.handleClick('landing')}
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
            duration={1000}
            // onClick={e => this.handleClick('landing')}
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
                  duration={1000}
                  // onClick={e => this.handleClick('about')}
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
              duration={1000}
              // onClick={e => this.handleClick('about')}
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
