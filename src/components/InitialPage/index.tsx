import InitialPageStyle from './styles'

export const InitialPage = () => {
    
    return (
        <>
            <InitialPageStyle>
                <div>
                    <h1>Bem-vindo ao Marvel</h1>
                </div>

                <div className='comicsContainer boxRareComics'>
                    <h2>Rare Comics</h2>
                    <div>

                    </div>

                </div>

                <div className='comicsContainer boxCommonComics'>
                    <h2>Common Comics</h2>
                    <div>
                        
                    </div>

                </div>
            </InitialPageStyle>
        </>
    )
}