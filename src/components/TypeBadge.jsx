import { useState, useEffect } from "react";

function TypeBadge( {typeUrl, typeName}) {
    const [typeIcon, setTypeIcon] = useState("")
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getTypeIcon() {
            try {
                const res = await fetch(typeUrl);
                if (!res.ok) throw new Error(`Api error (type) ${res.status}`)
                const data = (await res.json());
                const iconUrl = data?.sprites["generation-iv"]?.platinum?.name_icon
                setTypeIcon(iconUrl || "")
            } catch (er){
                setError(er.message);
            } finally {
                setLoading(false)
            }
        }
        getTypeIcon()
    }, [typeUrl]);

    if (loading) {
        return (
        <p>{typeName}</p>
    )}

    if (error) return <p>{typeName}</p>
    if (!typeIcon) return <p>{typeName}</p>
    return (
        <>
        <img src={typeIcon} alt="" />    
        </>
    )
}

export default TypeBadge
