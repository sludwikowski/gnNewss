import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface NewsState {
  view: 'list' | 'tiles'
  // Add other states as needed
}

const initialState: NewsState = {
  view: 'list',
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<'list' | 'tiles'>) => {
      state.view = action.payload
    },
    // Add other reducers as needed
  },
})

export const { setView } = newsSlice.actions
export default newsSlice.reducer
