import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { AppBar, Box, IconButton, Typography } from '@mui/material'
import ListIcon from '@mui/icons-material/List'
import BorderAllIcon from '@mui/icons-material/BorderAll'

import { RootState } from '../app/store'
import { setView } from '../features/newsSlice'

import Popup from './Popup'
import Menu from './Menu'

export default function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const view = useSelector((state: RootState) => state.news.view)

  const onSwithView = () => {
    dispatch(setView(view === 'list' ? 'tiles' : 'list'))
  }

  return (
    <AppBar
      elevation={10}
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100vw',
        height: '75px',
        color: 'black',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '999',
        flexGrow: 1,
      }}
    >
      <Box
        sx={{
          position: 'static',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '80vw',
          margin: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Menu />
          <IconButton
            sx={{ color: 'inherit', marginLeft: 1 }}
            onClick={onSwithView}
          >
            {view === 'list' && <BorderAllIcon />}
            {view === 'tiles' && <ListIcon />}
          </IconButton>
        </Box>
        <Box
          onClick={() => navigate('/')}
          sx={{ '&:hover': { cursor: 'pointer' } }}
        >
          <Typography
            variant={'h5'}
            component={'div'}
            sx={{
              flexGrow: 1,
              mr: 2,
              display: { md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              '&:hover': { cursor: 'pointer' },
              '@media (max-width: 599.95px)': {
                fontSize: '16px',
              },
            }}
          >
            gnNews
          </Typography>
        </Box>
        <Popup />
      </Box>
    </AppBar>
  )
}
