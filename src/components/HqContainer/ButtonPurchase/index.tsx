
import { ButtonStyled } from './style'

interface IButtonProps {

    text: string
    image?: string

    buttonStyle: string
    type?: 'button' | 'reset' | 'submit'

}


export const ButtonPurchaseOrAddToCart = ({text, image, buttonStyle, type}: IButtonProps) => {

    return (
        <>
            <ButtonStyled type={type} buttonStyle={buttonStyle}>
                {text}
                {image && <img src={image} alt='card'/>}
            </ButtonStyled>

        </>
    )
}