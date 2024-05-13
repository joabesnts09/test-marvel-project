import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ICartItem {
    id: number
    title: string
    images: {
        path: string
    }[]
    qty?: number
    sum?: number

}

interface ICartState {
    items: ICartItem[]
}
const initialState: ICartState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ICartItem>) => {
            const isExist = state.items.find(
                (item) => item.id === action.payload?.id
            )

            if (isExist) {
                isExist.sum! += action.payload?.id
                isExist.qty! += 1
            } else {
                state.items.push({
                    ...action.payload,
                    sum: action.payload?.id,
                    qty: 1,
                })
            }
        },

        removeItem: (state, action: PayloadAction<ICartItem>) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        }
    },
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer
