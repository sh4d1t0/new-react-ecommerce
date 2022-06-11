import { AnyAction, ThunkAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import cartService from '../../services/cartService'
import productService from '../../services/productService'
import { ProductModel, UserCartModel } from '../../types/models/redux-model'
import cartSlice from '../slices/cartSlice'

export const cartActions = cartSlice.actions

export const fetchUserCart = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    if (getState().cart.user_cart.length === 0) {
      const response: UserCartModel[] = await cartService.getUserCart()
      dispatch(cartActions.setUserCart(response))
    }
  }
}

export const fetchUserProductsCart = (
  productId: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const response: ProductModel[] = await productService.getParticularProduct(
      productId
    )
    dispatch(cartActions.setUserProductsCart(response))
  }
}
