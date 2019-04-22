import React from "react"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from "@material-ui/core/es/colors/red"

import { ThemeProvider, } from '@material-ui/styles';
import { deepOrange, lightBlue, cyan, blue } from "@material-ui/core/colors"

const themes = {
  light: createMuiTheme({
    palette: {
      type: 'light',
      primary: blue
    },
  }),
  dark: createMuiTheme({
    palette: {
      type: 'dark',
      primary: blue
    },
  })
}

const defaultState = {
  dark: false,
  toggleDark: () => {},
}

const AppContext = React.createContext(defaultState)

// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true

class AppProvider extends React.Component {
  state = {
    dark: false,
    theme: themes.dark
  }

  toggleDark = () => {
    let dark = !this.state.dark
    localStorage.setItem("dark", JSON.stringify(dark))
    this.setState({ theme: dark ? themes.dark: themes.light, dark })
  }

  componentDidMount() {
    // Getting dark mode value from localStorage!
    const lsDark = JSON.parse(localStorage.getItem("dark"))
    if (lsDark) {
      this.setState({ dark: lsDark })
    } else if (supportsDarkMode()) {
      this.setState({ dark: true })
    }
  }

  render() {
    const { children } = this.props
    const { dark, theme } = this.state
    return (
      <AppContext.Provider
        value={{
          dark,
          toggleDark: this.toggleDark,
          theme
        }}
      >
        {/* todo fix needing 2 theme providers, it seems the mui componants */}
        <MuiThemeProvider theme={this.state.theme} >
            {children}
        </MuiThemeProvider>
      </AppContext.Provider>
    )
  }
}

export default AppContext

export { AppProvider }
