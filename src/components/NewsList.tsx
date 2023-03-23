import {
  Link,
  List,
  ListItem,
  ListItemText,
  Pagination,
} from '@mui/material'
import { NewsArticle } from '../typings'
import { useState } from 'react'
import { Article } from '@mui/icons-material'
import ArticlePopup from './ArticlePopup'

interface NewsListProps {
  news: NewsArticle[]
}

export default function NewsList({ news }: NewsListProps) {
  const [page, setPage] = useState(1)
  const articlesPerPage = 10
  const numPages = Math.ceil(news.length / articlesPerPage)

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
                  <Link color="secondary" href={article.url}>
                    {article.title}
                  </Link>
                }
                secondary={`${article.source.name}, ${article.publishedAt}`}
              />
              {/*<ArticlePopup visible={article} onClose={} article={}/>*/}
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
