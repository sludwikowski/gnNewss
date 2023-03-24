import React, { useState } from 'react'

import {
  Box,
  List,
  ListItem,
  ListItemText,
  Pagination,
  Typography,
} from '@mui/material'

import ArticlePopup from './ArticlePopup'

import { NewsArticle, NewsProps } from '../typings'

import { formatPolishDateTime } from '../helpers/formatPolishDateTime'

export default function NewsList({ news }: NewsProps) {
  const [page, setPage] = useState(1)
  const [selectedArticle, setSelectedArticle] =
    useState<NewsArticle | null>(null)

  const articlesPerPage = 10
  const numPages = Math.ceil(news.length / articlesPerPage)
  const handleArticleClick = (article: NewsArticle) =>
    setSelectedArticle(article)
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value)
  }
  if (!news) {
    return null
  }
  return (
    <>
      <List>
        {news
          .slice((page - 1) * articlesPerPage, page * articlesPerPage)
          .map((article: NewsArticle) => (
            <ListItem key={article.url} alignItems="flex-start">
              <ListItemText
                primary={
                  <Box
                    component={Typography}
                    variant="h5"
                    fontWeight={'bold'}
                    color="secondary"
                    sx={{ cursor: 'pointer' }}
                    onClick={() => handleArticleClick(article)}
                  >
                    {article.title}
                  </Box>
                }
                secondary={`${
                  article.source.name
                }, ${formatPolishDateTime(article.publishedAt)}`}
              />
              <ArticlePopup
                visible={selectedArticle !== null}
                onClose={() => setSelectedArticle(null)}
                article={selectedArticle}
              />
            </ListItem>
          ))}
      </List>
      <Pagination
        count={numPages}
        page={page}
        onChange={handlePageChange}
      />
    </>
  )
}
