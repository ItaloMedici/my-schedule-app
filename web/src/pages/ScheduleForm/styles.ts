import { InputText } from "../../components/Fields/InputText";
import { css, styled } from "../../theme/stitches.config";

export const Container = styled('div', {
  horizontalPadding: '',
  
})

const inline = css({
  display: 'flex',
  gap: '$4',
})

export const StatusWrapper = styled('div', {
  ...inline,
  alignItems: 'center',
})

export const DateWrapper = styled('div', {
  ...inline,

  

})