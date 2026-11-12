import { useEffect, useState } from "react"
import Pokemon from "./Pokemon"

function PokemonApplication () {
    const [allPokemon, setAllPokemon] = useState([])
    const [chosenPokemon, setChosenPokemon] = useState("")
    const [viewDetails, setViewDetails] = useState(false)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(res => res.json())
            .then(data => setAllPokemon(data.results)); // data.results is your array of 151 items
    }, []);

    return (
        <>
        <h1>Hello</h1>
            <select onChange={(e) => (setChosenPokemon(e.target.value), console.log(e.target.value))}>
                <option value="">Välj en pokemon</option>
            {allPokemon.map((p, i) => (
                <option key={i} value={p.url}>{p.name}</option>

            ))}
            </select>

            <p>{chosenPokemon ? `chosen pokemon url, ${chosenPokemon} ` : ""}</p>
            <button onClick={() => (setViewDetails(!viewDetails))}>{!viewDetails ? "View Details" : "Hide Details"}</button>

            {viewDetails && <Pokemon pokemonUrl={chosenPokemon} />}
        </>
    )
}

export default PokemonApplication