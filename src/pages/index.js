import React from "react"
import Header from "../components/HomePage/Header"
import Main from "../components/HomePage/Main"
import Default from "../components/Layout/Default"
import { Helmet } from "react-helmet"
const index = () => {
  return (
    <>
      <Helmet title={"Molecule"} />
      <Default>
        <Header />
        <Main />
      </Default>
    </>
  )
}

export default index
