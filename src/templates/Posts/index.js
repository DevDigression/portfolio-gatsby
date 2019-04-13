import React from 'react'
import { graphql } from 'gatsby'
import { pathOr } from 'ramda'
import Markdown from '../../components/Markdown'

const PostTemplate = ({ data }) => {
  const title = pathOr('', ['contentfulPost', 'postTitle'], data)
  const body = pathOr(
    '',
    ['contentfulPost', 'postBody', 'internal', 'content'],
    data
  )

  return (
    <div>
      <h3>{title}</h3>
      <Markdown value={body} />
    </div>
  )
}

export default PostTemplate

export const postQuery = graphql`
  query blogPost($postId: String!) {
    contentfulPost(contentful_id: { eq: $postId }) {
      contentful_id
      postTitle
      postBody {
        internal {
          content
        }
      }
    }
  }
`
