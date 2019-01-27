import React from 'react'
import { Link, scroller } from 'react-scroll'
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
    console.log(this.state)
  }

  render() {
    return (
      <nav>
        <div className="landing-nav">
          <Link
            name="landing"
            to="landing"
            spy={true}
            smooth={true}
            duration={1000}
            // onClick={e => this.handleClick('landing')}
          >
            <img className="nav-icon" src={NavIcon} />
          </Link>
        </div>
        <div className="landing-nav-mobile">
          <Link
            name="landing"
            to="landing"
            spy={true}
            smooth={true}
            duration={1000}
            // onClick={e => this.handleClick('landing')}
          >
            <img className="nav-icon" src={NavIcon} />
          </Link>
        </div>
        <ul>
          <li>
            <Link
              name="about"
              className={`about-nav`}
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              // onClick={e => this.handleClick('about')}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              name="projects"
              className={`projects-nav`}
              to="projects"
              spy={true}
              smooth={true}
              duration={1000}
              // onClick={e => this.handleClick('projects')}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              name="contact"
              className={`contact-nav`}
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              // onClick={e => this.handleClick('contact')}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
