import React from 'react'

import { BannerStore, BannerStoreContent, HeaderBar, Logo } from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const HeaderStore = () => (
  <div>
    <HeaderBar>
      <h3>Restaurantes</h3>
      <Link to="/">
        <Logo src={logo} alt="efood" />
      </Link>
      <p>0 produto(s) no carrinho</p>
    </HeaderBar>
    <BannerStore>
      <BannerStoreContent>
        <p>Italiana</p>
        <h3>La Dolce Vita Trattoria</h3>
      </BannerStoreContent>
    </BannerStore>
  </div>
)

export default HeaderStore
