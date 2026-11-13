import { useEffect, useState } from "react"
import Pokemon from "./Pokemon"

function PokemonApplication () {
    const [allPokemon, setAllPokemon] = useState([])
    const [chosenPokemon, setChosenPokemon] = useState("")
    const [urlToSend, setUrlToSend] = useState("")
    const [viewDetails, setViewDetails] = useState(false)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(res => res.json())
            .then(data => setAllPokemon(data.results)); // data.results is your array of 151 items
    }, []);

    return (
        <>  
            <div className="pokeListContainer">
                <select className="pokeList" value={chosenPokemon} onChange={(e) => (setChosenPokemon(e.target.value), console.log(e.target.value))}>
                    <option value="">Pick a Pokemon</option>
                    {allPokemon.map((p, i) => (
                        <option key={i} value={p.url}>{p.name}</option>
                    ))}
                </select>
                <button className="viewBtn" onClick={() => (chosenPokemon && (setUrlToSend(chosenPokemon), setViewDetails(true)))}>View Details</button>
                {/* <button className="viewBtn" onClick={() => (chosenPokemon && setViewDetails(!viewDetails))}>{!viewDetails ? "View Details" : "Hide Details"}</button> */}
            </div>
            {viewDetails && <Pokemon pokemonUrl={urlToSend} />}
        </>
    )
}

export default PokemonApplication