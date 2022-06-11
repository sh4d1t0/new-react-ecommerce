import React from 'react'
import { ProductCardDetail } from '../../molecules/ProductCard/Detail'

export const ProductDetail = () => {
  return (
    <>
      <div className="flex min-h-full justify-center py-8 px-4">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Detalles del Producto
            </h2>
          </div>
        </div>
      </div>
      <div className="flex min-h-full flex-wrap justify-center px-4">
        <ProductCardDetail />
      </div>
    </>
  )
}
