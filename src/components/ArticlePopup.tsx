import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Link,
  Typography,
} from '@mui/material'

import { useTranslation } from 'react-i18next'

import { NewsArticle } from '../typings'
// onClick={() => handleCountryClick(country.code)}  href={`/country/${country.code}`}
interface PopupProps {
  visible: boolean
  onClose: () => void
  article: NewsArticle | null
}
export default function ArticlePopup({
  visible,
  onClose,
  article,
}: PopupProps) {
  const { t } = useTranslation()
  if (!article) return null

  const { title, author, url, source, description } = article

  return (
    <Dialog open={visible} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Typography>
          {t('articlePopup.author')}: {author || t('popup.unknown')}
        </Typography>
        <Typography>
          {t('articlePopup.source')}:{' '}
          <Link
            sx={{ fontWeight: 'bold', color: 'black' }}
            href={url}
          >
            {source.name}
          </Link>
        </Typography>
        <Typography>
          {t('articlePopup.sourceLink')}:{' '}
          <Link sx={{ color: 'blue' }} href={url} target={'_blank'}>
            {url}
          </Link>
        </Typography>
        <Typography>{t('articlePopup.content')}:</Typography>{' '}
        <Typography variant={'body2'}>
          {description || t('articlePopup.contentEmpty')}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant={'contained'}
          color={'secondary'}
          onClick={onClose}
        >
          {t('articlePopup.close')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
