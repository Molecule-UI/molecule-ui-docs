import React from "react"
import MDXStyles from "../styles/MDXLayot.module.scss"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { graphql } from "gatsby"
import Default from "../components/Layout/Default"
export const query = graphql`
  query($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
    }
  }
`

const MdxLayout = ({ data }) => {
  return (
    <Default>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Default>
  )
}

export default MdxLayout
