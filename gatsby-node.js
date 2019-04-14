const path = require('path')
const { propOr } = require('ramda')
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const blogPage = path.resolve('src/templates/Posts/page.js')
  const postTemplate = path.resolve('src/templates/Posts/index.js')

  return graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              contentful_id
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
  ).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    // Create pages with path /blog/# based on number of posts
    // List posts on each page based on postsPerPage var
    const posts = res.data.allContentfulPost.edges
    const postsPerPage = 6
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/blog` : `/blog/${index + 1}`,
        component: blogPage,
        context: {
          page: index + 1,
          limit: postsPerPage,
          skip: index * postsPerPage,
        },
      })
    })
    // Create page for each post with path based on published date
    res.data.allContentfulPost.edges.forEach(({ node }) => {
      const postId = propOr('', ['contentful_id'], node)
      const slug = propOr('unknown', ['slug'], node)

      createPage({
        path: `/blog/${slug}`,
        component: postTemplate,
        context: { postId: postId },
      })
    })
  })
}
