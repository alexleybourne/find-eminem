import React, { useState, useRef, useEffect } from 'react'

export default function Timer() {

  const [timerDate, setTimerDate] = useState()
  const [timerMS, setTimerMS] = useState(0)
  const [updater, setUpdater] = useState()

  const timerRef = useRef()

  const timeAsString = (time) => {
    return `${time.getMinutes().toString().padStart(2, '0')}:${time.getSeconds().toString().padStart(2, '0')}:${time.getMilliseconds().toString().padStart(3, '0')}` 
  }

  // Stores the timer as a date
  // This will be used to calculate how long the timer has been run for
  const startTimer = () => {
    setTimerDate(new Date(new Date().getTime() - timerMS))
  }

  const stopTimer = () => {
    setTimerMS(new Date().getTime() - timerDate.getTime())
  }

  const resetTimer = () => {
    if(updater) {
      setTimerDate(new Date())
    } else {
      setTimerMS(0)
      timerRef.current.textContent = timeAsString(new Date(0))
    }
  }

  useEffect(() => {
    if(!timerDate) { return }
  
    if(updater) {clearInterval(updater)}
    const updaterID = setInterval(() => {
      timerRef.current.textContent = timeAsString(new Date(new Date().getTime() - timerDate.getTime()))
    }, 10)
    setUpdater(updaterID)
  }, [timerDate])

  useEffect(() => {
    clearInterval(updater)
    setUpdater()
  }, [timerMS])

  const handleTimer = () => {
    if(updater) {
      stopTimer()
    } else {
      startTimer()
    }
  }

  return (
    <div className="timer">
      <button onClick={handleTimer} >{updater ? 'Stop Timer' : 'Start Timer'}</button>
      <button onClick={resetTimer} >Reset Timer</button>
      <br />
      <span ref={timerRef} ></span>
    </div>
  )
}
