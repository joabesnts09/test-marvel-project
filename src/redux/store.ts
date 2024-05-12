import {configureStore} from '@reduxjs/toolkit'
import Cart from './cartSlice'


export default configureStore({
    reducer: {

        cart: Cart
    },
    
})