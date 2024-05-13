import styled, { css } from 'styled-components'


export const ButtonStyled = styled.button`
    width: 13.5rem;
    height: 2rem;

    border: none;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0 auto;
    color: #fff;
    border-radius: 1.25rem;

    background-color: #0033ee;
    display: flex;
    gap: 0.5rem;

    img {
        width: 1.3rem;
    }
    &:hover {
        background-color: #6dc100;
    }
`
