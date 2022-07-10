import { globalCss } from "../theme/stitches.config";

export default globalCss({
  '*': {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
  },

  html: {
    minHeight: '100%',
    background: '$background',
    overflow: 'hidden'
  },

/*   @media (max-width: 1080px){
    html {
      font-size: 93.75%; // 15px
    }
  }

  @media (max-width: 720px){
    html{
      font-size: 87.5%; // 14px 
    }
  } */


  '*, button, input': {
    border: '0',
    background: 'none',
    fontFamily: '$main',
    color: '$textColor',
  }
})
