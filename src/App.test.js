import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from './App'

describe('App ',()=>{
    const server = setupServer(
        rest.get('/getCities', (req, res, ctx) => {
            console.log(" hiii",req)
          return res(ctx.json({ result: {noOfCitiesMatched: 4 }}))
        })
      )
        beforeAll(() => server.listen())
        afterEach(() => server.resetHandlers())
        afterAll(() => server.close())

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
})

