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

/* Typeface */
// Constants
const BASE_FONT_SIZE = '16px'

// Interface
export interface TypeProps<ThemeType extends Theme = RequiredTheme> {
  type?: ResponsiveValue<string | {}, ThemeType>
}

// Helpers
export const pxToRem = (pxUnit: number, base = BASE_FONT_SIZE) => rem(pxUnit, base)
export const remToPx = (remUnit: number, base = BASE_FONT_SIZE) => remUnit * Number.parseFloat(base)

// Maps
export const FontSizeMap = {
  s: pxToRem(14),
  m: pxToRem(Number.parseInt(BASE_FONT_SIZE)),
  l: pxToRem(30),
  xl: pxToRem(50),
  xxl: pxToRem(65),
}

export const FontWeightMap = {
  normal: 400,
  bold: 700,
  black: 900,
}

export const FontFamilyMap = {
  default: '"Nunito", sans-serif',
}

// Styled system declarations
const FontFamilyConfig: ConfigStyle = {
  property: 'fontFamily',
  scale: 'fonts',
}

// Styled system configurations
const TypePropsConfig: Config = {
  type: FontFamilyConfig,
}

export const type: styleFn = system(TypePropsConfig)

/* Colors */
// Interface
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

// Maps
export const ColorsMap = {
  primary: '#633B6D',
  secondary: '#333333',
  background: '#F6F2E8',
  white: '#FFFFFF',
  lightBlack: '#606060',
  black: '#333333',
  darkSand: '#D6C9AE',
  sand: '#F6F2E8',
  lightSand: '#FFFCF4',
  success: '#55AE79',
  warning: '#FFB82E',
  error: '#FD7F72',
  info: '#5B7781',
  grey: '#5B7781',
  primaryHover: '#633B6D',
  secondaryHover: '#333333',
}

// Styled system declarations
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

// Styled system configurations
const ColorPropsConfig: Config = {
  textColor: ColorConfig,
  bg: BackgroundConfig,
  backgroundColor: BackgroundColorConfig,
}

export const color: styleFn = system(ColorPropsConfig)

/* Borders */
// Maps
export const BorderRadiusMap = {
  sm: '10px',
  md: '16px',
}

// Theme export
export const ThemeConfig = {
  breakpoints: ['578px', '986px', '1400px'],
  colors: ColorsMap,
  fonts: FontFamilyMap,
  fontSizes: FontSizeMap,
  fontWeights: FontWeightMap,
  radii: BorderRadiusMap,
}

/* Layout */
// Helpers
export const layoutExclSize: styleFn = compose(
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  display,
  verticalAlign,
  overflow
)
