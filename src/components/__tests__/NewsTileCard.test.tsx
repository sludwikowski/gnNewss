import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import NewsTileCard from '../NewsTileCard'
import { NewsArticle } from '../../typings'

describe('NewsTileCard', () => {
  const mockNewsArticle: NewsArticle = {
    title: 'Test article',
    description: 'This is a test article',
    url: 'https://test.com',
    urlToImage: 'https://test.com/image.png',
    publishedAt: new Date().toISOString(),
    source: { id: 'test', name: 'Test' },
    author: null,
  }
  it('opens article popup on card click', () => {
    render(<NewsTileCard news={mockNewsArticle} />)
    const card = screen.getByRole('presentation')
    fireEvent.click(card)
    const popupTitle = screen.getByText(/Test article/i)
    expect(popupTitle).toBeInTheDocument()
  })

  it('renders article title and description', () => {
    render(<NewsTileCard news={mockNewsArticle} />)
    const title = screen.getByText(/Test article/i)
    const description = screen.getByText(/This is a test article/i)
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('renders article source', () => {
    render(<NewsTileCard news={mockNewsArticle} />)
    const source = screen.getByText(/Test/i)
    expect(source).toBeInTheDocument()
  })
})
