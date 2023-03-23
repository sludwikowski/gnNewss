import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { NewsArticle } from '../typings'

interface NewsState {
  view: 'list' | 'tiles'
  country: string
  articleCount: number
  isLoading: boolean
  news: NewsArticle[]
  error: string | null
}

const initialState: NewsState = {
  view: 'list',
  country: 'pl',
  articleCount: 0,
  isLoading: false,
  news: [],
  error: null,
}

export const fetchNews = createAsyncThunk<
  NewsArticle[],
  string,
  { rejectValue: string }
>('news/fetchNews', async (country, { rejectWithValue }) => {
  try {
    const APP_KEY = import.meta.env.VITE_APP_KEY
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=30&apiKey=${APP_KEY}`
    )
    const data = await response.json()
    return data.articles
  } catch (error: unknown) {
    // add a type annotation here
    if (typeof error === 'string') {
      return rejectWithValue(error)
    } else {
      return rejectWithValue('An unknown error occurred.')
    }
  }
})

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<'list' | 'tiles'>) => {
      state.view = action.payload
    },
    setCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload
    },
    setArticleCount: (state, action: PayloadAction<number>) => {
      state.articleCount = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.isLoading = false
      state.news = action.payload
    })
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })
  },
})

export const { setView, setCountry, setArticleCount } =
  newsSlice.actions
export default newsSlice.reducer

export const selectNews = (state: RootState) => state.news.news

export const selectIsLoadingNews = (state: RootState) =>
  state.news.isLoading
