import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import { Login } from './components/templates/Login'
import { Products } from './components/templates/Products'
import { Cart } from './components/templates/Cart'
import { ProductDetail } from './components/templates/Products/ProductDetail'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product">
            <Route path=":productId" element={<ProductDetail />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
