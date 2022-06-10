import React from 'react'

export interface IButtonProps {
  variant?: 'text' | 'contained' | 'outlined'
  backgroundColor?: string
  color?: 'success' | 'warning' | 'error' | 'secondary'
  size?: 'small' | 'normal' | 'large'
  textColor?: string
  onClick?: () => void
  disabled?: boolean
  children: React.ReactNode
}
