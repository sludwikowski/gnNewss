import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'

import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider, CssBaseline } from '@mui/material'

import { store } from './app/store'

import App from './App'

import theme from './themes/theme'

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>
)
