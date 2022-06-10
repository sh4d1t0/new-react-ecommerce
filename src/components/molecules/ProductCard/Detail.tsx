import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { fetchParticularProduct } from '../../../store/actions/productActions'

export const ProductCardDetail = () => {
  const params = useParams()
  const productId = Number(params.productId)

  const dispatch = useAppDispatch()
  const particularProduct = useAppSelector(
    state => state.product.particular_product
  )

  useEffect(() => {
    dispatch(fetchParticularProduct(productId))
  }, [])

  return (
    <>
      <h1>Detalle del producto {params.productId}</h1>
      {<p>{particularProduct.title}</p>}
    </>
  )
}
