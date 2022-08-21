import { createStitches } from '@stitches/react'

export const { styled, css } = createStitches({
  theme: {
    colors: {
      primary: '#00fea1',
      secondary: '#BA99F6',
      tertiary: '#FFAC00',
      background900: '#121212',
      background800: '#242424',
      text: '#FFFFFF',
    },
  },
  media: {
    phoneOnly: '(max-width: 599px)',
    tabletPortraitUp: '(min-width: 600px)',
    tabletLandscapeUp: '(min-width: 900px)',
    desktopUp: '(min-width: 1200px)',
    bigDesktopUp: '(min-width: 1800px)',
  },
})
