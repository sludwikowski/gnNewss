import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { NewsArticle } from '../typings'

import { RootState } from '../app/store'

import NewsTitle from './NewsTitle.'
import NewsList from './NewsList'
import Loader from './Loader'

export default function NewsContent() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const view = useSelector((state: RootState) => state.news.view)
  const [news, setNews] = useState<Array<NewsArticle>>([])
  const { country } = useParams()
  const APP_KEY = import.meta.env.VITE_APP_KEY
  useEffect(() => {
    setIsLoading(true)
    fetch(
      `https://newsapi.org/v2/top-headlines?country=pl&apiKey=${APP_KEY}`
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        setNews(data.articles)
        setIsLoading(false)
        return data
      })
      .catch(console.error)
  }, [country])

  return isLoading ? (
    <Loader />
  ) : view === 'list' ? (
    <NewsList news={news} />
  ) : (
    <NewsTitle news={news} />
  )
}
