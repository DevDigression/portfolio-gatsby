import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faFacebook,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faEnvelope, faGithub, faFacebook, faTwitter, faLinkedinIn)

const Contact = props => {
  return (
    <div name="contact" id="contact" className="contact-page">
      <header>Contact</header>
      <div className="contact-text">
        <p>
          I am currently open to opportunities to help create software for you,
          your business, or others who may benefit! Please feel free to contact
          me at any of the outlets available below - I am eager to talk more
          about my experience as well as what I have to offer you as a
          developer!
        </p>
      </div>
      <div className="contact-icons">
        <a href="https://github.com/DevDigression" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <a
          href="https://www.linkedin.com/in/chrisrodgers-webdev/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="3x" />
        </a>
        <a href="https://twitter.com/devdigression" target="_blank">
          <FontAwesomeIcon icon={faTwitter} size="3x" />
        </a>
        <a
          href="https://www.facebook.com/people/Chris-Rodgers/100015523357713"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebook} size="3x" />
        </a>
        <a href="mailto:carodgers@cybercoast.com" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} size="3x" />
        </a>
      </div>
      <div className="contact-icons-mobile">
        <a href="https://github.com/DevDigression" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/chrisrodgers-webdev/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://twitter.com/devdigression" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.facebook.com/people/Chris-Rodgers/100015523357713"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="mailto:carodgers@cybercoast.com" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  )
}

export default Contact
