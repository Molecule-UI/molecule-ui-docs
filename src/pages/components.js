import React from "react"
import Default from "../components/Layout/Default"
import CommonStyles from "../styles/Icons.module.scss"
import ComponentStyles from "../styles/Components.module.scss"

const components = () => {
  return (
    <Default>
      <div className={CommonStyles.container}>
        <h1 className={ComponentStyles.heading}>Components</h1>

        <iframe
          style={{ width: "100%", height: "90vh" }}
          src="https://moleculereact.rushildhinoja.me/"
          frameborder="0"
        ></iframe>
      </div>
    </Default>
  )
}

export default components
