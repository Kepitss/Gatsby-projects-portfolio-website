import React from "react"
import { Link } from "gatsby"
import { SiMaterialdesign } from "react-icons/si"
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-content">
        {/* Links in left side */}
        <div className="nav-left-buttons">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
        </div>

        {/* Navbar logo */}
        <Link to="/" className="nav-logo">
          <SiMaterialdesign />
        </Link>

        {/* Links in right side */}
        <div className="nav-right-buttons">
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </div>
      </div>

      {/* hamburger button */}
      <GiHamburgerMenu
        className="nav-ham-icon"
        onClick={() => setSidebar(!sidebar)}
      />
    </div>
  )
}

export default Navbar
