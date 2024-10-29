import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.cartQuantity += 1;  
            } else {
                state.push({ ...action.payload, cartQuantity: 1 });  
            }
        },
        removeFromCart(state, action) {
            return state.filter(cartItem => cartItem.id !== action.payload.id);
        },
        increaseQuantity: (state, action) => {
            const item = state.find(cartItem => cartItem.id === action.payload.id);
            if (item) {
                item.cartQuantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.find(cartItem => cartItem.id === action.payload.id);
            if (item && item.cartQuantity > 1) {
                item.cartQuantity -= 1;
            }
        },
        clearFromCart: (state) =>{
            return [];
        }
    },
});

export const { addItem, removeFromCart, increaseQuantity, decreaseQuantity, clearFromCart } = cartSlice.actions;
export default cartSlice.reducer;
