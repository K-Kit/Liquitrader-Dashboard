import React from "react"

import { ThemeProvider  } from '@material-ui/styles';
import {AppProvider} from "./src/context/appcontext"
import indigo from "@material-ui/core/es/colors/indigo"
import pink from "@material-ui/core/es/colors/pink"
import red from "@material-ui/core/es/colors/red"
import createMuiTheme from "./node_modules/@material-ui/core/es/styles/createMuiTheme"
import blue from "@material-ui/core/es/colors/blue"
import Paper from "./node_modules/@material-ui/core/Paper/Paper"
import CssBaseline from "@material-ui/core/CssBaseline"


export const wrapRootElement = ({ element }) => {
  console.log(element)
  return (
    <AppProvider>

      <CssBaseline />
        {element}
    </AppProvider>
  )
}
