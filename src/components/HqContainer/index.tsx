import { HqContainerStyled } from './style'
import { ButtonPurchaseOrAddToCart } from './ButtonPurchase'
import iconCard from '../../../public/icons/icon-cart-add.svg'
import { MouseEventHandler } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'



interface IProps {
    image: string
    title: string
    price: string
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

export const HqContainer = ({ image, title, price, onClick}: IProps) => {

    const {items} = useSelector((state: RootState) => state.cart)
    console.log(items);
    
    
    return ( 
        <>
            <HqContainerStyled>
                <div className='container'>
                    <div className='box-img'>
                        <img src={`${image}.jpg`} alt="Image Comic" />
                    </div>
                    <div className='box-description'>
                        <h3 className='title-hq'>{title}</h3>
                        <p>Price: <span>${price}</span></p>
                    </div>
                </div>
                <div className='boxBorder'>
                    <div className='border'></div>
                </div>
                <div className='boxButton'>
                    <ButtonPurchaseOrAddToCart onClick={onClick} image={iconCard} type='button' text='Add to '/>
                </div>
            </HqContainerStyled>
        </>
    )
}