import React, { useState, useEffect, useContext } from 'react'
import {AuthContext, Quote} from '../Context/AuthContext'



export default function Quotes() {

  const {state} = useContext(AuthContext)

  const [quotes] = useState<Quote[]>(state.quotes)
  const [counter, setCounter] = useState<number>(0)
  const [activeQuotes, setactiveQuotes] = useState<Quote>(quotes[0])

  const handleCycleQuotes = () => {
    if (counter === (quotes.length - 1)) {
      setCounter(0)
      return
    }

    setTimeout(() => {
      setactiveQuotes(quotes[counter])
      setCounter(counter + 1)
    }, 4000)
  }

  useEffect(() => {
    handleCycleQuotes()
  })

  return (
    <div className="quotes">
      <div className="quotes__display box">
        <div>
          <h3>Security Quotes of Today</h3>
          <p>{activeQuotes.text}</p>
          <small style={{fontStyle: 'italic', 'color': 'gray', 'fontSize': '1.3rem'}}><span> - {activeQuotes.author}</span></small>
        </div>
      </div>
    </div>
  )
}
