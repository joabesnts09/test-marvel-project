import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { HqContainerStyled } from './style'
import { ButtonPurchaseOrAddToCart } from './ButtonPurchase'
import iconCard from '../../../public/icons/icon-cart-add.svg'


export const HqContainer = () => {
    const [data, seData] = useState()
    useEffect(() => {
        const getQuadrinho = async () => {
            const response = await api.get('')
            seData(response.data.data.results)
            console.log(response.data.data.results);
        }
        getQuadrinho()
    }, [])



    return (
        <>
            <HqContainerStyled>
                <div className='container'>
                    <div className='box-img'>
                        <img src={`${data && data[2].images[0].path}.jpg`} alt="" />
                    </div>
                    <div className='box-description'>
                        <h3 className='title-hq'>{data && data[2].title}</h3>
                        <p>Price: <span>${data && data[2].id.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span></p>
                    </div>
                </div>
                <div className='box-purchase'>
                    <ButtonPurchaseOrAddToCart image={iconCard} type='button' buttonStyle='addToCart' text='Add to '/>

                </div>
            </HqContainerStyled>
        </>
    )
}