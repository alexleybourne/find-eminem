
const Eminems = () => {

  const found = () => {
    console.log('FOUND EMINEM')
  }

  return (
    <div className="main-image">
      <div className="main-image-wrapper">
        <div id="eminem-wrapper" onClick={found}>
          <img id="eminem" src="assets/Eminem.png" alt="Eminem"/>
          <img id="eminem-bg" src="assets/Green.png" alt="Eminem M&M" />
        </div>
        <img className="background" src="/assets/Background.jpg" alt="M&M's"/>
      </div>
    </div>
  )
}

export default Eminems