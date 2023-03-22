import React from 'react'

import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@mui/material'

import { NewsArticle } from '../typings'

interface Props {
  news: NewsArticle
}

function NewsCard({ news }: Props) {
  const { title, description, url, urlToImage, publishedAt, source } =
    news
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} key={url}>
      <Card>
        {urlToImage && <img alt="thumbnail" src={urlToImage} />}
        <CardContent>
          <CardHeader
            title={<a href={url}>{title}</a>}
            subheader={source.name}
          />
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            component="p"
          >
            {new Date(publishedAt).toLocaleTimeString()},{' '}
            {new Date(publishedAt).toLocaleDateString()}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default NewsCard
