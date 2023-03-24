import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import {
  fetchNewsThunk,
  selectNews,
  selectIsLoadingNews,
} from '../features/newsSlice'

import type { AppDispatch, RootState } from '../app/store'

import NewsTileList from '../components/NewsTileList'
import NewsList from '../components/NewsList'
import Loader from '../components/Loader'

export default function NewsContent() {
  const dispatch: AppDispatch = useDispatch()
  const news = useSelector(selectNews)
  const isLoadingNews = useSelector(selectIsLoadingNews)
  const view = useSelector((state: RootState) => state.news.view)
  const { country } = useParams()

  useEffect(() => {
    if (country) {
      dispatch(fetchNewsThunk(country))
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
