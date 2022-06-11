import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import {
  fetchUserCart,
  // fetchUserProductsCart,
} from '../../../store/actions/cartActions'
import { fetchParticularProduct } from '../../../store/actions/productActions'

export const PorductCardCart = () => {
  const dispatch = useAppDispatch()
  const allUserCart = useAppSelector(state => state.cart.user_cart)
  const particularProduct = useAppSelector(
    state => state.product.particular_product
  )
  /* const userProductsCart = useAppSelector(
    state => state.cart.user_products_cart
  ) */

  const productId = allUserCart.map(({ products }) =>
    products.map(({ productId }) => productId)
  )

  useEffect(() => {
    dispatch(fetchUserCart())

    if (particularProduct.title === '') {
      productId.forEach(element =>
        element.forEach(id => dispatch(fetchParticularProduct(id)))
      )
    }
  })

  return (
    <>
      {allUserCart.map(({ products }) =>
        products.map(({ productId, quantity }) => (
          <div className="py-6 px-4" key={particularProduct.id}>
            <div className="flex max-w-md overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
                <div className="md:flex">
                  <div className="md:shrink-0">
                    <img
                      className="h-48 w-full object-cover md:h-full md:w-40"
                      src={particularProduct.image}
                      alt={particularProduct.title}
                    />
                  </div>
                  <div className="p-4">
                    <h1 className="text-2xl font-semibold uppercase tracking-wide text-indigo-500">
                      {particularProduct.title}
                    </h1>

                    <div key={productId}>cantidad: {quantity}</div>

                    <div className="item-center mt-3 flex justify-between">
                      <h1 className="text-sm font-bold text-gray-700">
                        ${particularProduct.price}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  )
}
