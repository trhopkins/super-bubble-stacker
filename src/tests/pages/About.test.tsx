/** @jest-environment jsdom */
import { render } from '@testing-library/react'
import About from '../../pages/About'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'

describe('NavBar component', () => {
  it('renders the About component on following the "About" link', () => {
    const { getByText } = render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    )
    const page = getByText(/about/i)
    expect(page).toBeInTheDocument()
  })
})
