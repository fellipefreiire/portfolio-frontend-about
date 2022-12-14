import { Container } from '../Container'
import { Knowledge } from '../Knowledge'
import * as S from './styles'

export const Section = () => {
  return (
    <S.SectionContainer>
      <Container>
        <S.Content>
          <S.AboutWrapper>
            <h1>About me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit
            </p>
            <S.ContactButton variant='secondary'>Contact Me</S.ContactButton>
          </S.AboutWrapper>
          <Knowledge />
        </S.Content>
      </Container>
    </S.SectionContainer>
  )
}
