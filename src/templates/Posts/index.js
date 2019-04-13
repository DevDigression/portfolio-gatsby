import React from 'react'
import { graphql } from 'gatsby'

const PostTemplate = data => {
  return <div>POST CONTENT</div>
}

export default PostTemplate

// export const pageQuery = graphql`
//   query postsQuery {
//     posts: allContentfulPosts {
//       edges {
//         node {
//           entryTitle
//         }
//       }
//     }
//   }
// `
