import React, {createContext, useContext, useReducer, useState} from 'react';
import { dashboard_placeholder } from "../data"
import {themes} from './theme'
import { MuiThemeProvider } from '@material-ui/core/styles';


// todo state management for LT API data
export const StateContext = createContext({theme: themes.dark});


export const StateProvider = ({children}) =>{
  const [theme,setTheme] = useState('dark')
  const [dashboard, updateDashboard] = useState(dashboard_placeholder)
  console.log(themes[theme], theme)
  return (
    <StateContext.Provider value={{
      theme: themes[theme],
      setTheme: setTheme,
      toggleDark: () => setTheme(theme === 'dark' ? 'light':"dark"),
      dashboard: dashboard,
      updateDashboard: updateDashboard,
    }}>
      <MuiThemeProvider theme={themes[theme]}>
        {children}
      </MuiThemeProvider>
    </StateContext.Provider>
)};

export const useStateValue = () => useContext(StateContext);
