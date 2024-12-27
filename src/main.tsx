import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle, darkTheme, lighTheme } from './styles/'
import { ThemeProvider } from 'styled-components'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={lighTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
