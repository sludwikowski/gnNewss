import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Box, Container, Paper, Typography } from '@mui/material'

import { RootState } from '../app/store'
import { setArticleCount } from '../features/newsSlice'

interface FooterProps {
  description: string
  title: string
}

export default function Footer(props: FooterProps) {
  const { description, title } = props
  const [currentTime, setCurrentTime] = useState(new Date())
  const dispatch = useDispatch()
  const articleCount = useSelector(
    (state: RootState) => state.news.articleCount
  )

  useEffect(() => {
    const fetchArticleCount = async () => {
      try {
        const APP_KEY = import.meta.env.VITE_APP_KEY
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=pl&pageSize=1&apiKey=${APP_KEY}`
        )
        const data = await response.json()
        const totalResults = data.totalResults
        dispatch(setArticleCount(totalResults))
      } catch (error) {
        return <div>Error fetching article count</div>
      }
    }
    fetchArticleCount()
  }, [dispatch])

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
          Current time: {currentTime.toLocaleTimeString()}
        </Typography>
      </Container>
    </Box>
  )
}
