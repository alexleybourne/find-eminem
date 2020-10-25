import React, { useState, useEffect } from 'react';

const Eminems = () => {

  const [colour, setColour] = useState('blue');
  const [bgRotation, setBgRotation] = useState(0);
  const [eminemRotation, setEminemRotation] = useState(0);
  const [eminemX, setEminemX] = useState('0');
  const [eminemY, setEminemY] = useState('0');

  const random = (val) => {
    const number = ~~(Math.random() * val)
    return number
  }

  useEffect(() => {
    const colours = ['Green', 'Red', 'Orange', 'Blue']
    const randomValue = random(colours.length)
    const randomColour = colours[randomValue]
    setBgRotation(randomValue > 2 ? 180 : 0)
    setEminemRotation(random(15) * 10)
    setEminemX(`${randomValue > 2 ? '-' : ''}${random(300)}`)
    setEminemY(`${randomValue < 2 ? '-' : ''}${random(200)}`)
    console.log(eminemRotation);
    console.log(randomColour)
    setColour(randomColour)
  }, [])

  const setup = () => {
    const colours = ['Green', 'Red', 'Orange', 'Blue']
    const randomValue = random(colours.length)
    const randomColour = colours[randomValue]
    setBgRotation(randomValue > 2 ? 180 : 0)
    setEminemRotation(random(15) * 10)
    setEminemX(`${randomValue > 2 ? '-' : ''}${random(300)}`)
    setEminemY(`${randomValue < 2 ? '-' : ''}${random(200)}`)
    console.log(eminemRotation);
    console.log(randomColour)
    setColour(randomColour)
  }

  
  
  const found = () => {
    console.log('FOUND EMINEM')
  }

  return (
    <div className="main-image">
      <div className="main-image-wrapper">
        <div id="eminem-wrapper" onClick={found}>
          <img id="eminem" src="assets/Eminem.png" alt="Eminem"/>
          <img id="eminem-bg" src={`assets/${colour}.png`} alt="Eminem M&M" />
        </div>
        <img className="background" src="/assets/Background.jpg" alt="M&M's"/>
      </div>
      <button onClick={setup}>NEW</button>
      <style jsx>{`

        #eminem-wrapper {
          transform: translate(${eminemX}px, ${eminemY}px);
        }

        #eminem {
          transform: rotate(${eminemRotation}deg);
        }

        .background {
          transform: rotate(${bgRotation}deg);
        }
      `}</style>
    </div>
  )
}

export default Eminems