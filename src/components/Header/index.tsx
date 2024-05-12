import { ButtonToggleTheme } from './ButtonTheme'
import { Container } from './style'

interface IProps {
    handleClick: void
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