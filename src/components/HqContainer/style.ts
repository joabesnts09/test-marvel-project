import styled from 'styled-components'

export const HqContainerStyled = styled.div`
    position: relative;
    width: 15.0875rem;
    height: 31.875rem;
    cursor: pointer;
    border-radius: .25rem;

    background-color: ${props => props.theme.colors.backgroundCard};
    .container {
        font-family: "Poetsen One", sans-serif;
        font-weight: 600;
        font-style: normal;
        margin: 0 auto;
        width: max-content;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        gap: .8rem;
        
        .box-description {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            h3 {
                width: 12.5rem;
                height: 4.0625rem;
                font-size: 1rem;
                font-weight: 600;
            }
       
            p {
                position: absolute;
                bottom: 5rem;
                left: 1.3rem;
                font-size: 1rem;
                font-weight: 600;
    
                span {
                    font-size: 1.3rem;
                    color: ${props => props.theme.colors.colorPrice};
                }
            }
            
        }
        
   
    
        .box-img {
            img {
                width: 12.5rem;
                margin-top: .7rem;
                border-radius: .2rem;
            }
        }
    }
    
   
    .boxButton {
        width: 100%;
        position: absolute;
        bottom: 1rem;
        margin: 0 auto;
        display: flex;
    }

    .boxBorder {
        width: 90%;
        position: absolute;
        bottom: 4rem;
        left: .7rem;
        .border {
            width: 100%;
            margin: 0 auto;
            border: 1px solid  ${props => props.theme.colors.colorBorder};
        }
    }
    
`