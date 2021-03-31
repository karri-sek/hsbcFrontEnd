import React, { useState } from 'react'
import getCityCount from './urlUtils'
import { GlobalStyle, Wrapper } from './App.styles'
import './App.css'

function App() {
    const [letter, setLetter] = useState('')
    const [cityCount, setCityCount] = useState(0)

    const handleSubmit = async () => {
        const result = await getCityCount(letter)
        result?setCityCount(result.noOfCitiesMatched):setCityCount(0)
        }
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                
                <p className="cityNameLabel">
                    Enter letter city name starts with
                </p>
                <input
                    className="cityName"
                    type="text"
                    onChange={(e) => {
                        setLetter(e.target.value)
                    }}
                    value={letter}
                />
                <button
                    className="next"
                    onClick={handleSubmit}
                    disabled={!letter}
                >
                    Submit
                </button>
                
                    <div className="score" role="score">
                        No of Cities found : {cityCount}
                    </div>
            </Wrapper>
        </>
    )
}

export default App
