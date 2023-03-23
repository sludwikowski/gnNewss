import React from 'react'

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Link,
  Typography,
} from '@mui/material'

import { NewsArticle } from '../typings'

interface PopupProps {
  visible: boolean
  onClose: () => void
  article: NewsArticle | null
}
function ArticlePopup({ visible, onClose, article }: PopupProps) {
  if (!article) return null

  const { title, author, url, source, description } = article

  return (
    <Dialog open={visible} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Typography>Author: {author || 'Unknown'}</Typography>
        <Typography>
          Source: <Link href={url}>{source.name}</Link>
        </Typography>
        <Typography>
          SourceLink: <Link href={url}>{url}</Link>
        </Typography>

        <Typography>{description}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ArticlePopup
