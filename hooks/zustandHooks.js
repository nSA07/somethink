import { useState, useEffect } from "react";

export const useStore = (store, callback) => {
    const result = store(callback)
    const [state, setState] = useState()

    useEffect(() => {
        setState(result)
    }, [result])
    return state
}