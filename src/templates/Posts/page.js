import React from 'react'
import styled from 'styled-components'
import Markdown from '../../components/Markdown'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { Link } from 'gatsby'
import { propOr, pathOr } from 'ramda'
import BlogNavbar from '../../components/Navbar/blog'
import Header from '../../components/Sections/Header'

const PostsSection = styled.div`
  margin: 100px auto 100px 300px;
  height: 100vh;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 100px auto;
    padding: 20px;
  }
`

const PostItem = styled.div`
  width: 90%;
  padding: 50px;
  height: auto;
  margin: 100px auto 100px 0;
  border: 2px solid #9a1750;
  display: block;
  overflow: hidden;
  background-color: #fff;
  color: #333;
  @media (max-width: 768px) {
    margin: 100px auto;
  }
`

const PostTitle = styled.h2``

const PostExcerpt = styled.p`
  margin-top: 20px;
`

const PostLink = styled(Link)`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  margin-top: 20px;
  background-color: #e3e2df;
  color: #9a1750;
  border: 2px solid #9a1750;
  width: 100px;
  height: 30px;
  cursor: pointer;
  transition: all 0.7s;

  &:hover {
    background-color: #9a1750;
    color: #e3e2df;
    border: 2px solid #ee4c7c;
  }
`

const Blog = ({ data }) => {
  console.log(data)
  const blogPosts = pathOr([], ['posts', 'edges'], data)
  return (
    <Layout>
      <BlogNavbar />
      <PostsSection>
        <SEO title="Blog" keywords={[`web development`, `gatsby`, `react`]} />
        <Header page="blog" />
        {blogPosts.map(item => {
          const post = propOr(null, ['node'], item)
          console.log(post)
          return (
            <PostItem>
              <PostTitle>{post.postTitle}</PostTitle>
              <PostExcerpt>
                <Markdown value={post.postExcerpt.internal.content} />
              </PostExcerpt>
              <PostLink to={`blog/${post.slug}`}>Read More</PostLink>
            </PostItem>
          )
        })}
      </PostsSection>
    </Layout>
  )
}

export default Blog

export const postsQuery = graphql`
  query postsQuery($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      sort: { fields: [entryTitle], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          entryTitle
          slug
          postTitle
          postBody {
            internal {
              content
            }
          }
          postExcerpt {
            internal {
              content
            }
          }
        }
      }
    }
  }
`
