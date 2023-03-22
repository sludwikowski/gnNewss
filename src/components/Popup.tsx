import * as React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from '@mui/material'

export default function Popup() {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const popupContent = (
    <div>
      <p>The most difficult part of this task was ...</p>
      <p>The most fun part of this task was ...</p>
    </div>
  )

  return (
    <div>
      <Button
        variant={'contained'}
        color={'secondary'}
        onClick={handleClickOpen}
      >
        Show Popup
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {'Difficulties and Fun'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{popupContent}</DialogContentText>
        </DialogContent>
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
