import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../page/HomePage' 



export const RoutersMain = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage />}/>
        </Routes>
    )
}