import { List, ListItem, ListItemText } from '@mui/material'
import { NewsArticle } from '../typings'

interface NewsListProps {
  news: NewsArticle[]
}

export default function NewsList({ news }: NewsListProps) {
  if (!news) {
    return null
  }
  return (
    <List>
      {news.map((article: NewsArticle) => (
        <ListItem key={article.url} alignItems="flex-start">
          <ListItemText
            primary={<a href={article.url}>{article.title}</a>}
            secondary={`${article.source.name}, ${article.publishedAt}`}
          />
        </ListItem>
      ))}
    </List>
  )
}
