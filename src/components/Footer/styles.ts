import styled from 'styled-components'
import { Colors } from '../../styles'

export const SocialContent = styled.div`
  margin: 24px 0 60px 0;
  justify-content: space-between;
  display: flex;
  width: 88px;
  gap: 8px;

  img {
    width: 24px;
  }
`

export const FooterContent = styled.div`
  align-items: center;
  display: flex;
  width: 640px;
  flex-direction: column;

  img {
    width: 125px;
  }

  p {
    text-align: center;
    font-size: 12px;
  }
`
export const FooterContainer = styled.header`
  background-color: ${Colors.colorPrimary};
  padding-top: 24px;
  display: flex;
  align-items: start;
  height: 280px;
  justify-content: center;
`
