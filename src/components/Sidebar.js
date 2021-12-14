import React from "react"
import { Link } from "gatsby"
import { IoMdClose } from "react-icons/io"

const Sidebar = ({ sidebar, setSidebar }) => {
  return (
    <div className={`sidebar ${sidebar ? "sidebar-show" : "sidebar-hide"}`}>
      <IoMdClose className="close-btn" onClick={() => setSidebar(!sidebar)} />

      <div className="sidebar-links">
        <Link
          className="sidebar-link"
          to="/"
          onClick={() => setSidebar(!sidebar)}
        >
          Home
        </Link>
        <Link
          className="sidebar-link"
          to="/projects"
          onClick={() => setSidebar(!sidebar)}
        >
          Projects
        </Link>
        <Link
          className="sidebar-link"
          to="/about"
          onClick={() => setSidebar(!sidebar)}
        >
          About
        </Link>
        <Link
          className="sidebar-link"
          to="/contact"
          onClick={() => setSidebar(!sidebar)}
        >
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
