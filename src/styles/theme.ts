import { createTheme, type Shadows } from '@mui/material/styles'

const baseShadows: Shadows = [
  'none',
  '0 4px 12px rgba(188, 120, 100, 0.08)',
  '0 8px 30px rgba(0, 0, 0, 0.08)',
  ...Array(22).fill('0 8px 30px rgba(0,0,0,0.07)'),
] as Shadows

const theme = createTheme({
  palette: {
    primary: {
      main: '#D4AF37', // Gold
      light: '#F4E4BC',
      dark: '#B8941F',
    },
    secondary: {
      main: '#6B46C1', // Purple-blue for CTAs
      light: '#8B5CF6',
      dark: '#553C9A',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#6B7280',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    // Custom colors for dark sections
    mode: 'light',
  },
  typography: {
    fontFamily:
      '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.04em',
    },
  },
  shape: {
    borderRadius: 18,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 9999,
          paddingInline: '1.75rem',
          paddingBlock: '0.75rem',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#FDFBF8',
        },
      },
    },
  },
  shadows: baseShadows,
})

export default theme

