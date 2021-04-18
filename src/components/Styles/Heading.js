import React from "react"
import StylesStyles from "../../styles/Styles.module.scss"
const Heading = props => {
  const { children } = props
  return <h1 className={StylesStyles.heading}>{children}</h1>
}

export default Heading
