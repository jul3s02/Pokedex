import { useEffect, useState } from "react";
import TypeBadge from "./TypeBadge";
import Flavor from "./Flavor";

function Pokemon ({pokemonUrl}) {
    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
    }, [pokemonUrl]);

    if (loading) {
        return (
        <p>... laddar</p>
    )}
    if (error) return <p>Ett fel uppstod {error}</p>
    return (
        <>
        <div className="pokeView">
            <div className="pokeImg">
                <img src={pokemon.sprites.front_default} alt={"Bild på " + pokemon.name} />    
            </div>
            <section className="pokeStats">
                <section className="pokeIdName">
                    <p className="pokeId">#{String(pokemon.id).padStart(3, "0")}</p>
                    <p className="pokeName">{pokemon.name}</p>
                </section>
                <section className="pokeTypes">
                    {pokemon.types.map((e, i)=>(
                        <TypeBadge key={i} typeUrl={e.type.url} typeName={e.type.name} />
                    ))}
                </section>
                <section className="pokeSize">
                    <p className="pokeWeight">Wt:{pokemon.weight / 10}kg</p>
                    <p className="pokeHeight">Ht: {pokemon.height * 10}cm </p>
                </section>
            </section>
            <Flavor flavorUrl={pokemon.species.url} />
        </div>
        </>
    )
}

export default Pokemon