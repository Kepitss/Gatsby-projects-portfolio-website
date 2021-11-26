import React from "react"

import "normalize.css"
import "../styles/sass/main.scss"

const Layout = ({ children }) => {
  return (
    <div className="base">
      Layout component
      {children}
    </div>
  )
}

export default Layout
