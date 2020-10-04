import React, { useState, useRef, useEffect } from 'react'

export default function Timer(props) {

  const [timerDate, setTimerDate] = useState()
  const [timerMS, setTimerMS] = useState(0)
  const [updater, setUpdater] = useState()

  const timerRef = useRef()

  const timeAsString = (time) => {
    return `${time.getMinutes().toString().padStart(2, '0')}:${time.getSeconds().toString().padStart(2, '0')}:${time.getMilliseconds().toString().slice(0, -1).padStart(2, '0')}` 
  }

  const stopTimer = () => {
    console.log('TIMER STOP')
    if (!updater) return

    clearInterval(updater)
    setUpdater()
  }

  const resetTimer = () => {
    console.log('RESET TIMER')
    // If the timer is already running the DATE should be changed as that's what it's based off
    if(updater) {
        setTimerDate(new Date())
    // If it's paused the MS should be updated to 0 because that's what it's based off
    } else {
        setTimerMS(0)
        startTimer()
        console.log('setting time to 0')
        // Update the Span to show the time has been reset to 0
        timerRef.current.textContent = timeAsString(new Date(0))
    }
  }

  // Stores the timer as a date
  // This will be used to calculate how long the timer has been run for
  const startTimer = () => {
    console.log('TIMER START')
    setTimerDate(new Date(new Date().getTime() - timerMS))
  }

  useEffect(() => {
    if (props.running) {
      resetTimer()
    } else {
      stopTimer()
    }
  }, [props.running])

  useEffect(() => {
    console.log('Starting...')
    if(!timerDate) { return }
    console.log('Starting...')
  
    if(updater) {clearInterval(updater)}
    const updaterID = setInterval(() => {
      timerRef.current.textContent = timeAsString(new Date(new Date().getTime() - timerDate.getTime()))
    }, 1)
    setUpdater(updaterID)
  }, [timerDate])

  useEffect(() => {
    console.log('time set to 0')
    clearInterval(updater)
    setUpdater()
  }, [timerMS])

  return (
    <div className="timer">
      <span ref={timerRef} >00:00:00</span>
    </div>
  )
}
