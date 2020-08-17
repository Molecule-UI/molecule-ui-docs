const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const mdxTemplate = path.resolve("./src/Layouts/MdxLayout.js")
  const res = await graphql(`
    query {
      allMdx {
        nodes {
          slug
        }
      }
    }
  `)

  res.data.allMdx.nodes.forEach(node => {
    createPage({
      component: mdxTemplate,
      path: `/guideline/${node.slug}`,
      context: {
        slug: node.slug,
      },
    })
  })
}
