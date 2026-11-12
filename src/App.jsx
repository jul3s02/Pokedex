import { useState } from 'react'
import PokemonApplication from './components/PokemonApplication'
import './App.css'

function App() {

  const [showPokedex, setShowPokedex] = useState(false)

  function displayButton(){
    setShowPokedex(!showPokedex)

  }
  return (
    <div className="appContainer">
      <div className="dexContainer">
        {showPokedex && <PokemonApplication />}
      </div>
      <button className='bootPokedex' onClick={displayButton}>{showPokedex ? "Shutdown Pokedex": "Boot up Pokedex"}</button>

    </div>
  )
}

export default App
