import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { countryNames } from '../data/countryName'

interface Country {
  code: string
  name: string
  nameEn: string
}

interface CountriesState {
  selectedCountry: Country
  countries: Country[]
}

const initialState: CountriesState = {
  selectedCountry: { code: 'PL', name: 'Polska', nameEn: 'Poland' },
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
