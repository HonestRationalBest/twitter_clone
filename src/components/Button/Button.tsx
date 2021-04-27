import React from 'react'
import styled from 'styled-components'

export interface ButtonProps {
  content: string
}

export const Button: React.FC<ButtonProps> = ({ content }) => {
  return <button>{content}</button>
}
