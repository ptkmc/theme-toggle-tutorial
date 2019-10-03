import React, { useState } from "react"

export const ThemeContext = React.createContext({
  name: "light",
  updateTheme: () => { },
})

export const ThemeProvider = ({ children }) => {
  const localTheme = localStorage.getItem("theme")
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  const [theme, setTheme] = useState(
    localTheme !== null ? localTheme : prefersDark ? "dark" : "light"
  )

  const updateTheme = theme => {
    localStorage.setItem("theme", theme)
    setTheme(theme)
  }

  return (
    <ThemeContext.Provider
      value={{
        name: theme,
        updateTheme: updateTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
