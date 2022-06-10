import { render, screen } from '@testing-library/react'
import App from './App'

test('render App', () => {
  render(<App />)
  const pElement = screen.getByText(
    /Proyecto e-Commerce creado en React y TypeScript/i
  )
  expect(pElement).toBeInTheDocument()
})
