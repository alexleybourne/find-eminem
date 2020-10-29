import React, { useState } from 'react';
import Footer from 'components/Footer'

const Eminems = () => {

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  const [colour, setColour] = useState('Blue');
  const [bgRotation, setBgRotation] = useState(0);
  const [eminemRotation, setEminemRotation] = useState(0);
  const [eminemX, setEminemX] = useState('0');
  const [eminemY, setEminemY] = useState('0');
  const [negativeX, setNegativeX] = useState(false);
  const [negativeY, setNegativeY] = useState(false);
  const [locatorClasses, setLocatorClasses] = useState('hidden');
  const [found, setFound] = useState(false)
  const [failed, setFailed] = useState(false)

  const random = (val) => {
    const number = ~~(Math.random() * val)
    return number
  }

  const negOrPos = (y) => {
    if ( y === 'Y') {
      let positive = !negativeY
      setNegativeY(positive)
      return positive ? '-' : ''
    } else {
      let positive = !negativeX
      setNegativeX(positive)
      return positive ? '' : '-'
    }
  }

  const maxX = 400
  const maxY = 200

  const setup = () => {
    setFound(false)
    setFailed(false)
    const colours = ['Green', 'Red', 'Orange', 'Blue', 'Yellow', 'Brown']
    const randomValue = random(colours.length)
    const randomColour = colours[randomValue]
    setBgRotation(bgRotation === 0 ? 180 : 0)
    setEminemRotation(`${negOrPos('X')}${random(20) * 10}`)
    setEminemX(`${negOrPos('X')}${random(maxX)}`)
    setEminemY(`${negOrPos('Y')}${random(maxY)}`)
    setColour(randomColour)
    setLocatorClasses('hidden')
  }

  const foundEminem = async () => {
    console.log('FOUND EMINEM')
    setFound(true);
    setLocatorClasses('locator')
    await sleep(10)
    setLocatorClasses('locator found')
  }

  const gaveUp = async () => {
    setFound(true);
    setFailed(true)
    setLocatorClasses('locator')
    await sleep(10)
    setLocatorClasses('locator found')
  }

  window.addEventListener("load", setup);

  return (
    <div className="main-image">
      <div className="main-image-wrapper">
        <p className={`message ${found ? 'message-show' : 'message-hide'}`}>{`${!failed ? 'You found Eminem!' : 'Better luck next time'}`}</p>
        <div className={`eminem-wrapper ${found ? 'animate' : ''}`} onClick={foundEminem}>
          <img className={`eminem ${found ? 'no-rotation' : ''}`} src="assets/Eminem.png" alt="Eminem"/>
          <img className="eminem-bg" src={`assets/${colour}.png`} alt="Eminem M&M" />
          <div className={locatorClasses}></div>
        </div>
      </div>
        <Footer>
          <button onClick={setup}>NEW</button>
          <button onClick={gaveUp}>Give Up</button>
        </Footer>
      <style jsx>{`

        .hidden {
          display: none;
          opacity: 0;
        }

        .locator {
          position: absolute;
          opacity: 0.8;
          z-index: -1;
          background: white;
          height: 0;
          width: 0;
          border-radius: 100%;
          transition-duration: 1s;
        }

        .found {
          height: 200vw;
          width: 200vw;
        }

        .eminem-wrapper {
          transform: translate(${eminemX}px, ${eminemY}px);
        }

        .eminem {
          transform: rotate(${eminemRotation}deg);
        }

      `}</style>
    </div>
  )
}

export default Eminems