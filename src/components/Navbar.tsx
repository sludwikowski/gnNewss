import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  AppBar,
  Box,
  IconButton,
  Typography,
  Toolbar,
  Tooltip,
} from '@mui/material'
import ListIcon from '@mui/icons-material/List'
import BorderAllIcon from '@mui/icons-material/BorderAll'

import { RootState } from '../app/store'
import { setView } from '../features/newsSlice'

import Popup from './Popup'
import SideMenu from './SideMenu'

export default function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const view = useSelector((state: RootState) => state.news.view)

  const onSwithView = () => {
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
            sx={{ display: 'block' }}
            onClick={() => navigate('/')}
          >
            gnNews
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex' }}>
            <Tooltip title={'Change visibility'}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={onSwithView}
                color="inherit"
              >
                {view === 'list' && <BorderAllIcon />}
                {view === 'tiles' && <ListIcon />}
              </IconButton>
            </Tooltip>
            <Popup />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
