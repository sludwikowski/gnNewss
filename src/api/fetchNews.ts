import { NewsArticle } from '../typings'

const fetchNews = async (country: string): Promise<NewsArticle[]> => {
  const APP_KEY = import.meta.env.VITE_APP_KEY
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=30&apiKey=${APP_KEY}`
  )
  const data = await response.json()
  return data.articles
}

export default fetchNews
