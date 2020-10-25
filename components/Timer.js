import React, { useState } from 'react';

const Timer = () => {
    let [minutes, setMinutes] = useState(0);
    let [seconds, setSeconds] = useState(0);
    let [milliseconds, setMilliseconds] = useState(0);

    let loop = '';
    
    const startTimer = () => {
        loop = setInterval(() => {
            timer()
        }, 100);
    }

    const timer = () => {
        milliseconds !== 59 ? setMilliseconds( milliseconds ++ ) : newSecond();
    }

    const newSecond = () => {
        setMilliseconds(0)
        setSeconds(seconds ++)
    }
    

    return (
        <>
            <button onClick={() => startTimer()}>TIMER ON</button>
            <button onClick={() => clearInterval(loop)}>TIMER OFF</button>
            <p>{minutes}:{seconds}:{milliseconds}</p>
        </>
    )
}

export default Timer