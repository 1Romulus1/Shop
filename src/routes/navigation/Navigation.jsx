import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { signOutUser } from '../../utils/firebase.utils'
import {selectCurrentUser} from '../../store/user/user.selector'

import CartIcon from '../../components/cart-icon/CartIcon'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import { LogoContainer, NavigationContainer, NavLink, NavLinks } from './navigation.styles'
import { selectIsCartOpen } from '../../store/cart/cart.selector'

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)

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
