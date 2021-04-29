import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import "./darkModeToggle.css"

class darkMode extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => {
          const ToggleIcons = () => {
            if(theme === 'light') {
              return (
                <div className={`dark-mode-light`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" preserveAspectRatio="xMidYMid meet" class="light-circle"><g fill="currentColor"><path d="M8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2Z"></path></g></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" preserveAspectRatio="xMidYMid meet" class="dark-circle"><g fill="currentColor"><path d="M8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2Z"></path></g></svg>
                </div>
              )
            } else {
              return (
                <div className={`dark-mode-dark`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" preserveAspectRatio="xMidYMid meet" class="dark-circle"><g fill="currentColor"><path d="M8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2Z"></path></g></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" preserveAspectRatio="xMidYMid meet" class="light-circle"><g fill="currentColor"><path d="M8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2Z"></path></g></svg>
                </div>
              )
            }
          }
          // Don't render anything at compile time. Deferring rendering until we
          // know which theme to use on the client avoids incorrect initial
          // state being displayed.
          if (theme == null) {
            return null
          }
          return (
            <label className="flex items-center justify-center dark-mode-toggle">
              <input
                type="checkbox"
                onChange={(e) =>
                  toggleTheme(e.target.checked ? 'dark' : 'light')
                }
                checked={theme === 'dark'}
              />{' '}
              {ToggleIcons()}
            </label>
          )
        }}
      </ThemeToggler>
    )
  }
}

export default darkMode