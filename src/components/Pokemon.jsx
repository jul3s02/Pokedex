import { useEffect, useState } from "react";


function Pokemon ({pokemonUrl}) {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        fetch(pokemonUrl)
            .then(res => res.json())
            .then(data => setPokemon(data)); // data.results is your array of 151 items
    }, [pokemonUrl]);
    return (
        <>
        {console.log(pokemon)}
        <p>id: #{pokemon.id}</p>
        <p>name: {pokemon.name}</p>
        <p>Types: {pokemon.types.map((e, i)=>(<strong>{e.type.name}</strong>))}</p>
        <p>Weight:{pokemon.weight / 10}kg</p>
        <p>Height: {pokemon.height * 10}cm </p>
        <img src={pokemon.sprites.front_default} alt={"Bild på " + pokemon.name} />
        


        <button onClick={console.log(pokemon)}>console</button>

        </>
    )
}

export default Pokemon