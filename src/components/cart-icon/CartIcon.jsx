import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cartIcon.scss'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shoping-icon' />
      <span className='item-count'>o</span>
    </div>
  )
}

export default CartIcon
