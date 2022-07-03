import { DrawingPinIcon } from "@radix-ui/react-icons";
import { css } from "@stitches/react";
import { styled } from "../../theme/stitches.config";



export const Container = styled('a', {
  background: '$backgrond',
  width: '100%',
  height: 80,
  
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  justifyContent: 'space-between',
  borderRadius: '$md',
  padding: '$2',
  border: '1px solid $gray4',
  cursor: 'pointer', 

  transition: '.2s',

  '&:hover': {
    boxShadow: '$elevation'
  }
});

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4'
})
export const Time = styled('div', {
  width: 50,
  height: 30,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  borderRadius: '$md',
  background: '$primaryAA',
  flexShrink: 0,

  'h1': {
    marginTop: 3,
    //color: '$gray11',
    color: '#7a5245',
    fontSize: '$sm',
  }  
});

export const Name =  styled('div', {
  'h2': {
    fontSize: '$md',
    color: '$textColor',

    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  } 
});

export const Info = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '$2',

  'p': {
    fontSize: '$xs',
    color: '$textColor',
    opacity: .6,
  }
});