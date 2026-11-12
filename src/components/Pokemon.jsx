import { useEffect, useState } from "react";


function Pokemon ({pokemonUrl}) {
    const [pokemon, setPokemon] = useState({})
// hello
// function UserList() {
//     const [users, setUsers] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);
    
//     useEffect(() => {
//         async function hamta() {
//             try {
//                 const res = await fetch(API_URL);
//                 if (!res.ok) throw new Error(`Status ${res.status}`);
//                 setUsers(await res.json());
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         }
//     hamta();
// }, []);

    useEffect(() => {
        async function getPokemon() {
            try {
                const res = await fetch(pokemonUrl);
                if (!res.ok) throw new Error(`Api error ${res.status}`)
                setPokemon(await res.json());
            } catch (er){
                setError(er.message);
            } finally {
                setLoading(false)
            }
        }
        getPokemon()
    }, []);



// helloK
    // useEffect(() => {
    //     fetch(pokemonUrl)
    //         .then(res => res.json())
    //         .then(data => setPokemon(data)); // data.results is your array of 151 items
    // }, [pokemonUrl]);


    if (loading) {
        console.log("laddar")
        return (
        <p>... laddar</p>
    )}
    if (error) return <p>Ett fel uppstod {error}</p>
    return (
        <>
        {console.log(pokemon.types)}
        <div className="pokeView">
            <img className="pokeImg" src={pokemon.sprites.front_default} alt={"Bild på " + pokemon.name} />
            <p className="pokeId">#{String(pokemon.id).padStart(3, "0")}</p>
            <p className="pokeName">name: {pokemon.name}</p>
            <p className="pokeTypes">Types: {pokemon.types.map((e, i)=>(<strong>{e.type.name} </strong>))}</p>
            <p className="pokeWeight">Weight:{pokemon.weight / 10}kg</p>
            <p className="pokeHeight">Height: {pokemon.height * 10}cm </p>
        </div>
        </>
    )
}

export default Pokemon