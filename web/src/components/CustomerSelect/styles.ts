import { styled } from "../../theme/stitches.config";
import { Button } from "../Button";
import { BaseButton } from "../Button/styles";
import { LabelBase } from "../Fields/Base";

export const Container = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  boxSizing: 'border-box'
})

export const Label = styled('label', LabelBase);

export const Wrapper = styled('div', {
  display: 'flex',
  gap: '$4'
})