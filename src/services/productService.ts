import { ProductModel } from '../types/models/redux-model'
import Api from './Api'

export default {
  async getAllProducts() {
    const response = await Api().get('products')
    return response.data
  },
  async getParticularProduct(productId: number) {
    const response = await Api().get('products')
    return response.data.filter(
      (product: ProductModel) => product.id === productId
    )[0]
  },
}
