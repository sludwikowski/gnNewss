import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Box, Container, Paper, Typography } from '@mui/material'

import { useTranslation } from 'react-i18next'

import { RootState } from '../app/store'

import { FooterProps } from '../typings'
export default function Footer(props: FooterProps) {
  const { title } = props
  const [currentTime, setCurrentTime] = useState(new Date())
  const articleCount = useSelector(
    (state: RootState) => state.news.articleCount
  )
  const { t } = useTranslation()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Box
      component={Paper}
      elevation={10}
      sx={{ bgcolor: '#F5F5F5', py: 1 }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          gutterBottom
        >
          {t('footer.count')} {articleCount}
        </Typography>
        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          gutterBottom
        >
          {t('footer.time')} {currentTime.toLocaleTimeString('Pl-pl')}
        </Typography>
      </Container>
    </Box>
  )
}
