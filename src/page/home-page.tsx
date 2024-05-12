import { ChangeEventHandler } from 'react'
import { Header } from '../components/Header'
import { HqContainer } from '../components/HqContainer'
import { InitialPage } from '../components/InitialPage'

interface IProps {
    handleClick: ChangeEventHandler<HTMLInputElement>
}

export const HomePage = ({handleClick}: IProps) => {




    return (
        <>
            <header>
                <Header handleClick={handleClick} />
            </header>
            <main>
                <InitialPage/>
                {/* <HqContainer/> */}
            </main>
            <footer></footer>
        </>
    )
}