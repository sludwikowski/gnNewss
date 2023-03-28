import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'

import { TileCardProps } from '../typings'
import ArticlePopup from './ArticlePopup'

export default function NewsTileCard({ news }: TileCardProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleCardClick = () => {
    setIsPopupOpen(true)
  }

  const handlePopupClose = () => {
    setIsPopupOpen(false)
  }

  const publishedDate = new Date(news.publishedAt).toLocaleString(
    'pl-PL',
    {
      hour: '2-digit',
      minute: '2-digit',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    }
  )

  const { t } = useTranslation()

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} key={news.url}>
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
          image={
            news.urlToImage || 'https://source.unsplash.com/random'
          }
          alt="image"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <CardHeader
            title={
              <Typography
                variant="h5"
                fontWeight={'bold'}
                color="secondary"
              >
                {news.title}
              </Typography>
            }
            subheader={
              <Typography variant="subtitle2" color="success">
                {news.source?.name || t('news.source')}
              </Typography>
            }
          />
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {news.description || t('news.description')}
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
