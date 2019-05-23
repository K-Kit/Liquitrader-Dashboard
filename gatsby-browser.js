import React from "react"

import {StateProvider} from "./src/context"
import CssBaseline from "@material-ui/core/CssBaseline"


export const wrapRootElement = ({ element }) => {
  console.log(element)
  return (
    <StateProvider>

      <CssBaseline />
        {element}
    </StateProvider>
  )
}
