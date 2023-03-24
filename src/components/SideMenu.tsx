import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Drawer, IconButton, Stack, Tooltip } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SideMenuList from './SideMenuList'
import { RootState } from '../app/store'
import { setCountry } from '../features/countriesSlice'

export default function SideMenu() {
  const [state, setState] = React.useState({
    left: false,
  })

  const dispatch = useDispatch()
  const countries = useSelector(
    (state: RootState) => state.countries.countries
  )

  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }
      setState({ ...state, left: open })
    }

  const handleCountryClick = (code: string) => {
    dispatch(setCountry(code))
  }

  const { i18n } = useTranslation()

  return (
    <React.Fragment>
      <Stack direction="row" spacing={2}>
        <Tooltip title={'Countries'}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>
      </Stack>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer(false)}
      >
        <SideMenuList
          countries={countries}
          handleCountryClick={handleCountryClick}
          i18n={i18n}
        />
      </Drawer>
    </React.Fragment>
  )
}
