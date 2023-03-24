import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { NewsState, NewsArticle } from '../typings'
import { fetchNews } from '../api/fetchNews'

const initialState: NewsState = {
  view: 'list',
  articleCount: 0,
  isLoading: false,
  news: [],
  error: null,
}

export const fetchNewsThunk = createAsyncThunk<
  NewsArticle[],
  string,
  { rejectValue: string }
>(
  'news/fetchNews',
  async (country, { rejectWithValue, dispatch }) => {
    try {
      const news = await fetchNews(country)
      dispatch(setArticleCount(news.length))
      return news
    } catch (error: unknown) {
      if (typeof error === 'string') {
        return rejectWithValue(error)
      } else {
        return rejectWithValue('An unknown error occurred.')
      }
    }
  }
)

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<'list' | 'tiles'>) => {
      state.view = action.payload
    },
    setArticleCount: (state, action: PayloadAction<number>) => {
      state.articleCount = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) =>
        action.type.endsWith('/pending') ||
        action.type.endsWith('/fulfilled') ||
        action.type.endsWith('/rejected'),
      (state, action) => {
        state.isLoading = action.meta.requestStatus === 'pending'
        state.news = action.payload ?? state.news
        state.error =
          action.meta.requestStatus === 'rejected'
            ? (action.payload as string)
            : null
      }
    )
  },
})

// eslint-disable-next-line import/no-unused-modules
export const { setView, setArticleCount } = newsSlice.actions
export default newsSlice.reducer

export const selectNews = (state: RootState) => state.news.news

export const selectIsLoadingNews = (state: RootState) =>
  state.news.isLoading
