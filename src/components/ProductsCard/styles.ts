import styled from 'styled-components'
import { Colors } from '../../styles'

export const CardComponent = styled.div`
  background-color: ${Colors.colorSecondary};
  padding: 8px;
  height: 338px;
  margin-top: 40px;
  width: 320px;
`

export const ProductImage = styled.img`
  display: block;
  width: 304px;
  margin-bottom: 8px;
`

export const InfoContainter = styled.div`
  flex-direction: column;
  padding: 0;
  color: ${Colors.pinkLight};
  width: 100%;
  justify-content: space-between;
  display: flex;
  height: 173px;
  margin: 0;
`
export const ProductTitle = styled.h2`
  font-weight: bold;
  font-size: 16px;
`
export const Description = styled.p`
  font-size: 14px;
`

export const TitleValuationContent = styled.div`
  justify-content: space-between;
  margin-bottom: 16px;
  display: flex;
  width: 100%;
`
