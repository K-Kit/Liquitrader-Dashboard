import React from "react"

import { ThemeProvider  } from '@material-ui/styles';
import {AppProvider} from "./src/context/appcontext"
import indigo from "@material-ui/core/es/colors/indigo"
import pink from "@material-ui/core/es/colors/pink"
import red from "@material-ui/core/es/colors/red"
import createMuiTheme from "./node_modules/@material-ui/core/es/styles/createMuiTheme"
import blue from "@material-ui/core/es/colors/blue"
import Paper from "./node_modules/@material-ui/core/Paper/Paper"

// const theme = createMuiTheme({
//   palette: {
//     type: "dark",
//     primary: red,
//     secondary: blue,
//     error: red,
//     background: {paper: "blue"},
//     // Used by `getContrastText()` to maximize the contrast between the background and
//     // the text.
//     contrastThreshold: 3,
//     // Used to shift a color's luminance by approximately
//     // two indexes within its tonal palette.
//     // E.g., shift from Red 500 to Red 300 or Red 700.
//     tonalOffset: 0.2,
//   },
// })

export const wrapRootElement = ({ element }) => {
  console.log(element)
  const theme = createMuiTheme();
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        {element}
      </ThemeProvider>
    </AppProvider>
  )
}
