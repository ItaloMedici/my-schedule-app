import { styled } from "../../../theme/stitches.config";
import * as LabelPrimitive from '@radix-ui/react-label';
import { ContainerBase, FieldBase, LabelBase } from "../Base";

export const Container = styled('div', ContainerBase)
export const Label = styled('label', LabelBase);
export const Input = styled('input', FieldBase);