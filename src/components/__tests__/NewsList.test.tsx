import { render, screen } from '@testing-library/react'
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
  ]

  it('should render news list with correct articles', () => {
    render(<NewsList news={newsList} />)

    expect(screen.getByText(/Test article\s*1/)).toBeInTheDocument()

    expect(screen.getByText(/Example\s*1/)).toBeInTheDocument()

    expect(screen.getByText(/Test article\s*2/)).toBeInTheDocument()

    expect(screen.getByText(/Example\s*2/)).toBeInTheDocument()
  })
})
