import React from "react"

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <small>
          &copy; Copyright <span>{new Date().getFullYear()}</span>, Mārtiņš
          Ķepīts
        </small>
      </footer>
    </>
  )
}

export default Footer
