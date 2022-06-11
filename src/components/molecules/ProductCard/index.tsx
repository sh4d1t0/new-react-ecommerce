import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { fetchProducts } from '../../../store/actions/productActions'
import { Button } from '../../atoms/Button'

export const ProductCard = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const allProducts = useAppSelector(state => state.product.all_products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <>
      {allProducts.map(product => (
        <div className="py-6 px-4" key={product.id}>
          <div className="flex max-w-md overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img
                    className="h-48 w-full object-cover md:h-full md:w-40"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="p-4">
                  <h1 className="text-2xl font-semibold uppercase tracking-wide text-indigo-500">
                    {product.title}
                  </h1>
                  <div className="item-center mt-2 flex">
                    <svg
                      className="h-5 w-5 fill-current text-gray-700"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      className="h-5 w-5 fill-current text-gray-700"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      className="h-5 w-5 fill-current text-gray-700"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      className="h-5 w-5 fill-current text-gray-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      className="h-5 w-5 fill-current text-gray-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  </div>
                  <div className="item-center mt-3 flex justify-between">
                    <h1 className="text-sm font-bold text-gray-700">
                      ${product.price}
                    </h1>
                    <div className="px-3 py-2">
                      <Button
                        onClick={() =>
                          navigate(`/product/${product.id}`, {
                            state: { id: 1 },
                          })
                        }
                        variant="contained"
                      >
                        Detalles
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
