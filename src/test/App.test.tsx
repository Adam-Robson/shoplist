/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { test, beforeEach, afterEach, expect } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'

import App from '../App'

beforeEach(() => {
  render(<App />)
})

test('renders Layout by default', () => {
  expect(screen.getByTestId('layout-section')).toBeTruthy()
})

test('renders Page by default', () => {
  expect(screen.getByTestId('page-section')).toBeTruthy()
  expect(screen.getByText('this is shoplist.')).toBeDefined()
})

afterEach(() => {
  cleanup()
})
