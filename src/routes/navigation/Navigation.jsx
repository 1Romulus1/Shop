import { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

import CartIcon from '../../components/cart-icon/CartIcon'
import { signOutUser } from '../../utils/firebase.utils'
import { UserContext } from '../../contexts/UserContext'
import { CartContext } from '../../contexts/CartContext'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.scss'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
