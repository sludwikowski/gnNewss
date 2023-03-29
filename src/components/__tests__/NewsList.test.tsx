import { render, screen, fireEvent } from '@testing-library/react'
import NewsList from '../NewsList'

describe('NewsList', () => {
  const newsList = [
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
    {
      title: 'Test article 3',
      url: 'https://example.com/test-article-2',
      urlToImage: null,
      description: null,
      author: null,
      source: {
        id: null,
        name: 'Example 3',
      },
      publishedAt: '2022-04-02T10:00:00Z',
    },
  ]

  describe('NewsList', () => {
    it('renders news articles', () => {
      render(<NewsList news={newsList} />)

      expect(screen.getByText(/Test article 1/i)).toBeInTheDocument()
      expect(screen.getByText(/Test article 2/i)).toBeInTheDocument()
    })

    it('displays no news message when there is no news', () => {
      render(<NewsList news={[]} />)

      expect(screen.getByText(/No news to show/i)).toBeInTheDocument()
    })

    it('displays article details when article is clicked', () => {
      render(<NewsList news={newsList} />)

      fireEvent.click(screen.getByText(/Test article 1/i))

      expect(screen.getByText(/Test article 3/i)).toBeInTheDocument()
      expect(screen.getByText(/Example 3/i)).toBeInTheDocument()
    })
  })
})
