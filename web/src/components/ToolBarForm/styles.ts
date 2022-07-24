import * as ToolbarPrimitive from '@radix-ui/react-toolbar';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { styled } from '../../theme/stitches.config';

const StyledToolbar = styled(ToolbarPrimitive.Root, {
  display: 'flex',
  padding: '$3',
  width: '100%',
  minWidth: 'max-content',
  borderRadius: 6,
  backgroundColor: 'white',
  boxShadow: '$elevation',
  margin: '$8 auto',
  gap: '$2',
  alignItems: 'center',
});

const StyledLink = styled(Link,{
    backgroundColor: 'transparent',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '$2',
    gap: '$2',
    borderRadius: '$md',
    textDecoration: 'none',
    transition: 'background .2s',
    fontSize: '$sm',
    color: '$textColor',
    
    '&:hover': { 
      backgroundColor: '$gray2', 
      cursor: 'pointer' 
    },
  }
);

export const Toolbar = StyledToolbar;
export const ToolbarLink = StyledLink;