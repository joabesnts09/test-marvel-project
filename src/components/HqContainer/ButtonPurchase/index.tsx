import { ButtonStyled } from './style'
interface IButtonProps {

    text: string
    image?: string

    buttonStyle: string
    type: string

}

// export interface ButtonProps
//   extends React.DetailedHTMLProps<
//     React.ButtonHTMLAttributes<HTMLButtonElement>,
//     HTMLButtonElement
//   > {
//   small?: boolean
//   buttonStyle: string
// }


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