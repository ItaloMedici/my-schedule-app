import { styled } from "@stitches/react";
import { Button } from "../Button";
import { BaseButton } from "../Button/styles";

export const Container = styled('div', {
 position: 'relative'
})

export const AddButton = styled('button', {
  position: 'absolute',
  bottom: 'calc(50% - 17px + 16px)',
  right: 0,

  background: 'red',
})