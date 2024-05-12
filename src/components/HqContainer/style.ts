import styled from 'styled-components'

export const HqContainerStyled = styled.div`
    width: 15.0875rem;
  
    margin: 0 auto;
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
            gap: .5rem;
            h3 {
                font-size: 1rem;
                font-weight: 600;
            }
       
            p {
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
                border-radius: .9375rem;
            }
        }
    }
    
   
    .box-purchase {
        display: flex;
    }
    
`