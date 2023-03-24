import React from 'react'

import {
  Button,
  Badge,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  useMediaQuery,
  useTheme,
  Tooltip,
} from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'

export default function Popup() {
  const [open, setOpen] = React.useState(false)
  const [badgeContent, setBadgeContent] = React.useState(1)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClickOpen = () => {
    setOpen(true)
    setBadgeContent(0)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const popupContent = (
    <>
      <DialogContentText>
        Największą trudność miałem z ...
      </DialogContentText>
      <DialogContentText>
        Największą frajdę sprawiło mi szukanie rozwiązań napotykanych
        problemów.
      </DialogContentText>
    </>
  )

  return (
    <div>
      <Tooltip title={'Popup'}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          onClick={handleClickOpen}
        >
          <Badge badgeContent={badgeContent} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {'Frajda i Problemy'}
        </DialogTitle>
        <DialogContent>{popupContent}</DialogContent>
        <DialogActions>
          <Button
            variant={'contained'}
            color={'secondary'}
            onClick={handleClose}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
