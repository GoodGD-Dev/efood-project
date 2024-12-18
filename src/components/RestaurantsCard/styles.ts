import styled from 'styled-components'
import { Colors } from '../../styles'

export const CardComponent = styled.div`
  background-color: ${Colors.white};
  width: 472px;
  margin-top: 40px;
  position: relative;
`

export const ProductImage = styled.img`
  display: block;
`

export const Infos = styled.div`
  right: 16px;
  display: flex;
  position: absolute;
  top: 16px;
`
export const TitleValuationContent = styled.div`
  width: 100%;
  justify-content: space-between;
  margin-bottom: 16px;
  display: flex;
`

export const ProductTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
export const InfoContainter = styled.div`
  width: 472px;
  padding: 8px;
  border-right: 1px solid ${Colors.colorSecondary};
  border-bottom: 1px solid ${Colors.colorSecondary};
  height: 181px;
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${Colors.colorSecondary};
  justify-content: space-between;
`

export const Valuation = styled.p`
  font-weight: bold;
  margin-right: 4px;
  font-size: 18px;
`
export const Description = styled.p`
  font-size: 14px;
`

export const ValuationContent = styled.div`
  display: flex;
  align-items: center;
`
