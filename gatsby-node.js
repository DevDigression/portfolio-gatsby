const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const postTemplate = path.resolve('src/templates/Posts/index.js')

  return graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              id
              html
              frontmatter {
                path
                title
                author
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

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        // Context passes arguments to graphql query on each page
        // Path is already defined above as 'URL path' in Gatsby
        context: {
          author: node.frontmatter.author,
          title: node.frontmatter.title,
        },
      })
    })
  })
}
