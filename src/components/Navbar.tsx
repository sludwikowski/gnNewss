import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next' // import useTranslation

import {
  AppBar,
  Box,
  IconButton,
  Typography,
  Toolbar,
  Tooltip,
} from '@mui/material'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import GridViewIcon from '@mui/icons-material/GridView'
import Flag from 'react-flagkit'

import { RootState } from '../app/store'
import { setView } from '../features/newsSlice'

import Popup from './Popup'
import SideMenu from './SideMenu'

export default function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const view = useSelector((state: RootState) => state.news.view)
  const [currentLang, setCurrentLang] = useState('en')
  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = currentLang
  }, [currentLang])

  const switchLanguage = () => {
    setCurrentLang((prevLang) => (prevLang === 'en' ? 'pl' : 'en'))
    i18n.changeLanguage(currentLang === 'en' ? 'pl' : 'en')
  }

  const onSwitchView = () => {
    dispatch(setView(view === 'list' ? 'tiles' : 'list'))
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <SideMenu />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: 'block', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            gnNews
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex' }}>
            <Tooltip title={t('Switch View')}>
              <Box
                component={IconButton}
                size="large"
                edge="end"
                aria-label={
                  view === 'list'
                    ? t('navbar.switchToTilesView')
                    : t('navbar.switchToListView')
                }
                aria-haspopup="true"
                onClick={onSwitchView}
                color="inherit"
              >
                {view === 'list' && <GridViewIcon />}
                {view === 'tiles' && <FormatListBulletedIcon />}
              </Box>
            </Tooltip>
            <Popup />
            <Box
              component={IconButton}
              size="large"
              edge="end"
              aria-label={
                currentLang === 'en'
                  ? t('navbar.switchToPolish')
                  : t('navbar.switchToEnglish')
              }
              aria-haspopup="true"
              onClick={switchLanguage}
              color="inherit"
            >
              {currentLang === 'en' ? (
                <Flag country={'PL'} />
              ) : (
                <Flag country={'GB'} />
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
