import { useState } from 'react'
import PokemonApplication from './components/PokemonApplication'
import './App.css'

function App() {

  const [showPokedex, setShowPokedex] = useState(false)

  function displayButton(){
    setShowPokedex(!showPokedex)

  }
  return (
    <>
      <button onClick={displayButton}>{showPokedex ? "Shutdown Pokedex": "Boot up Pokedex"}</button>
      <div>
        {showPokedex && <PokemonApplication />}
      </div>
    </>
  )
}

export default App
