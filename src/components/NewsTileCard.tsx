import React, { useMemo } from 'react'

import {
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Grid,
  Link,
  Typography,
} from '@mui/material'

import { NewsArticle } from '../typings'

interface Props {
  news: NewsArticle
}

function NewsTileCard({
  news: { title, description, url, urlToImage, publishedAt, source },
}: Props) {
  const publishedDate = useMemo(() => {
    return `${new Date(publishedAt).toLocaleTimeString(
      'pl-PL'
    )}, ${new Date(publishedAt).toLocaleDateString('pl-PL')}`
  }, [publishedAt])

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} key={url}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardMedia
          sx={{ maxHeight: '200px', objectFit: 'cover' }}
          component="img"
          image={urlToImage || 'https://source.unsplash.com/random'}
          alt="image"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <CardHeader
            variant="h5"
            component="h2"
            title={
              <Link color="secondary" href={url}>
                {title}
              </Link>
            }
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
          {publishedDate}
        </Typography>
      </Card>
    </Grid>
  )
}

export default NewsTileCard
