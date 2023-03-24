import { render, screen } from '@testing-library/react'
import { NewsArticle } from '../../typings'
import NewsList from '../NewsList'

describe('NewsList', () => {
  const news: NewsArticle[] = [
    {
      title: 'Test article 1',
      url: 'https://example.com/test-article-1',
      urlToImage: null,
      description: null,
      author: null,
      source: {
        id: null,
        name: 'Example 1',
      },
      publishedAt: '2022-04-01T10:00:00Z',
    },
    {
      title: 'Test article 2',
      url: 'https://example.com/test-article-2',
      urlToImage: null,
      description: null,
      author: null,
      source: {
        id: null,
        name: 'Example 2',
      },
      publishedAt: '2022-04-02T10:00:00Z',
    },
  ]

  it('renders a list of news items', () => {
    render(<NewsList news={news} />)
    const article1 = screen.getByText(/Test article 1/i)
    const article2 = screen.getByText(/Test article 2/i)
    expect(article1).toBeInTheDocument()
    expect(article2).toBeInTheDocument()
  })

  it('displays the selected article when clicked', () => {
    render(<NewsList news={news} />)
    const article1 = screen.getByText(/Test article 1/i)
    const article2 = screen.getByText(/Test article 2/i)

    article1?.click()

    const popupTitle = screen.getByText(/Test article 1/i)
    const popupContent = screen.getByText(/Example 1/i)

    expect(popupTitle).toBeInTheDocument()
    expect(popupContent).toBeInTheDocument()

    article2?.click()

    const popupTitle2 = screen.getByText(/Test article 2/i)
    const popupContent2 = screen.getByText(/Example 2/i)

    expect(popupTitle2).toBeInTheDocument()
    expect(popupContent2).toBeInTheDocument()
  })
})
