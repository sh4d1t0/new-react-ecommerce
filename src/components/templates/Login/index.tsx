import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from '../../organism/Form'

export const Login = () => {
  const [state, setState] = useState({ value: '' })
  const navigate = useNavigate()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(state.value)
    setState({ value: event?.currentTarget?.value })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Submitted')
    navigate('/products')
  }

  return (
    <>
      <div className="flex h-screen justify-center">
        <div
          className="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)',
          }}
        >
          <div className="flex h-full items-center bg-gray-900 bg-opacity-40 px-20">
            <div>
              <h2 className="text-4xl font-bold text-white">eCommerce React</h2>
              <p className="mt-3 max-w-xl text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                autem ipsa, nulla laboriosam dolores, repellendus perferendis
                libero suscipit nam temporibus molestiae
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-md items-center px-6 lg:w-2/6">
          <div className="flex-1">
            <h2 className="text-center text-3xl font-bold text-gray-900">
              Entrar al sistema
            </h2>
            <div className="mt-8">
              <Form onSubmit={handleSubmit} onChange={handleChange} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
