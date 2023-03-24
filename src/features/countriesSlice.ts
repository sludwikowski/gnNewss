import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { country } from '../data/country'

interface Country {
  code: string
  name: string
}
interface CountriesState {
  selectedCountry: Country
  countries: Country[]
}

const initialState: CountriesState = {
  selectedCountry: { code: 'pl', name: 'Poland' },
  countries: country,
}

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<string>) => {
      state.selectedCountry.code = action.payload
    },
    setCountries: (
      state,
      action: PayloadAction<{ code: string; name: string }[]>
    ) => {
      state.countries = action.payload
    },
  },
})

export const { setCountry, setCountries } = countriesSlice.actions
export default countriesSlice.reducer
