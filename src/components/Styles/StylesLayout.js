import React from "react"
import StylesStyles from "../../styles/Styles.module.scss"
import Navbar from "./Navbar/Navbar"
import { Helmet } from "react-helmet"
const Main = props => {
  const { children } = props
  return (
    <>
      <Helmet title={"Molecule | Styles"} />
      <div className={StylesStyles.container}>{children}</div>
    </>
  )
}

export default Main
