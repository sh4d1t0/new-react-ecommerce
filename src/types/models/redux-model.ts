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
