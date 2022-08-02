import { styled } from '../../styles/theme/default'
import background from '../../assets/about-background.png'

export const SectionContainer = styled('div', {
  backgroundColor: '$background900',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundImage: `url(${background})`,
  padding: '60px 110px 60px 128px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '64px',
  textAlign: 'center',
  margin: 'auto',
})

export const AboutWrapper = styled('div', {
  textAlign: 'left',
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
