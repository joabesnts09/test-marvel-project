import {configureStore} from '@reduxjs/toolkit'
import Cart from './cartSlice'


export const store = configureStore({
    reducer: {
        cart: Cart
    },
    
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch