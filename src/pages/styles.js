import React from "react"
import Default from "../components/Layout/Default"
import StylesLayout from "../components/Styles/StylesLayout"
import { navigate } from "gatsby"
const styles = () => {
  return <Default>{navigate("/styles/getting-started")}</Default>
}

export default styles
