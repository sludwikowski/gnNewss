import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface NewsState {
  view: 'list' | 'tiles'
  country: string
  articleCount: number
}

const initialState: NewsState = {
  view: 'list',
  country: 'pl',
  articleCount: 0,
}

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
})

export const { setView, setCountry, setArticleCount } =
  newsSlice.actions
export default newsSlice.reducer
