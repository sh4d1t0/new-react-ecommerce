import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductArrayModel, ProductModel } from '../../types/models/redux-model'

const initialProductState: ProductArrayModel = {
  all_products: [],
  particular_product: {
    id: 0,
    title: '',
    description: '',
    category: '',
    image: '',
    price: 0,
  },
}

const productSlice = createSlice({
  name: 'product',
  initialState: initialProductState,
  reducers: {
    setProducts(state, action: PayloadAction<ProductModel[]>) {
      state.all_products = action.payload
    },
    setParticularProduct(state, action: PayloadAction<ProductModel>) {
      state.particular_product = action.payload
    },
  },
})

export default productSlice
