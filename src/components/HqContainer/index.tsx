
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
export const HqContainer = () => {
    const [data, seData] = useState()
    useEffect(() => {
        const getQuadrinho = async  () => {
            const response = await api.get('')
            seData(response.data.data.results)
            console.log(response.data.data.results[2]);
        }
        getQuadrinho()
    }, [])


    
    return (
        <>
            <div>
                <h1>{data && data[2].title}</h1>
                <img src={`${data && data[2].images[0].path}.jpg`} alt="" />
            </div>
        </>
    )
}