import React, { useMemo, useState } from 'react'

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
import ArticlePopup from './ArticlePopup'

interface Props {
  news: NewsArticle
}

function NewsTileCard({ news }: Props) {
  const { title, description, url, urlToImage, publishedAt, source } =
    news

  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const publishedDate = useMemo(() => {
    return `${new Date(publishedAt).toLocaleTimeString(
      'pl-PL'
    )}, ${new Date(publishedAt).toLocaleDateString('pl-PL')}`
  }, [publishedAt])

  const handleCardClick = () => {
    setIsPopupOpen(true)
  }

  const handlePopupClose = () => {
    setIsPopupOpen(false)
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} key={url}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
        }}
        onClick={handleCardClick}
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
              <Typography
                variant="h5"
                fontWeight={'bold'}
                color="secondary"
              >
                {title}
              </Typography>
            }
            subheader={
              <Typography variant="subtitle2" color="success">
                {source.name}
              </Typography>
            }
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
      <ArticlePopup
        visible={isPopupOpen}
        onClose={handlePopupClose}
        article={news}
      />
    </Grid>
  )
}

export default NewsTileCard
