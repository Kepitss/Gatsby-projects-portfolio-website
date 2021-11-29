import React, { useState } from "react"

import { ThemeToggler } from "gatsby-plugin-dark-mode"

const ThemeComponent = () => {
  const [icon, setIcon] = useState(false)
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label className="theme-btn">
          <input
            className="ckeckbox-element"
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            onClick={() => setIcon(!icon)}
            checked={theme === "dark"}
          />
          <span></span>
        </label>
      )}
    </ThemeToggler>
  )
}

export default ThemeComponent
