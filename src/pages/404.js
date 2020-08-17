import React from "react"
import Default from "../components/Layout/Default"
import NotfoundStyles from "../styles/404.module.scss"
import { Link } from "gatsby"
const NotFound = () => {
  return (
    <Default>
      <div className={NotfoundStyles.container}>
        <div className={NotfoundStyles.errorContainer}>
          <div className={NotfoundStyles.errorCode}>
            <h1>404</h1>
            <h3>ERROR</h3>
          </div>
          <div className={NotfoundStyles.message}>
            <h1>That page doesn't exists</h1>
            <p>
              <span>Sorry</span>, the page you were looking for could not be
              found{" "}
            </p>
          </div>
        </div>
      </div>
    </Default>
  )
}

export default NotFound
