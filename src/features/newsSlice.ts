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
    builder.addCase(fetchNewsThunk.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchNewsThunk.fulfilled, (state, action) => {
      state.isLoading = false
      state.news = action.payload
      state.error = null
    })
    builder.addCase(fetchNewsThunk.rejected, (state, action) => {
      state.isLoading = false
      state.news = []
      state.error = action.payload as string
    })
  },
})

export const { setView, setArticleCount } = newsSlice.actions
export default newsSlice.reducer

export const selectNews = (state: RootState) => state.news.news
export const selectIsLoadingNews = (state: RootState) =>
  state.news.isLoading
