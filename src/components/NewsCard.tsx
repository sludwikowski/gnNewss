import React from 'react'

import {
  Box,
  Card,
  CardMedia,
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
    <Grid item xs={12} sm={6} md={4} lg={3} key={url} spacing={4}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardMedia
          component="img"
          sx={{
            // 16:9
            pt: '56.25%',
          }}
          image={urlToImage ? urlToImage : undefined}
          alt="image"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <CardHeader
            variant="h5"
            component="h2"
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
        </CardContent>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          align={'center'}
        >
          {`${new Date(publishedAt).toLocaleTimeString()}, ${new Date(
            publishedAt
          ).toLocaleDateString()}`}
        </Typography>
      </Card>
    </Grid>
  )
}

export default NewsCard
