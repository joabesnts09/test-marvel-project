
import { MouseEventHandler } from 'react'
import { ButtonStyled } from './style'

interface IButtonProps {
    text: string
    image?: string
    type?: 'button' | 'reset' | 'submit'
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}


export const ButtonPurchaseOrAddToCart = ({text, image,  type, onClick}: IButtonProps) => {

    return (
        <>
            <ButtonStyled onClick={onClick} type={type} >
                {text}
                {image && <img src={image} alt='card'/>}
            </ButtonStyled>

        </>
    )
}