import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { useEffect } from 'react'

import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase.utils'

import ErrorPage from './routes/error/ErrorPage'
import Home from './routes/home/Home'
import Navigation from './routes/navigation/Navigation'
import Authentication from './routes/authentication/Authentication'
import Shop from './routes/shop/Shop'
import Checkout from './routes/checkout/Checkout'
import { setCurrentUser } from './store/user/user.action'
import { useDispatch } from 'react-redux'


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      dispatch(setCurrentUser(user))
    })

    return unsubscribe
  }, [dispatch]) //but dispatch never change, and we can leave ampty array
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Navigation />} errorElement={<ErrorPage />}>
        <Route errorElement={<ErrorPage />}>
          <Route index element={<Home />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='checkout' element={<Checkout />}/>
        </Route>
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
