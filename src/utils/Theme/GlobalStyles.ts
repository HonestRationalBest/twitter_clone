import { fluidRange } from 'polished'
import { createGlobalStyle } from 'styled-components/macro'
import { FontFamilyMap } from './Theme'

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  *:disabled {
    opacity: 0.7;
    pointer-events: none;
  }
  html,
  body {
    min-width: 320px;
    min-height: 100vh;
    /* HACK: iOS 100vh fix */
    min-height: -webkit-fill-available;
    margin: 0;
    ${fluidRange(
      {
        prop: 'font-size',
        fromSize: '14px',
        toSize: '16px',
      },
      '320px',
      '1920px'
    )}
    cursor: initial;
    background-color: transparent;
  }
  body {
    font-family: ${FontFamilyMap.default};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.4;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 0.5em 0;
    line-height: 1.3;
    letter-spacing: 0;
  }
  p {
    margin: 0;
  }
  ol {
    margin: 0;
    padding: 0;
  }
  input {
    &:-webkit-autofill {
      background-clip: text;
    }

    ::placeholder {
    font-size: inherit;
    }

    &[type="number"] {
      appearance: textfield;

      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        appearance: none;
        margin: 0;
      }
    }
  }
  button,
  [type="button"],
  [type="submit"],
  [type="reset"] {
    &:-moz-focusring {
      outline: none;
    }
    cursor: pointer;
  }
  code,
  kbd,
  samp,
  pre {
    font-family: ${FontFamilyMap.default};
    font-size: 1em;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  :focus {
    outline: none;
  }
`
