import { CssBaseline, ThemeProvider } from '@mui/material'
import { StrictMode } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { createRoot } from 'react-dom/client'

import App from '@/App'
import '@/index.css'
import theme from '@/styles/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
)
