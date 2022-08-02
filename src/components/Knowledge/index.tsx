import * as S from './styles'

export const Knowledge = () => {
  const leftData = [
    {
      title: 'languages',
      qtdIcons: [1, 2, 3, 4],
    },
    {
      title: 'styling',
      qtdIcons: [1, 2, 3, 4, 5],
    },
    {
      title: 'ui components',
      qtdIcons: [1, 2],
    },
    {
      title: 'testing',
      qtdIcons: [1, 2],
    },
    {
      title: 'devops',
      qtdIcons: [1, 2, 3, 4, 5, 6],
    },
    {
      title: 'api',
      qtdIcons: [1, 2, 3],
    },
  ]

  const rightData = [
    {
      title: 'frontend',
      qtdIcons: [1, 2, 3, 4],
    },
    {
      title: 'state management',
      qtdIcons: [1, 2],
    },
    {
      title: 'ui tools',
      qtdIcons: [1, 2],
    },
    {
      title: 'backend',
      qtdIcons: [1, 2, 3],
    },
    {
      title: 'orm',
      qtdIcons: [1],
    },
    {
      title: 'database',
      qtdIcons: [1, 2, 3],
    },
  ]

  return (
    <S.KnowledgeContainer>
      <S.KnowledgeDivider direction='left'>
        {leftData.map((item) => (
          <S.KnowledgeWrapper direction='left' key={item.title}>
            <span>{item.title}</span>
            <S.IconWrapper>
              {item.qtdIcons.map((item) => (
                <S.Icon key={item} />
              ))}
            </S.IconWrapper>
          </S.KnowledgeWrapper>
        ))}
      </S.KnowledgeDivider>

      <S.KnowledgeDivider direction='right'>
        {rightData.map((item) => (
          <S.KnowledgeWrapper direction='right' key={item.title}>
            <span>{item.title}</span>
            <S.IconWrapper>
              {item.qtdIcons.map((item) => (
                <S.Icon key={item} />
              ))}
            </S.IconWrapper>
          </S.KnowledgeWrapper>
        ))}
      </S.KnowledgeDivider>
    </S.KnowledgeContainer>
  )
}
