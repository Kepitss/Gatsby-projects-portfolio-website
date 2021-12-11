import React from "react"
import { Link } from "gatsby"

const Error = () => {
  return (
    <div className="error-page-container">
      <h1>Sorry but the page does not exist</h1>
      <Link to="/" className="home-btn">
        Return home
      </Link>
    </div>
  )
}

export default Error
