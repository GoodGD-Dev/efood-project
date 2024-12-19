import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

import { HContainer, HeaderBar, Logo } from './styles'

const HeaderStore = () => {
  return (
    <div>
      <HeaderBar>
        <HContainer>
          <h3>Restaurantes</h3>
          <Link to="/">
            <Logo src={logo} alt="efood" />
          </Link>
          <p>0 produto(s) no carrinho</p>
        </HContainer>
      </HeaderBar>
    </div>
  )
}

export default HeaderStore
