import React from "react"
import { Link } from "gatsby"

import Seo from "../helper-components/Seo"

const Error = () => {
  return (
    <>
      <Seo title="Page not found" />
      <div className="error-page-container">
        <h1>Sorry but the page does not exist</h1>
        <Link to="/" className="home-btn">
          Return home
        </Link>
      </div>
    </>
  )
}

export default Error
