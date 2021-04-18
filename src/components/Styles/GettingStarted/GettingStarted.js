import React from "react"
import Navbar from "../Navbar/Navbar"
import StylesLayout from "../StylesLayout"
import Styles from "./GettingStarted.module.scss"
import GlobalStyles from "../../../styles/Styles.module.scss"
import Heading from "../Heading"
import Highlight, { defaultProps } from "prism-react-renderer"
import { CodeBlock, dracula } from "react-code-blocks"
const GettingStarted = () => {
  return (
    <StylesLayout>
      <Navbar />
      <main className={`${GlobalStyles.subContainer} ${Styles.main}`}>
        <Heading>Getting Started</Heading>
        <CodeBlock
          text={"npm i @molecule-ui/styles"}
          theme={dracula}
          wrapLines
        />
      </main>
    </StylesLayout>
  )
}

export default GettingStarted
