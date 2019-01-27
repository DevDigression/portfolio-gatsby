import React from 'react'
import { Link as NavLink, scroller } from 'react-scroll'
import { Link } from 'gatsby'
import { propOr, pathOr } from 'ramda'
import NavIcon from '../../images/Nav-Icon.png'

class Navbar extends React.Component {
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
    const pageLinks = pathOr([], ['links'], this.props)
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
            return (
              <li>
                <NavLink
                  name={propOr(null, ['location'], link)}
                  className={`${propOr(null, ['location'], link)}-nav`}
                  to={propOr(null, ['location'], link)}
                  spy={true}
                  smooth={true}
                  duration={1000}
                  // onClick={e => this.handleClick('about')}
                >
                  {propOr(null, ['title'], link)}
                </NavLink>
              </li>
            )
          })}
          <Link to="/blog" className="blog-nav">
            Blog
          </Link>
        </ul>
      </nav>
    )
  }
}

export default Navbar
