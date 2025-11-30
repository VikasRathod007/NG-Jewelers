import { Box, CircularProgress, Typography } from '@mui/material'

const LoadingScreen = () => (
  <Box
    sx={{
      minHeight: '50vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
    }}
  >
    <CircularProgress color="inherit" />
    <Typography variant="body2" color="text.secondary">
      Crafting your experience…
    </Typography>
  </Box>
)

export default LoadingScreen

