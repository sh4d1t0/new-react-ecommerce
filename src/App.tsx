import React from 'react'
import tw, { styled } from 'twin.macro'
import logo from './images/logo.svg'

const Container = styled.div`
  ${tw`text-3xl text-center font-bold text-gray-900 underline`}
`

const App = () => {
  return (
    <Container>
      <h1>Proyecto e-Commerce creado en React y TypeScript</h1>
      <img src={logo} className="AppLogo" alt="logo" />
    </Container>
  )
}

export default App
