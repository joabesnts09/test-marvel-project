import { useEffect, useState } from 'react'
import { HqContainer } from '../HqContainer'
import { InitialPageStyle } from './styles'
import { api } from '../../services/api'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/cartSlice'

interface IDataComics {
    id: number,
    title: string,
    images: {
        path: string
    }[]
}

export const InitialPage = () => {

    const [data, seData] = useState<IDataComics[]>()
    useEffect(() => {
        const getHq = async () => {
            const response = await api.get('')
            seData(response.data.data.results)        
        }
        getHq()
    }, [])

    const dispatch = useDispatch()
    return (
        <>
            <InitialPageStyle>
                <div className='boxTitle'>
                    <h1>Welcome to the Marvel Comic Shop</h1>
                </div>

                <div className='comicsContainer'>
                    <h2>Rare Comics</h2>
                    <div className='boxCard'>
                        {
                            data && data.map((item: IDataComics) => {
                                return (
                                    <HqContainer 
                                        key={item.id}
                                        image={item.images[0] ? item.images[0].path : '../../../public/imgs/comicsImage'}
                                        title={item.title}
                                        price={item.id.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                                        onClick={() => dispatch(addItem(item))}
                                        
                                    />
                                )
                            })
                        }                        
                    </div>

                </div>
            </InitialPageStyle>
        </>
    )
}