import { ChangeEventHandler } from 'react'
import { ButtonToggleTheme } from './ButtonTheme'
import { Container } from './style'

interface IProps {
    handleClick: ChangeEventHandler<HTMLInputElement>
}


export const Header = ({handleClick}: IProps) => {

    return (
        <>
            <>
                <Container>
                    <h1>Marvel comics</h1>
                   <ButtonToggleTheme handleClick={handleClick}/>
                </Container>
            </>
        </>
    )
}