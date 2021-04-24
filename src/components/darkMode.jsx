import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { ICONS } from "./constants"
import Icon from "./icon"

class darkMode extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => {
          // Don't render anything at compile time. Deferring rendering until we
          // know which theme to use on the client avoids incorrect initial
          // state being displayed.
          if (theme == null) {
            return null
          }
          return (
            <label className="flex items-center justify-center dark-mode-toggle dark:text-white">
              <input
                type="checkbox"
                onChange={(e) =>
                  toggleTheme(e.target.checked ? 'dark' : 'light')
                }
                checked={theme === 'dark'}
              />{' '}
              <Icon icon={ theme === 'dark' ? `${ICONS.SUN}` : `${ICONS.MOON}` } size="24" />
            </label>
          )
        }}
      </ThemeToggler>
    )
  }
}

export default darkMode