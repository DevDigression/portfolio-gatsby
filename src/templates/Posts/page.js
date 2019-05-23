import React from 'react'
import styled from 'styled-components'
import Markdown from '../../components/Markdown'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { Link } from 'gatsby'
import { propOr, pathOr } from 'ramda'
import { theme } from '../../theme'
import { Text } from 'rebass'
import { Row, Column } from '../../components/Styles/grid'
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

const PostItem = styled(Column)`
  border: 2px solid ${theme.colors.deepPink};
  overflow: hidden;
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

const PostPageNav = styled(Row)`
  > a {
    text-decoration: none;
    color: ${theme.colors.deepRed};
    & hover {
      color: ${theme.colors.deepRed};
    }
    & visited {
      color: ${theme.colors.deepRed};
    }
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
      <Row justifyContent="center">
        <Column
          width={[9 / 10, null, null, 8 / 10]}
          my={100}
          ml={['auto', null, null, 300]}
          mr="auto"
          p={[15, null, null, 0]}
        >
          <SEO title="Blog" keywords={[`web development`, `gatsby`, `react`]} />
          <Header page="blog" />
          {blogPosts.map(item => {
            const post = propOr(null, ['node'], item)
            const publicationDate = post.slug.split('-')
            return (
              <Row>
                <PostItem
                  width={[1, null, null, 9 / 10]}
                  my={[30, null, null, 50]}
                  ml={['auto', null, null, 0]}
                  mr="auto"
                  p={50}
                  bg="#fff"
                  color="#333"
                >
                  <Row
                    flexDirection={['column', null, null, 'row']}
                    justifyContent={['center', null, null, 'space-between']}
                    alignItems="center"
                    px={3}
                  >
                    <Text as="h2" fontSize={[4, null, 5]}>
                      {post.postTitle}
                    </Text>
                    <Text as="span" color={theme.colors.deepPink}>
                      {Months[publicationDate[1]]} {publicationDate[2]},{' '}
                      {publicationDate[0]}
                    </Text>
                  </Row>
                  <PostExcerpt value={post.postExcerpt.internal.content} />
                  <PostLink to={`blog/${post.slug}`}>Read More</PostLink>
                </PostItem>
              </Row>
            )
          })}
          <PostPageNav
            justifyContent="space-between"
            pb={50}
            pt={[10, null, null, 0]}
            pr={[0, null, null, 110]}
          >
            {previousPage && (
              <Link
                to={
                  previousPagePath === 1 ? `/blog` : `/blog/${previousPagePath}`
                }
              >
                <FontAwesomeIcon icon="reply" /> Newer Posts
              </Link>
            )}
            {nextPage && (
              <Link to={`/blog/${nextPagePath}`}>
                Older Posts <FontAwesomeIcon icon="share" />
              </Link>
            )}
          </PostPageNav>
        </Column>
      </Row>
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
