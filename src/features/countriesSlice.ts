import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { countryNames } from '../data/countryName'

import { CountriesState } from '../typings'

const initialState: CountriesState = {
  selectedCountry: { code: '', name: '', nameEn: '' },
  countries: Object.entries(countryNames).map(([code, name]) => ({
    code,
    name: name.name,
    nameEn: name.nameEn,
  })),
}

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<string>) => {
      state.selectedCountry.code = action.payload
    },
  },
})

export const { setCountry } = countriesSlice.actions
export default countriesSlice.reducer
