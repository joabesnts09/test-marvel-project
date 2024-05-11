import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type TResponse<T> = [
    T,
    Dispatch<SetStateAction<T>>
]

export const usePersistedState = <T> (key: string, initialState: T): TResponse<T> => {
    const [state, setState] = useState(() => {
        const value = localStorage.getItem(key)
        return value? JSON.parse(value) : initialState 
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}