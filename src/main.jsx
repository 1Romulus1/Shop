import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { CartProvider } from './contexts/CartContext'
import { CategoriesProvider } from './contexts/CategoriesContext'
import { UserProvider } from './contexts/UserContext'


import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <CategoriesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CategoriesProvider>
    </UserProvider>
  </React.StrictMode>
)
