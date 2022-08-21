import { styled } from '../../styles/theme/default'
import background from '../../assets/about-background.png'

export const SectionContainer = styled('div', {
  backgroundColor: '$background900',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '64px',
  textAlign: 'center',
  margin: 'auto',

  '@tabletPortraitUp': {
    backgroundImage: `url(${background})`,
  },
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '60px 0',
  gap: 32,
  textAlign: 'center',
  margin: 'auto',

  '@tabletLandscapeUp': {
    flexDirection: 'row',
    gap: 64,
  },
})

export const AboutWrapper = styled('div', {
  textAlign: 'left',

  '& h1': {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '$primary',
    marginBottom: 24,
  },
  '& p': {
    fontSize: '0.875rem',
    color: '$text',
    lineHeight: 2.2,
    marginBottom: 32,
  },

  '@desktopUp': {
    '& h1': {
      fontSize: '4.5rem',
      fontWeight: 'bold',
      color: '$primary',
    },
    '& p': {
      fontSize: '1rem',
      color: '$text',
      lineHeight: 2.2,
      marginBottom: '32px',
    },
  },
})

export const ContactButton = styled('button', {
  padding: '16px 32px',
  borderRadius: '10px',
  cursor: 'pointer',
  variants: {
    variant: {
      primary: {
        background: '$secondary',
        color: '$text',
      },
      secondary: {
        background: 'transparent',
        color: '$secondary',
        border: '2px solid $secondary',
      },
    },
  },
})
