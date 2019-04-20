import React from 'react'
import { graphql, Link } from 'gatsby'
import { pathOr } from 'ramda'
import styled from 'styled-components'
import Markdown from '../../components/Markdown'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply } from '@fortawesome/free-solid-svg-icons'

library.add(faReply)

const PostPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 100px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`

const PostTitle = styled.h3`
  font-size: 48px;
  padding: 30px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const PostContent = styled(Markdown)`
  width: 80%;
  margin: 100px auto;
  > p {
    font-size: 24px;
    line-height: 2em;
    margin: 50px auto;
    > a {
      text-decoration: none;
      color: #9a1750;
      &:visited,
      &:active,
      &:focus {
        color: #9a1750;
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
  @media (max-width: 768px) {
    width: 100%;
    margin: 20px auto;
    > p {
      font-size: 18px;
      > img {
        max-width: 300px;
      }
    }
  }
`

const BackLink = styled(Link)`
  text-decoration: none;
  color: #5d001e;
  & hover {
    color: #5d001e;
  }
  & visited {
    color: #5d001e;
  }
`

const PostSingle = ({ data, pathContext }) => {
  const title = pathOr('', ['contentfulPost', 'postTitle'], data)
  const body = pathOr(
    '',
    ['contentfulPost', 'postBody', 'internal', 'content'],
    data
  )
  const fromPage = pathOr('', ['fromPage'], pathContext)
  const backToPage = fromPage === 1 ? `/blog` : `/blog/${fromPage}`

  return (
    <PostPage>
      <PostTitle>{title}</PostTitle>
      <PostContent value={body} />
      <BackLink to={backToPage}>
        <FontAwesomeIcon icon="reply" /> Back to Posts
      </BackLink>
    </PostPage>
  )
}

export default PostSingle

export const postQuery = graphql`
  query blogPost($postId: String!) {
    contentfulPost(contentful_id: { eq: $postId }) {
      contentful_id
      entryTitle
      postTitle
      postBody {
        internal {
          content
        }
      }
    }
  }
`
