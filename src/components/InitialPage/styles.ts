import styled from 'styled-components'

export const InitialPageStyle = styled.section`
    padding-top: 5rem;
    width: 90%;
    margin: 0 auto;
    font-family: 'Briem Hand', cursive;
    font-optical-sizing: auto;

    .boxTitle {
        h1 {
            font-weight: 700;
            font-style: normal;
            font-size: 1.5rem;
        }
    }

    .comicsContainer {
        margin: 0 auto;
        width: 90%;
        display: flex;
        flex-direction: column;
        padding-top: 2rem;
        gap: 1rem;

        h2 {
            font-size: 1.2rem;
            font-weight: 600;
            margin-left: 2rem;
            margin-bottom: 1rem;
            
        }

        .boxCard {
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;
        }
    }



`
