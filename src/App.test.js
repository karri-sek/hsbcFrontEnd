import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App ',()=>{
    test('renders the label to ', () => {
        render(<App />)
        const labelElement = screen.getByText(/Enter letter city name starts with/i)
        expect(labelElement).toBeInTheDocument()
    })
    
    test('no of cities label ', () => {
        render(<App />)
        const labelElement = screen.getByText(/No of Cities found/i)
        expect(labelElement).toBeInTheDocument()
    })
    
    test('a Submit button to click ', () => {
        const { getByText } = render(<App />)
        const buttonElement = getByText(/Submit/)
        expect(buttonElement).toBeInTheDocument()
    })
    
    test('a text box to enter the city name', () => {
        const { getByRole } = render(<App />)
        const buttonElement = getByRole('textbox')
        expect(buttonElement).toBeInTheDocument()
    })

    test('the button should have disabled property', () => {
        const { getByRole } = render(<App />)
        const buttonElement = getByRole('button')
        expect(buttonElement).toHaveAttribute('disabled')
    })
})

