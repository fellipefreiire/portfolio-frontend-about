import { styled } from '../../styles/theme/default'

export const KnowledgeContainer = styled('div', {
  display: 'flex',
  gap: '48px',
  fontSize: '24px',
  fontWeight: 'bold',
  color: 'white',
  textTransform: 'uppercase',
})

export const KnowledgeDivider = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  variants: {
    direction: {
      left: {
        textAlign: 'right',
      },
      right: {
        textAlign: 'left',
        marginTop: '64px',
      },
    },
  },
})

export const KnowledgeWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  variants: {
    direction: {
      left: {
        alignItems: 'flex-end',
      },
      right: {
        alignItems: 'flex-start',
      },
    },
  },
  '& span': {
    color: '$text',
    whiteSpace: 'nowrap',
    fontSize: '1.5rem',
  },
})

export const IconWrapper = styled('div', {
  display: 'flex',
  gap: '16px',
})

export const Icon = styled('div', {
  width: '48px',
  height: '48px',
  background: '$secondary',
})
