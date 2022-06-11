export interface ProductModel {
  id: number
  title: string
  description: string
  category: string
  image: string
  price: number
}

export interface ProductArrayModel {
  all_products: ProductModel[]
  particular_product: ProductModel
}

export interface UserProductsModel {
  productId: number
  quantity: number
}

export interface UserCartModel {
  id: number
  userId: number
  date: string
  products: UserProductsModel[]
}

export interface UserCartArrayModel {
  user_cart: UserCartModel[]
  user_products_cart: ProductModel[]
}
