import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../app/store'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import { setArticleCount, fetchNews } from '../features/newsSlice'

function CurrentTime() {
  const now = new Date()
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      Current time: {now.toLocaleTimeString()}
    </Typography>
  )
}

interface FooterProps {
  description: string
  title: string
}

export default function Footer(props: FooterProps) {
  const { description, title } = props
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
        console.error('Error fetching article count', error)
      }
    }
    fetchArticleCount()
  }, [dispatch])

  return (
    <Box
      component={Paper}
      elevation={10}
      sx={{ bgcolor: '#F5F5F5', py: 1 }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {description}
        </Typography>
        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          gutterBottom
        >
          Number of articles: {articleCount}
        </Typography>
        <CurrentTime />
      </Container>
    </Box>
  )
}
