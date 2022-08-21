import { styled } from '../../styles/theme/default'

export const KnowledgeContainer = styled('div', {
  display: 'flex',
  gap: 32,
  width: '100%',
})

export const KnowledgePosition = styled('div', {
  gap: 32,
  flexDirection: 'column',
  flex: 1,

  variants: {
    variant: {
      mobile: {
        display: 'flex',

        '@tabletPortraitUp': {
          display: 'none',
        },
      },
      left: {
        display: 'none',

        '@tabletPortraitUp': {
          display: 'flex',
        },
      },
      right: {
        display: 'none',

        '@tabletPortraitUp': {
          display: 'flex',
          marginTop: 58,
        },
      },
    },
  },
})

export const KnowledgeWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,

  '& span': {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '$text',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    textAlign: 'left',
  },

  variants: {
    variant: {
      left: {
        alignItems: 'flex-end',

        '& > div': {
          justifyContent: 'flex-end',
        },
      },
      right: {
        alignItems: 'flex-start',

        '& > div': {
          justifyContent: 'flex-start',
        },
      },
    },
  },
})

export const IconWrapper = styled('div', {
  display: 'flex',
  width: '100%',
  gap: 16,

  '& img': {
    width: 48,
    height: 48,
  },
})
