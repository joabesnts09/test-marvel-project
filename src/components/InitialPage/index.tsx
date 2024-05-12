import { HqContainer } from '../HqContainer'
import { InitialPageStyle } from './styles'


export const InitialPage = () => {
    
    return (
        <>
            <InitialPageStyle>
                <div className='boxTitle'>
                    <h1>Welcome to the Marvel Comic Shop</h1>
                </div>

                <div className='comicsContainer boxRareComics'>
                    <h2>Rare Comics</h2>
                    <div className='boxCard'>
                        <HqContainer/>
                        <HqContainer/>
                        
                    </div>

                </div>

                <div className='comicsContainer boxCommonComics'>
                    <h2>Common Comics</h2>
                    <div className='boxCard'>
                        <HqContainer/>
                        <HqContainer/>
                        <HqContainer/>
                        <HqContainer/>
                        <HqContainer/>
                        <HqContainer/>
                        <HqContainer/>
                        <HqContainer/>
                        <HqContainer/>
                        <HqContainer/>
                    </div>

                </div>
            </InitialPageStyle>
        </>
    )
}