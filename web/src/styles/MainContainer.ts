import { styled } from "../theme/stitches.config";


export const MainContainer = styled('div', {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  horizontalPadding: '',

  variants: {
    bg: {
      primary: {background: '$backgrond'},
      secondary: {background: '$gray2'},
    }
  }
});

