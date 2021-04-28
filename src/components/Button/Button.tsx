import React from 'react'
import styled from 'styled-components'
import {
  compose,
  display,
  DisplayProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  background,
  BackgroundProps,
  BorderRadiusProps,
  borderRadius,
  BorderProps,
  border,
  PaddingProps,
  padding,
} from 'styled-system'
import { color, ColorProps } from '../../utils/Theme'

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    DisplayProps,
    SpaceProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    FlexboxProps,
    GridProps,
    BackgroundProps,
    BorderRadiusProps,
    BorderProps,
    PaddingProps {}

export const Button = styled.button<BoxProps>(
  compose(
    display,
    space,
    color,
    layout,
    position,
    flexbox,
    grid,
    background,
    borderRadius,
    border,
    padding
  )
)
