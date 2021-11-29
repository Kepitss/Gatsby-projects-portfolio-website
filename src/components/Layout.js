import React, { useState } from "react"

import "normalize.css"
import "../styles/sass/main.scss"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false)
  return (
    <div className="base">
      <Navbar sidebar={sidebar} setSidebar={setSidebar} />
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      {children}
    </div>
  )
}

export default Layout
