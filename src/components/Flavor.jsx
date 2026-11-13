import { useState, useEffect } from "react";

function Flavor ({ flavorUrl }) {

    const [flavorText, setFlavorText] = useState("")
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getTypeIcon() {
            try {
                const res = await fetch(flavorUrl);
                if (!res.ok) throw new Error(`Api error (type) ${res.status}`)
                const data = (await res.json());
                const flavor = data?.flavor_text_entries[0]?.flavor_text
                setFlavorText(flavor || "")
            } catch (er){
                setError(er.message);
            } finally {
                setLoading(false)
            }
        }
        getTypeIcon()
    }, [flavorUrl]);

    if (loading) {
        return (
        <p>...Loading</p>
    )}

    if (error) return <p>error</p>
    //if (!typeIcon) return <p>{typeName}</p>
    return (
        <>
            <p className="pokeDesc">{flavorText}</p>
        </>
    )
}

export default Flavor