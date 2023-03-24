import { ThemeProvider, CssBaseline } from '@mui/material'
import Routing from './routes/Routing'

import theme from './themes/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routing />
    </ThemeProvider>
  )
}
