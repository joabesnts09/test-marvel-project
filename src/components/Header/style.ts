import styled from 'styled-components'


export const Container = styled.header`
    font-family: "Briem Hand", cursive;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    
    height: 60px;
    background-color: ${props => props.theme.colors.blue1};

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3.125rem;

    h1 {
        font-size: 24px;
        color: #fff;
        font-weight: 700;
    }
`