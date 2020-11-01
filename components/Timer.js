import React, { useState, useRef, useEffect } from 'react'

export default function Timer(props) {

  const [timerDate, setTimerDate] = useState()
  const [timerMS, setTimerMS] = useState(0)
  const [updater, setUpdater] = useState()

  const timerRef = useRef()

  const timeAsString = (time) => {
    return `${time.getMinutes().toString().padStart(2, '0')}:${time.getSeconds().toString().padStart(2, '0')}:${time.getMilliseconds().toString().padStart(3, '0')}` 
  }

  const stopTimer = () => {
    console.log('TIMER STOP')
    if (updater) { setTimerMS(new Date().getTime() - timerDate.getTime()) }
  }

  // Stores the timer as a date
  // This will be used to calculate how long the timer has been run for
  const startTimer = () => {
    console.log('TIMER START')
    setTimerDate(new Date(new Date().getTime() - timerMS))
  }

  const resetTimer = () => {
        console.log('RESET TIMER')
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

  useEffect(() => {
    props.running ? startTimer() && resetTimer() : stopTimer();
  }, [props.running]);

  return (
    <div className="timer">
      <span ref={timerRef} ></span>
    </div>
  )
}
