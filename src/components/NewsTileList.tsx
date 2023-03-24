import React, { useState } from 'react'

import { Grid, Pagination } from '@mui/material'

import { NewsArticle, NewsProps } from '../typings'

import NewsTileCard from './NewsTileCard'

export default function NewsTileList({ news }: NewsProps) {
  const [page, setPage] = useState(1)
  const articlesPerPage = 12

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value)
  }

  const startIndex = (page - 1) * articlesPerPage
  const endIndex = page * articlesPerPage
  const currentArticles = news.slice(startIndex, endIndex)

  return (
    <>
      <Grid container spacing={2}>
        {currentArticles.map((article: NewsArticle) => (
          <NewsTileCard news={article} key={article.title} />
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(news.length / articlesPerPage)}
        page={page}
        onChange={handleChangePage}
        color="primary"
        size="large"
        sx={{ mt: 4 }}
      />
    </>
  )
}
