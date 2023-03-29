import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Popup from '../Popup'

describe('Popup', () => {
  test('should render with a badge content of 1', () => {
    render(<Popup />)
    const badgeContent = screen.getByText('1')
    expect(badgeContent).toBeInTheDocument()
  })

  test('should display a popup when the notification icon is clicked', () => {
    render(<Popup />)
    const notificationIcon = screen.getByLabelText(
      'show notification'
    )
    fireEvent.click(notificationIcon)
    const popupTitle = screen.getByRole('heading')
    console.log(popupTitle.textContent)
  })

  test('should close the dialog when the button is clicked', () => {
    render(<Popup />)
    const notificationIcon = screen.getByLabelText(
      'show notification'
    )
    fireEvent.click(notificationIcon)
    const closeButton = screen.getByRole('button')
    console.log(closeButton.textContent)
    const popupTitle = screen.queryByText('Popup')
    expect(popupTitle).not.toBeInTheDocument()
  })
})
