import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Tooltip,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Flag from 'react-flagkit'

import { setCountry } from '../features/countriesSlice'
import { RootState } from '../app/store'

type Anchor = 'top' | 'left' | 'bottom' | 'right'

export default function SideMenu() {
  const [state, setState] = React.useState({
    left: false,
  })

  const dispatch = useDispatch()
  const countries = useSelector(
    (state: RootState) => state.countries.countries
  )

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

  const handleCountryClick = (code: string) => {
    dispatch(setCountry(code))
  }
  const { i18n } = useTranslation()

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {countries.map((c) => (
          <ListItem key={c.code} disablePadding>
            <ListItemButton
              onClick={() => handleCountryClick(c.code)}
              href={`/country/${c.code}`}
            >
              <ListItemText
                primary={i18n.language === 'en' ? c.nameEn : c.name}
              />
              <Flag country={c.code} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Stack direction="row" spacing={2}>
            <Tooltip title={'Countries'}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(anchor, true)}
              >
                <MenuIcon />
              </IconButton>
            </Tooltip>
          </Stack>
          <Drawer
            anchor={'left'}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}
