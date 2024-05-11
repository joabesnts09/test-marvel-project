import {configureStore} from '@reduxjs/toolkit'
import themeReducer from './useSlice'


export default configureStore({
    reducer: {
        theme: themeReducer
    },
    
})