import { Container, Typography, useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const theme = useTheme()
  const { t } = useTranslation()

  return (
    <Container
      disableGutters
      maxWidth="sm"
      component="main"
      sx={{ pt: 18 }}
    >
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
        sx={{
          '& span': { color: theme.palette.secondary.main },
        }}
      >
        gn
        <span>News</span>
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="text.secondary"
        component="p"
      >
        {t('header.subtitle')}
      </Typography>
    </Container>
  )
}
