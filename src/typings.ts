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
