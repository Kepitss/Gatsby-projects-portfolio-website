import React, { useState } from "react"

import "normalize.css"
import "../styles/sass/main.scss"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false)
  return (
    <div className="base">
      <Navbar sidebar={sidebar} setSidebar={setSidebar} />
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
