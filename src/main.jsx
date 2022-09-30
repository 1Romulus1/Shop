import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { CartProvider } from './contexts/CartContext'
import { ProductsProvider } from './contexts/ProductsContext'
import { UserProvider } from './contexts/UserContext'

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>
)
