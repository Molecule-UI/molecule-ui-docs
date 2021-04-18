import React from "react"
import { Link } from "gatsby"
import StylesNavbar from "../../../styles/Styles.module.scss"
const NavbarItem = props => {
  const { children, to } = props
  return (
    <div className={StylesNavbar.navBarItem}>
      <Link to={to} activeClassName={StylesNavbar.active}>
        {children}
      </Link>
    </div>
  )
}

export default NavbarItem
