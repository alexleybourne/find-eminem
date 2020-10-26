import React, { useState } from 'react';

const Timer = () => {
    let [minutes, setMinutes] = useState(0);
    let [seconds, setSeconds] = useState(0);
    let [milliseconds, setMilliseconds] = useState(0);

    let loop = '';
    
    const startTimer = () => {
        loop = setInterval(() => {
            if (milliseconds !== 59) {
                setMilliseconds( milliseconds ++ )
            } else if (seconds !== 59 && milliseconds === 59) {
                setMilliseconds(0)
                setSeconds(seconds ++)
            } else if (minutes !== 11 && seconds === 59 ) {
                setMinutes(0)
                setMinutes(minutes ++)
            }
        }, 100);
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