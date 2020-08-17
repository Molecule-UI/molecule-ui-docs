import React from "react"
import { Link } from "gatsby"
import NavbarStyles from "../../styles/Navbar.module.scss"

const NavbarItems = () => {
  return (
    <ul>
      <li>
        <Link to="/guidelines" activeClassName={NavbarStyles.active}>
          Guidelines
        </Link>
      </li>
      <li>
        <Link to="/components" activeClassName={NavbarStyles.active}>
          Components
        </Link>
      </li>
    </ul>
  )
}

export default NavbarItems
