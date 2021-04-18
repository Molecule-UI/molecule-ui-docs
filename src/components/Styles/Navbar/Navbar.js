import React from "react"
import NavbarItem from "./NavbarItem"
import StylesNavbar from "../../../styles/Styles.module.scss"
const Navbar = () => {
  return (
    <div className={StylesNavbar.navBar}>
      <NavbarItem to="/styles/getting-started">Getting Started</NavbarItem>
      <NavbarItem to="/styles/margin">Margin</NavbarItem>
    </div>
  )
}

export default Navbar
