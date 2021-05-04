import {
  compose,
  Config,
  ConfigStyle,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  display,
  verticalAlign,
  overflow,
  RequiredTheme,
  ResponsiveValue,
  styleFn,
  system,
  Theme,
  ThemeValue,
} from 'styled-system'
import { rem } from 'polished'

export interface TypeProps<ThemeType extends Theme = RequiredTheme> {
  type?: ResponsiveValue<string | {}, ThemeType>
}

export const pxToRem = (pxUnit: number, base = '16px') => rem(pxUnit, base)
export const remToPx = (remUnit: number, base = '16px') => remUnit * Number.parseFloat(base)

export const FontSizeMap = {
  s: pxToRem(13),
  m: pxToRem(17),
  l: pxToRem(24),
  xl: pxToRem(32),
  xxl: pxToRem(64),
}

export const FontWeightMap = {
  normal: 400,
  bold: 700,
  black: 900,
}

export const FontFamilyMap = {
  default: '"Arial","sans-serif"',
}

const FontFamilyConfig: ConfigStyle = {
  property: 'fontFamily',
  scale: 'fonts',
}

const TypePropsConfig: Config = {
  type: FontFamilyConfig,
}

export const ColorsMap = {
  primary: '#1da1f2',
  white: '#ffffff',
  secondary: 'rgb(91, 112, 131)',
  borders: 'rgb(235, 238, 240)',
  background: '##F7F9FA',
  hover: 'rgba(29, 161, 242, 0.1)',
  error: 'rgb(224, 36, 94)',
  warning: 'rgb(255, 173, 31)',
}

export const BorderRadiusMap = {
  default: '16px',
  buttons: '9999px',
}

export const type: styleFn = system(TypePropsConfig)
export interface TextColorProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'colors', ThemeType>
> {
  textColor?: ResponsiveValue<TVal, ThemeType>
}

export interface BackgroundColorProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'colors', ThemeType>
> {
  bg?: ResponsiveValue<TVal, ThemeType>
  backgroundColor?: ResponsiveValue<TVal, ThemeType>
}

export interface ColorProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'colors', ThemeType>
> extends TextColorProps<ThemeType, TVal>,
    BackgroundColorProps<ThemeType, TVal> {}

const ColorConfig: ConfigStyle = {
  property: 'color',
  scale: 'colors',
}

const BackgroundConfig: ConfigStyle = {
  property: 'background',
  scale: 'colors',
}

const BackgroundColorConfig: ConfigStyle = {
  property: 'backgroundColor',
  scale: 'colors',
}

const ColorPropsConfig: Config = {
  textColor: ColorConfig,
  bg: BackgroundConfig,
  backgroundColor: BackgroundColorConfig,
}

export const color: styleFn = system(ColorPropsConfig)

export const ThemeConfig = {
  breakpoints: ['578px', '986px', '1400px'],
  colors: ColorsMap,
  fonts: FontFamilyMap,
  fontSizes: FontSizeMap,
  fontWeights: FontWeightMap,
  radii: BorderRadiusMap,
}

export const layoutExclSize: styleFn = compose(
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  display,
  verticalAlign,
  overflow
)
