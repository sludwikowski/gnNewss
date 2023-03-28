import React, { useState } from 'react'
import { Box, Grid, Pagination } from '@mui/material'
import { NewsArticle, NewsProps } from '../typings'
import NewsTileCard from './NewsTileCard'

interface PaginationProps {
  page: number
  articlesPerPage: number
  totalArticles: number
  onChangePage: (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => void
}

function PaginationBar({
  page,
  articlesPerPage,
  totalArticles,
  onChangePage,
}: PaginationProps) {
  const pageCount = Math.ceil(totalArticles / articlesPerPage)
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Pagination
        count={pageCount}
        page={page}
        onChange={onChangePage}
        color="primary"
        size="large"
        sx={{ mt: 4 }}
      />
    </Box>
  )
}

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
      <PaginationBar
        page={page}
        articlesPerPage={articlesPerPage}
        totalArticles={news.length}
        onChangePage={handleChangePage}
      />
    </>
  )
}
