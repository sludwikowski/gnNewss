export interface NewsArticle {
  title: string
  url: string
  urlToImage: string | null
  description: string | null
  author: string | null
  source: {
    id: string | null
    name: string
  }
  publishedAt: string
}

export interface NewsProps {
  news: NewsArticle[]
}

export interface TileCardProps {
  news: NewsArticle
}

export interface PopupProps {
  visible: boolean
  onClose: () => void
  article: NewsArticle | null
}

export interface FooterProps {
  title: string
}

export type SideMenuListProps = {
  countries: { code: string; name: string; nameEn: string }[]
  handleCountryClick: (code: string) => void
  i18n: { language: string }
}

interface Country {
  code: string
  name: string
  nameEn: string
}

export interface CountriesState {
  selectedCountry: Country
  countries: Country[]
}

export interface NewsState {
  view: 'list' | 'tiles'
  articleCount: number
  isLoading: boolean
  news: NewsArticle[]
  error: string | null
}
