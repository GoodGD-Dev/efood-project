import styled from 'styled-components'
import { Colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const ModalContainer = styled.div`
  justify-content: space-between;
  z-index: 2;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: none;
  align-items: center;

  &.visible {
    display: flex;
  }

  ${ButtonContainer} {
    height: 24px;
    width: 218px;
  }

  // ao descomponentizar modal after vira uma classe .overlay para que o fechamento do modal aconteça somente ao clicar no fundo

  &::after {
    content: '';
    position: absolute;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
    width: 100%;
    /* z-index: 4; */
  }
`

export const ModalContent = styled.div`
  background-color: ${Colors.colorSecondary};
  padding: 8px;
  color: ${Colors.white};
  max-width: 1024px;
  height: 344px;
  width: 100%;
  margin: 0 auto;
  z-index: 1;

  > header {
    margin: 0;
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: end;
  }
`

export const CloseButton = styled.img`
  cursor: pointer;
  color: ${Colors.white};
`

export const InfoContent = styled.div`
  align-items: start;
  justify-content: center;
  display: flex;

  > img {
    height: 280px;
    margin-right: 24px;
    width: 280px;
  }
`
export const ModalText = styled.p`
  margin-bottom: 24px;
  font-size: 14px;
`

export const ModalInfo = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
`

export const InfoButton = styled.div``

export const ModalTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`
