import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Drawer, IconButton, Stack, Tooltip } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import SideMenuList from './SideMenuList'

import { RootState } from '../app/store'
import { setCountry } from '../features/countriesSlice'

const SideMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const dispatch = useDispatch()

  const countries = useSelector(
    (state: RootState) => state.countries.countries
  )

  const { i18n } = useTranslation()

  const handleCountryClick = (code: string) => {
    dispatch(setCountry(code))
  }

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
      setIsDrawerOpen(open)
    }

  return (
    <>
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
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <SideMenuList
          countries={countries}
          handleCountryClick={handleCountryClick}
          i18n={i18n}
        />
      </Drawer>
    </>
  )
}

export default SideMenu
