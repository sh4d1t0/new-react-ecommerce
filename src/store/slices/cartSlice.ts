import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  ProductModel,
  UserCartArrayModel,
  UserCartModel,
} from '../../types/models/redux-model'

const initialCartState: UserCartArrayModel = {
  user_cart: [],
  user_products_cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    setUserCart(state, action: PayloadAction<UserCartModel[]>) {
      state.user_cart = action.payload
    },
    setUserProductsCart(state, action: PayloadAction<ProductModel[]>) {
      state.user_products_cart = action.payload
    },
  },
})

export default cartSlice
