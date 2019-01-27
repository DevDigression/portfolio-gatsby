import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import './styles.css'
import Navbar from '../components/Navbar'

const pageLinks = [
  { title: 'About Me', location: 'about' },
  { title: 'Projects', location: 'projects' },
  { title: 'Contact', location: 'contact' },
]

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Navbar links={pageLinks} siteTitle={data.site.siteMetadata.title} />
        {children}
        {/* <Footer /> */}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
