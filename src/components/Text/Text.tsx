import styled from 'styled-components/macro'
import {
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  LayoutProps,
  space,
  SpaceProps,
  textAlign,
} from 'styled-system'
import { color, ColorProps, type, TypeProps } from '../../../utils/Theme'

export interface TextProps
  extends SpaceProps,
    LayoutProps,
    ColorProps,
    FontWeightProps,
    FontSizeProps,
    TypeProps {
  children: string
}

export const Text = styled.p<TextProps>`
  ${fontWeight};
  ${fontSize};
  ${type};
  ${textAlign};
  ${space};
  ${color};
`

Text.defaultProps = {
  fontSize: 'm',
  fontWeight: 'normal',
  type: 'default',
}
