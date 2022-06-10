import React from 'react'
import { Button } from '../../atoms/Button'
import { InputLabel } from '../../molecules/InputLabel'

export interface IForm {
  onChange?: () => void
  onSubmit?: () => void
}

export const Form = ({ onChange, onSubmit }: IForm) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="px-2 py-2">
        <InputLabel
          label="Email"
          type="email"
          id="email"
          name="email"
          required={true}
          onChange={onChange}
        />
      </div>
      <div className="px-2 py-2">
        <InputLabel
          label="Password"
          type="password"
          id="password"
          name="password"
          required={true}
          onChange={onChange}
        />
      </div>
      <div className="top-0 flex items-center justify-between pb-8">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
            Recordarme
          </label>
        </div>
        <div className="text-sm">
          <a
            href="/"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            ¿Olvidaste tu constraseña?
          </a>
        </div>
      </div>
      <div className="px-2 py-2">
        <Button variant="contained" size="large">
          Login
        </Button>
      </div>
    </form>
  )
}
