import { AnyAction, ThunkAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import productService from '../../services/productService'
import { ProductModel } from '../../types/models/redux-model'
import productSlice from '../slices/productSlice'

export const productActions = productSlice.actions

export const fetchProducts = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    if (getState().product.all_products.length === 0) {
      const response: ProductModel[] = await productService.getAllProducts()
      dispatch(productActions.setProducts(response))
    }
  }
}

export const fetchParticularProduct = (
  productId: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const response: ProductModel = await productService.getParticularProduct(
      productId
    )
    dispatch(productActions.setParticularProduct(response))
  }
}
