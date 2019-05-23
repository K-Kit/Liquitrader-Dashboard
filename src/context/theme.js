import MUIDataTable from "mui-datatables";
import { deepOrange, lightBlue, cyan, blue } from "@material-ui/core/colors"

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

export const themes = {
  light: createMuiTheme({
    palette: {
      type: 'light',
      primary: blue
    },
    overrides: {
      MUIDataTable: {
        root: {
          backgroundColor: "transparent"
        },
        paper: {
          boxShadow: "none"
        }
      },
    }
  }),
  dark: createMuiTheme({
    palette: {
      type: 'dark',
      primary: blue
    },
    overrides: {
      MUIDataTable: {
        root: {
          backgroundColor: "transparent"
        },
        paper: {
          boxShadow: "none"
        }
      },
    }
  })
}
