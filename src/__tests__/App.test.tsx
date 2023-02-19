import { render, screen } from '@testing-library/react'
import App from '../App'
import '@testing-library/jest-dom'
import React from 'react'

describe('<App />', () => {
  it('should render', () => {
    render(<App />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
