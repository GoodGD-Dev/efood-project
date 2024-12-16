import React from 'react'

import { HeaderBar, Logo, Subtitle } from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import VectorHeader from '../../assets/images/VectorHeader.png'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${VectorHeader})` }}>
    <Link to="/">
      <Logo src={logo} alt="efood" />
    </Link>

    <Subtitle>Viva experiências gastronômicas no conforto da sua casa</Subtitle>
  </HeaderBar>
)

export default Header
