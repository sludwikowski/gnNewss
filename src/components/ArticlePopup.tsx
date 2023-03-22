import React from 'react'

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material'

import { NewsArticle } from '../typings'

interface PopupProps {
  visible: boolean
  onClose: () => void
  article: NewsArticle | null
}
function ArticlePopup({ visible, onClose, article }: PopupProps) {
  if (!article) {
    return null
  }
  return (
    <Dialog open={visible} onClose={onClose}>
      <DialogTitle>{article.title}</DialogTitle>
      <DialogContent>
        <p>Author: {article.author || 'Unknown'}</p>
        <p>
          Source: <a href={article.url}>{article.source.name}</a>
        </p>
        <p>{article.description}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ArticlePopup
