import { css, styled } from "../../../theme/stitches.config";

export const ContainerBase = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  position: 'relative',
})

export const LabelBase = css({
  fontSize: '$sm',
  marginBottom: '$2'
});

export const FieldBase = css({
    width: '100%',
    backgroundColor: '$background',
    borderRadius: '$md',
    border: '1px solid $gray5',
  
    fontSize: '$md',
    
    '&:focus': {
      outline: 'none',
      borderColor: '$primary',
      boxShadow: '$primary'
    },
  
    transition: 'background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s',
  
    '&:disabled': {
      opacity: .7
    },
  
    variants: {
      size: {
        xs: {
          padding: '$1'
        },
        sm: {
          padding: '$2'
        },
        md: {
          padding: '$3'
        },
        xl: {
          padding: '$4'
        }
      },
  
      invalid: {
        true: {
          borderColor: '$error',
          
          '&:focus': {
            boxShadow: '$error',
            borderColor: '$error',
          }
        }
      },

      noMargin: {
        true: {
          margin: 'none'
        }, 
        false: {
          marginBottom: '$4',
        }
      }
    },
  
    defaultVariants: {
      size: 'sm',
      noMargin: false
    }
})