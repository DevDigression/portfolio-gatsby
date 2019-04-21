const path = require('path')
const { propOr } = require('ramda')
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const blogPage = path.resolve('src/templates/Posts/page.js')
  const postTemplate = path.resolve('src/templates/Posts/index.js')

  return graphql(
    `
      {
        allContentfulPost(sort: { fields: [entryTitle], order: DESC }) {
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
    let firstPost = 0
    let lastPost = postsPerPage

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

      // Take posts for each page and create pages for them
      // based on slug from Contentful
      let pagePosts = posts.slice(firstPost, lastPost)

      pagePosts.forEach(({ node }) => {
        const postId = propOr('', ['contentful_id'], node)
        const slug = propOr('unknown', ['slug'], node)

        // index is still in scope to be used for fromPage
        // access to fromPage allows 'back' button from single post page
        createPage({
          path: `/blog/${slug}`,
          component: postTemplate,
          context: { postId, fromPage: index + 1 },
        })
      })
      firstPost += postsPerPage
      lastPost += postsPerPage
    })

    // Create page for each post with path based on published date
  })
}
