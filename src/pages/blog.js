import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { propOr, pathOr } from 'ramda'
import BlogNavbar from '../components/Navbar/blog'
import Header from '../components/Sections/Header'

const PostsSection = styled.div`
  margin: 100px auto 100px 300px;
  height: 100vh;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 100px auto;
    padding: 20px;
  }
`

const Blog = ({ data }) => {
  const blogPosts = pathOr([], ['allMarkdownRemark', 'edges'], data)
  return (
    <Layout>
      <BlogNavbar />
      <PostsSection>
        <SEO title="Blog" keywords={[`web development`, `gatsby`, `react`]} />
        <Header page="blog" />
        {blogPosts.map(item => {
          const post = propOr(null, ['node'], item)
          return (
            <div id="post">
              <h1>{post.frontmatter.title}</h1>
              <div>{post.excerpt}</div>
            </div>
          )
        })}
      </PostsSection>
    </Layout>
  )
}

export default Blog

export const blogQuery = graphql`
  query BlogPosts {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          excerpt
          frontmatter {
            path
            title
            author
            date
          }
        }
      }
    }
  }
`
