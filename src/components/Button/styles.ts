import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Colors } from '../../styles'

export const ButtonContainer = styled.button`
  width: 100%;
  background-color: ${Colors.pinkLight};
  cursor: pointer;
  color: ${Colors.colorSecondary};
  font-size: 14px;
  padding: 4px;
  height: 24px;
  font-weight: bold;
  margin-top: 16px;
  border: none;
  display: inline-block;
`

export const ButtonLink = styled(Link)`
  height: 24px;
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
  color: ${Colors.white};
  background-color: ${Colors.colorSecondary};
  cursor: pointer;
  text-decoration: none;
  width: 82px;
  padding: 4px;
  text-align: center;
  border: none;
  margin-top: 16px;
`
