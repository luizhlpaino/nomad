import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>
    <S.Heading>About</S.Heading>
    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit iste
        reiciendis maxime magnam inventore explicabo exercitationem ducimus a
        quibusdam fugiat? Deserunt qui provident incidunt ad dignissimos
        inventore dolore unde voluptas?
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
