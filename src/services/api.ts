import axios from 'axios'

export const api = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    timeout: 10 * 1000,
    // params: {
    //     ts: '1',
    //     apikey: process.env.REACT_APP_MARVEL_API_KEY,
    //     hash: process.env.REACT_APP_MARVEL_HASH,
    // },
})


