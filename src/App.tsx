import { ThemeProvider, CssBaseline } from '@mui/material'
import Routing from './routes/Routing'

import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'

import theme from './themes/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <CssBaseline />
        <Routing />
      </I18nextProvider>
    </ThemeProvider>
  )
}
