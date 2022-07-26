import { amber, amberA, amberDark, blackA, gray, green, greenA, greenDark, red, redA, redDark, sky, yellow, yellowA, yellowDark } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

export const {
  config,
  css,
  globalCss,
  styled,
  theme,
  createTheme
} = createStitches({
  theme: {
    colors: {
      primary: '#DFA290',
      primaryLight: '#ffd3c0',
      primaryDark: '#ac7362',
      primaryA: 'hsla(13, 68%, 78%, .3)',
      primaryAA: 'hsla(13, 68%, 78%, .15)',

      background: '#FFF',

      textColor: gray.gray12,

      error: red.red11,
      errorDark: redDark.red8,
      errorA: redA.redA3,
      errorA4: redA.redA4,
      errorLight: red.red2,

      success: green.green9,
      successDark: greenDark.green8,
      successA: greenA.greenA3,
      successA4: greenA.greenA4,
      successLight: green.green2,

      warning: amber.amber11,
      warningDark: amberDark.amber8,
      warningA: amberA.amberA3,
      warningLight: amber.amber2,

      info: sky.sky8,

      modal: blackA.blackA9,

      ...gray,
    },

    fonts: {
      main: '"Roboto", -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;'
    },

    shadows: {
      primary: '0 0 0 0.2rem $colors$primaryA',
      error: '0 0 0 0.2rem $colors$errorLight',
      gray: '0 0 0 0.2rem $colors$gray2',
      success: `0 0 0 0.2rem ${greenA.greenA2}`,
      elevation: '0 .3rem .5rem 0 $colors$gray4'
    },

    space: {
      px: "1px",
      1: "0.25rem",
      2: "0.50rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.21rem",
      6: "1.50rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.5rem",
      10: "3rem",
      11: "3.5rem",
      12: "4rem",
      13: "4.5rem",
      14: "5rem",
      15: "5.5rem",
      20: "8rem",
      30: "13rem",
      40: "18rem",
      80: "36rem"
    },

    borderWidths: {
      thin: "1px solid",
      medium: "2.5px solid",
      bold: "4px solid"
    },

    radii: {
      xs: "2px",
      sm: "4px",
      md: "8px",
      lg: "10px",
      xlg: "20px",
      full: "999px"
    },

    fontWeights: {
      regular: "400",
      medium: "500",
      bold: "700"
    },

    fontSizes: {
      xxs: "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      '2xl': "1.5rem",
      '4xl': "1.875rem"
    },

  },
  media: {
    bp0: '(min-width: 1200px)',
    bp1: '(max-width: 1200px)',
    bp2: '(max-width: 952px)',
    bp3: '(max-width: 830px)',
    bp4: '(max-width: 500px)',
  },
  utils: {
    horizontalPadding: () => ({
      '@bp0': {
        padding: '0 224px',
      }, 
      '@bp1': {
        padding: '0 160px'
      },
      '@bp2': {
        padding: '0 100px'
      },
      '@bp3': {
        padding: '0 50px'
      }
    })
  }
})