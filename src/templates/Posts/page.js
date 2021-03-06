import React from 'react'
import styled from 'styled-components'
import Markdown from '../../components/Markdown'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { Link } from 'gatsby'
import { propOr, pathOr } from 'ramda'
import { theme } from '../../theme'
import BlogNavbar from '../../components/Navbar/blog'
import Header from '../../components/Sections/Header'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply, faShare } from '@fortawesome/free-solid-svg-icons'

library.add(faReply, faShare)

const Months = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December',
}

const PostsSection = styled.div`
  margin: 100px auto 100px 300px;
  height: 100vh;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 100px auto;
    padding: 15px;
  }
`

const PostItem = styled.div`
  width: 90%;
  padding: 50px;
  height: auto;
  margin: 100px auto 100px 0;
  border: 2px solid ${theme.colors.deepPink};
  display: block;
  overflow: hidden;
  background-color: #fff;
  color: #333;
  @media (max-width: 768px) {
    width: 100%;
    margin: 30px auto;
  }
`

const PostTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 920px) {
    h2 {
      font-size: 22px;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const PostDate = styled.span`
  color: ${theme.colors.deepRed};
`

const PostExcerpt = styled(Markdown)`
  margin-top: 50px;
  > p {
    font-size: 18px;
    line-height: 1.25em;
    margin: 20px auto;
    > a {
      text-decoration: none;
      color: ${theme.colors.deepPink};
      &:visited,
      &:active,
      &:focus {
        color: ${theme.colors.deepPink};
      }
      > img {
        max-width: 100%;
        margin: 20px auto;
      }
    }
    > img {
      max-width: 100%;
      margin: 20px auto;
    }
  }
`

const PostLink = styled(Link)`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  margin-top: 20px;
  background-color: ${theme.colors.lightGrey};
  color: #9a1750;
  border: 2px solid ${theme.colors.deepPink};
  width: 100px;
  height: 30px;
  cursor: pointer;
  transition: all 0.7s;

  &:hover {
    background-color: ${theme.colors.deepPink};
    color: #e3e2df;
    border: 2px solid ${theme.colors.pink};
  }
`

const PostPageNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding-bottom: 50px;
  > .next-nav {
    margin-left: auto;
  }
  > a {
    text-decoration: none;
    color: #5d001e;
    & hover {
      color: ${theme.colors.deepRed};
    }
    & visited {
      color: ${theme.colors.deepRed};
    }
  }
  @media only screen and (max-width: 768px) {
    padding-top: 10px;
    margin: 0 auto;
  }
`

const BlogPage = ({ data, pathContext }) => {
  const page = pathOr(null, ['page'], pathContext)
  const blogPosts = pathOr([], ['posts', 'edges'], data)
  const previousPage = page !== 1
  const previousPagePath = page - 1
  const nextPage = pathOr(false, ['posts', 'pageInfo', 'hasNextPage'], data)
  const nextPagePath = page + 1
  return (
    <Layout>
      <BlogNavbar />
      <PostsSection>
        <SEO title="Blog" keywords={[`web development`, `gatsby`, `react`]} />
        <Header page="blog" />
        {blogPosts.map(item => {
          const post = propOr(null, ['node'], item)
          const publicationDate = post.slug.split('-')
          return (
            <PostItem key={item.id}>
              <PostTitle>
                <h2>{post.postTitle}</h2>
                <PostDate>
                  {Months[publicationDate[1]]} {publicationDate[2]},{' '}
                  {publicationDate[0]}
                </PostDate>
              </PostTitle>
              <PostExcerpt value={post.postExcerpt.internal.content} />
              <PostLink to={`blog/${post.slug}`}>Read More</PostLink>
            </PostItem>
          )
        })}
        <PostPageNav>
          {previousPage && (
            <Link
              className="previous-nav"
              to={
                previousPagePath === 1 ? `/blog` : `/blog/${previousPagePath}`
              }
            >
              <FontAwesomeIcon icon="reply" /> Newer Posts
            </Link>
          )}
          {nextPage && (
            <Link className="next-nav" to={`/blog/${nextPagePath}`}>
              Older Posts <FontAwesomeIcon icon="share" />
            </Link>
          )}
        </PostPageNav>
      </PostsSection>
    </Layout>
  )
}

export default BlogPage

export const postsQuery = graphql`
  query postsQuery($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      sort: { fields: [entryTitle], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      pageInfo {
        hasNextPage
      }
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
