import React from "react"
import Navbar from "../Navbar/Navbar"
import StylesLayout from "../StylesLayout"
import Styles from "./Margin.module.scss"
import GlobalStyles from "../../../styles/Styles.module.scss"
import Heading from "../Heading"
const Margin = () => {
  return (
    <StylesLayout>
      <Navbar />
      <main className={`${GlobalStyles.subContainer} ${Styles.main}`}>
        <Heading>Margin</Heading>
      </main>
    </StylesLayout>
  )
}

export default Margin
