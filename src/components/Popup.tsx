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
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [badgeContent, setBadgeContent] = useState(1)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleOpen = () => {
    setOpen(true)
    setBadgeContent(0)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const dialogContent = (
    <>
      <DialogContentText>{t('popup.message1')}</DialogContentText>
      <DialogContentText>{t('popup.message2')}</DialogContentText>
    </>
  )

  return (
    <>
      <Tooltip title={t('popup.tooltip')}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore*/}
        <IconButton
          size="large"
          aria-label={t('popup.iconButtonLabel')}
          color="inherit"
          onClick={handleOpen}
        >
          <Badge badgeContent={badgeContent} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <Dialog
        fullScreen={isMobile}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {t('popup.title')}
        </DialogTitle>
        <DialogContent>{dialogContent}</DialogContent>
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
    </>
  )
}

export default Popup
