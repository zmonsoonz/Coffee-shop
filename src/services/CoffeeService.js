import { useState, useCallback } from "react"

export const CoffeeService = () => {
    const [process, setProcess] = useState();

    const getBest = useCallback(async (url) => {
        setProcess('loading')
        try {
            const res = await fetch(url, {method: "GET"})
            if (!res.ok) {
                throw new Error(`Error, status: ${res.status}`);
            }
            
            return await res.json();
        }
        catch(e) {
            setProcess('error');
            throw e;
        }
    }, [])

    return {getBest, process, setProcess}
}
