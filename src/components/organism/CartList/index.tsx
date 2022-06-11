import * as React from 'react'
import { PorductCardCart } from '../../molecules/ProductCard/Cart'

export const CartList = () => {
  return (
    <>
      <div className="flex min-h-full flex-wrap justify-center px-4">
        <PorductCardCart />
      </div>
    </>
  )
}
