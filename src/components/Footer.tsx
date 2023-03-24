import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Box, Container, Paper, Typography } from '@mui/material'

import { RootState } from '../app/store'

interface FooterProps {
  description: string
  title: string
}

export default function Footer(props: FooterProps) {
  const { description, title } = props
  const [currentTime, setCurrentTime] = useState(new Date())
  const articleCount = useSelector(
    (state: RootState) => state.news.articleCount
  )

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
          {title} {description}
        </Typography>
        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          gutterBottom
        >
          Number of articles: {articleCount}
        </Typography>
        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          gutterBottom
        >
          Current time: {currentTime.toLocaleTimeString('Pl-pl')}
        </Typography>
      </Container>
    </Box>
  )
}
