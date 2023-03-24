import { render, screen } from '@testing-library/react'
import { NewsArticle } from '../../typings'
import NewsList from '../NewsList'

describe('NewsList', () => {
  const newsList: NewsArticle[] = [
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

  describe('when rendering a list of news items', () => {
    beforeEach(() => {
      render(<NewsList news={newsList} />)
    })

    it('should display article titles', () => {
      const { getByText } = screen
      const title1 = getByText(/Test article 1/i)
      const title2 = getByText(/Test article 2/i)
      expect(title1).toBeInTheDocument()
      expect(title2).toBeInTheDocument()
    })

    it('should display article sources', () => {
      const { getByText } = screen
      const source1 = getByText(/Example 1/i)
      const source2 = getByText(/Example 2/i)
      expect(source1).toBeInTheDocument()
      expect(source2).toBeInTheDocument()
    })
  })

  describe('when displaying a selected article', () => {
    beforeEach(() => {
      render(<NewsList news={newsList} />)
    })

    it('should display the correct title and source for the first article when clicked', () => {
      const { getByText } = screen
      const title1 = getByText(/Test article 1/i)
      const source1 = getByText(/Example 1/i)

      title1?.click()

      const popupTitle = getByText(/Test article 1/i)
      const popupSource = getByText(/Example 1/i)

      expect(popupTitle).toBeInTheDocument()
      expect(popupSource).toBeInTheDocument()
    })

    it('should display the correct title and source for the second article when clicked', () => {
      const { getByText } = screen
      const title2 = getByText(/Test article 2/i)
      const source2 = getByText(/Example 2/i)

      title2?.click()

      const popupTitle = getByText(/Test article 2/i)
      const popupSource = getByText(/Example 2/i)

      expect(popupTitle).toBeInTheDocument()
      expect(popupSource).toBeInTheDocument()
    })
  })
})
