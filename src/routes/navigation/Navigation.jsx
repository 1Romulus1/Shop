import { Fragment, useContext } from 'react'
import { Outlet } from 'react-router-dom'

import { UserContext } from '../../contexts/UserContext'
import { CartContext } from '../../contexts/CartContext'
import { signOutUser } from '../../utils/firebase.utils'

import CartIcon from '../../components/cart-icon/CartIcon'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import { LogoContainer, NavigationContainer, NavLink, NavLinks } from './navigation.styles'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
