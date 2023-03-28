import { Box, CircularProgress, Typography } from '@mui/material'

export default function Loader() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'white',
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <CircularProgress color="primary" size={70} />
        <Box mt={2}>
          <Typography variant="h5" color="text.primary">
            Loading...
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
