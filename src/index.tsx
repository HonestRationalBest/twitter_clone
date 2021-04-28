import React from 'react'
import ReactDOM from 'react-dom'
import { Theme } from 'styled-system'
import { ThemeProvider } from 'styled-components/macro'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles, ThemeConfig } from '../src/utils/Theme'

const theme: Theme = ThemeConfig
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
