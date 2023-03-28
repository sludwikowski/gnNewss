import { useState } from 'react'
import { useTranslation } from 'react-i18next'
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

const Popup = () => {
  const [open, setOpen] = useState(false)
  const [badgeContent, setBadgeContent] = useState(1)
  const { t } = useTranslation()

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleOpen = () => {
    setOpen(true)
    setBadgeContent(0)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const popupContent = (
    <>
      <DialogContentText>{t('popup.message1')}</DialogContentText>
      <DialogContentText>{t('popup.message2')}</DialogContentText>
    </>
  )

  return (
    <div>
      <Tooltip title="Popup">
        <IconButton
          size="large"
          aria-label="show notification"
          color="inherit"
          onClick={handleOpen}
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
          {t('popup.title')}
        </DialogTitle>
        <DialogContent>{popupContent}</DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClose}
          >
            {t('popup.button')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Popup
