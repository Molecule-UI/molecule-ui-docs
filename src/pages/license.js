import React from "react"
import Default from "../components/Layout/Default"
import LicenseStyles from "../styles/License.module.scss"
import { graphql, useStaticQuery } from "gatsby"
const License = () => {
  const html = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { id: { eq: "license" } }) {
        html
      }
    }
  `)

  return (
    <Default>
      <div className={LicenseStyles.license}>
        <div
          dangerouslySetInnerHTML={{ __html: html.markdownRemark.html }}
        ></div>
      </div>
    </Default>
  )
}

export default License
