import styled from 'styled-components'
import { Colors } from '../../styles'
import VectorHeader from '../../assets/images/VectorHeader.png'
import Massa from '../../assets/images/massa.png'

export const HeaderBar = styled.header`
  justify-content: space-between;
  background-position: center;
  padding: 24px 48px;
  display: flex;
  height: 160px;
  background-image: url(${VectorHeader});
  background-size: cover;
  align-items: center;
  background-color: ${Colors.colorPrimary};
`

export const BannerStore = styled.div`
  background-position: center;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-image: url(${Massa});

  &::after {
    content: '';
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    left: 0;
    z-index: 1;
    width: 100%;
    position: absolute;
    height: 100%;
  }
`

export const BannerStoreContent = styled.div`
  width: 100%;
  margin: 0 auto;
  font-size: 32px;
  z-index: 2;
  justify-content: space-between;
  position: relative;
  color: ${Colors.white};
  padding: 24px 0;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  height: 100%;

  p {
    font-weight: 100;
  }
`
export const Logo = styled.img`
  width: 125px;
`

export const HContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
