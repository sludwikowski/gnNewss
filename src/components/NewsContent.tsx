import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { NewsArticle } from '../typings'

import { RootState } from '../app/store'

import NewsTileList from './NewsTileList'
import NewsList from './NewsList'
import Loader from './Loader'

export default function NewsContent() {
  const [isLoadingNews, setLoadingNews] = useState<boolean>(false)
  const view = useSelector((state: RootState) => state.news.view)
  const [news, setNews] = useState<Array<NewsArticle>>([])
  const { country } = useParams()
  const APP_KEY = import.meta.env.VITE_APP_KEY

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoadingNews(true)
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=pl&pageSize=30&apiKey=${APP_KEY}`
        )
        const data = await response.json()
        setNews(data.articles)
      } catch (error) {
        console.error(error)
      } finally {
        setLoadingNews(false)
      }
    }
    fetchNews()
  }, [APP_KEY, country])

  const renderContent = () => {
    if (isLoadingNews) {
      return <Loader />
    } else if (view === 'list') {
      return <NewsList news={news} />
    } else {
      return <NewsTileList news={news} />
    }
  }

  return renderContent()
}
