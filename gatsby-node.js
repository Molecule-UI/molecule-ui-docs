const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const mdxTemplate = path.resolve("./src/Layouts/MdxLayout.js")
  const res = await graphql(`
    query {
      allMdx {
        nodes {
          slug
          frontmatter{
            route
          }
        }
      }
    }
  `)

  res.data.allMdx.nodes.forEach(node => {
    createPage({
      component: mdxTemplate,
      path: `/${node.frontmatter.route}/${node.slug}`,
      context: {
        slug: node.slug,
      },
    })
  })
}
