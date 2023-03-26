import { render, screen } from '@testing-library/react'

import Header from '../Header'

describe('Header', () => {
  it('renders the title', () => {
    render(<Header />)
    const title = screen.getByText('News')
    expect(title).toBeInTheDocument()
  })
})
