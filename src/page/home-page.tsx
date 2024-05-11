import { Header } from '../components/Header'
import { HqContainer } from '../components/HqContainer'

interface IProps {
    handleClick: void
}

export const HomePage = ({handleClick}: IProps) => {




    return (
        <>
            <header>
                <Header handleClick={handleClick} />
            </header>
            <main>
                <HqContainer/>
            </main>
            <footer></footer>
        </>
    )
}