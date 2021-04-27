import React from 'react'

export interface ButtonProps {
  content: string
}

export const Button: React.FC<ButtonProps> = ({ content }) => {
  return <button>{content}</button>
}
