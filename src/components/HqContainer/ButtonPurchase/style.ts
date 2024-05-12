import styled, {css} from 'styled-components'
interface IButtonProps {
    buttonStyle: string;
  }


export const ButtonStyled = styled.button<IButtonProps>`

    width: 90%;
    height: 2rem;

    border: none;
    font-size: 1rem;
    font-weight: 600;
    padding: .4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 1rem auto;
    color: #fff;
    border-radius: 1.25rem;

    ${({buttonStyle}) => {
        if (buttonStyle === 'purchase') {
            return css`
                background-color: #6dc100;
                
                
            `
        } else if (buttonStyle === 'addToCart') {
            return css`
                background-color: #0033ee;
                display: flex;
                gap: .5rem;

                img {
                    width: 1.3rem;
                }
                &:hover {
                    background-color: #6dc100;
                }
            `
        }
    }}

`