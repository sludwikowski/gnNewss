import { render, screen } from '@testing-library/react'
import Loader from '../Loader'

describe('Loader', () => {
  it('renders the loading indicator', () => {
    render(<Loader />)
    const loadingIndicator = screen.getByRole('progressbar')
    expect(loadingIndicator).toBeInTheDocument()
  })
})
