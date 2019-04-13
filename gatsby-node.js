const path = require('path')
const { propOr } = require('ramda')
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const postTemplate = path.resolve('src/templates/Posts/index.js')

  return graphql(
    `
      {
        allContentfulPost {
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
            }
          }
        }
      }
    `
  ).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allContentfulPost.edges.forEach(({ node }) => {
      const slug = propOr('unknown', ['slug'], node)

      createPage({
        path: `/blog/${slug}`,
        component: postTemplate,
        // Context passes arguments to graphql query on each page
        // Path is already defined above as 'URL path' in Gatsby
        context: {},
      })
    })
  })
}
