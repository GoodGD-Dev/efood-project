import React from 'react'

import Pizza from '../../assets/images/pizza.png'
import Close from '../../assets/images/close 1.png'
import {
  CloseButton,
  InfoContent,
  ModalContainer,
  ModalContent,
  ModalInfo,
  ModalText,
  ModalTitle
} from './styles'
import Button from '../Button'

type Props = {
  className: string
  onClick: () => void
}
const ProductModal = ({ className, onClick }: Props) => {
  return (
    <ModalContainer onClick={onClick} className={className}>
      <ModalContent>
        <header>
          <CloseButton onClick={onClick} src={Close} alt="Fechar" />
        </header>
        <InfoContent>
          <img src={Pizza} alt="Pizza" />
          <div>
            <ModalTitle>Pizza Margerita</ModalTitle>
            <ModalText>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </ModalText>
            <ModalInfo>Serve: de 2 a 3 pessoas</ModalInfo>
            <Button type="button" title="Adicionar ao carrinho - R$ 60,90">
              Adicionar ao carrinho - R$ 60,90
            </Button>
          </div>
        </InfoContent>
      </ModalContent>
    </ModalContainer>
  )
}

export default ProductModal
