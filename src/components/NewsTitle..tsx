import React from 'react'
import { Grid } from '@mui/material'
import { NewsArticle } from '../typings'
import NewsCard from './NewsCard'

interface NewsTileProps {
  news: NewsArticle[]
}

export default function NewsTitle({ news }: NewsTileProps) {
  return (
    <Grid container spacing={2}>
      {news.map((article: NewsArticle) => (
        <NewsCard news={article} key={article.title} />
      ))}
    </Grid>
  )
}
