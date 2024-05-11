import { createSlice } from '@reduxjs/toolkit'


export const slice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'light',
        isLight: true
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light'? 'dark' : 'light'
            state.isLight = state.theme === 'light'? true : false
        }
    }
})

export const { toggleTheme } = slice.actions
export const selectedTheme = state => state.theme
export default slice.reducer