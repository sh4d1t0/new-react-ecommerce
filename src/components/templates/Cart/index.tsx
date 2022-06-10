import React from 'react'
import { Outlet } from 'react-router'

export const Cart = () => {
  return (
    <>
      <h1>Carrito de compras</h1>
      <Outlet />
    </>
  )
}
