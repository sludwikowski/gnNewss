import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import {
  fetchNews,
  selectNews,
  selectIsLoadingNews,
} from '../features/newsSlice'

import NewsTileList from './NewsTileList'
import NewsList from './NewsList'
import Loader from './Loader'

import type { AppDispatch, RootState } from '../app/store'

export default function NewsContent() {
  const dispatch: AppDispatch = useDispatch()
  const news = useSelector(selectNews)
  const isLoadingNews = useSelector(selectIsLoadingNews)
  const view = useSelector((state: RootState) => state.news.view)
  const { country } = useParams()

  useEffect(() => {
    if (country) {
      dispatch(fetchNews(country))
    }
  }, [country, dispatch])

  const renderContent = () =>
    isLoadingNews ? (
      <Loader />
    ) : view === 'list' ? (
      <NewsList news={news} />
    ) : (
      <NewsTileList news={news} />
    )

  return renderContent()
}
