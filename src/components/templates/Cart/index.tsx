import React from 'react'
import { CartList } from '../../organism/CartList'

export const Cart = () => {
  return (
    <>
      <div className="flex min-h-full justify-center py-8 px-4">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Carrito de compras
            </h2>
          </div>
        </div>
      </div>
      <CartList />
    </>
  )
}
