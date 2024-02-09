import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Create from '../components/Create'

test('renders create component', () => {
  render(<Create />)
  expect(screen.getByTestId('create-section')).toBeTruthy()
  expect(screen.getByTestId('text-input')).toBeTruthy()
  expect(screen.getByTestId('quantity-input')).toBeTruthy()
})
