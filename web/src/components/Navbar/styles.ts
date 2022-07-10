import { styled } from "../../theme/stitches.config";

export const Container = styled('nav', {
  horizontalPadding: '',
  position: 'fixed',
  top: 0,
  height: 45,
  width: '100vw',
  zIndex: 1,
  background: '$background',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

});
