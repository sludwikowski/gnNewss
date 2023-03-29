import { NewsArticle } from '../typings'

export const fetchNews = async (
  country: string
): Promise<NewsArticle[]> => {
  try {
    const APP_KEY = process.env.VITE_APP_KEY
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=50&apiKey=${APP_KEY}`
    )
    const data = await response.json()
    return data.articles
  } catch (error) {
    throw new Error('Unable to fetch news.')
  }
}
