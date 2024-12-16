import styled from 'styled-components'
import { Colors } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  margin-left: 8px;
  background-color: ${Colors.colorSecondary};
  color: ${Colors.white};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
`
