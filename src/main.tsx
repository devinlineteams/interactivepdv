import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle, darkTheme, lighTheme } from './styles/'
import { ThemeProvider } from 'styled-components'
import { UserSystemProvider } from './context/userSistemContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
        <UserSystemProvider>
         <App />
        </UserSystemProvider>
    </ThemeProvider>
  </StrictMode>,
)
