import * as S from './styles'

export const Knowledge = () => {
  const data = [
    {
      title: 'languages',
      icons: ['html', 'css', 'javascript', 'typescript'],
    },
    {
      title: 'frontend',
      icons: ['react', 'next', 'react-native'],
    },
    {
      title: 'styling',
      icons: ['sass', 'stitches', 'styled-components', 'tailwind', 'chakra-ui'],
    },
    {
      title: 'ui tools',
      icons: ['figma', 'adobe-xd', 'storybook'],
    },
    {
      title: 'testing',
      icons: ['jest', 'testing-library'],
    },
    {
      title: 'backend',
      icons: ['node-js', 'express', 'nest-js'],
    },
  ]

  const organizeIcons = (type: string) => {
    const arr = []

    if (type === 'mobile') return data

    if (type === 'left') {
      for (let i = 0; i < data.length; i += 2) {
        arr.push(data[i])
      }
    }

    if (type === 'right') {
      for (let i = 1; i < data.length; i += 2) {
        arr.push(data[i])
      }
    }

    return arr
  }

  return (
    <S.KnowledgeContainer>
      <S.KnowledgePosition variant='mobile'>
        {organizeIcons('mobile').map((item) => (
          <S.KnowledgeWrapper key={item.title}>
            <span>{item.title}</span>
            <S.IconWrapper>
              {item.icons.map((icon) => (
                <img
                  key={icon}
                  src={require(`../../assets/icons/${icon}.svg`)}
                  alt=''
                />
              ))}
            </S.IconWrapper>
          </S.KnowledgeWrapper>
        ))}
      </S.KnowledgePosition>

      <S.KnowledgePosition variant='left'>
        {organizeIcons('left').map((item) => (
          <S.KnowledgeWrapper key={item.title} variant='left'>
            <span>{item.title}</span>
            <S.IconWrapper>
              {item.icons.map((icon) => (
                <img
                  key={icon}
                  src={require(`../../assets/icons/${icon}.svg`)}
                  alt=''
                />
              ))}
            </S.IconWrapper>
          </S.KnowledgeWrapper>
        ))}
      </S.KnowledgePosition>

      <S.KnowledgePosition variant='right'>
        {organizeIcons('right').map((item) => (
          <S.KnowledgeWrapper key={item.title} variant='right'>
            <span>{item.title}</span>
            <S.IconWrapper>
              {item.icons.map((icon) => (
                <img
                  key={icon}
                  src={require(`../../assets/icons/${icon}.svg`)}
                  alt=''
                />
              ))}
            </S.IconWrapper>
          </S.KnowledgeWrapper>
        ))}
      </S.KnowledgePosition>
    </S.KnowledgeContainer>
  )
}
