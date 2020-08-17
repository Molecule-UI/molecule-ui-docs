import React from "react"
import { Link } from "gatsby"
import FooterStyles from "../../styles/Footer.module.scss"
const Footer = () => {
  return (
    <div className={FooterStyles.footer}>
      <div>
        <Link to="/license">License</Link>
        <a
          rel="noreferrer"
          href="https://twitter.com/MoleculeUi"
          target="_blank"
        >
          Twitter
        </a>
        <a
          rel="noreferrer"
          href="https://www.instagram.com/molecule.ui/"
          target="_blank"
        >
          Instagram
        </a>
      </div>
      <p> &copy; 2020, Molecule UI</p>
    </div>
  )
}

export default Footer
