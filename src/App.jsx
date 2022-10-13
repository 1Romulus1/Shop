import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import ErrorPage from './routes/error/ErrorPage'
import Home from './routes/home/Home'
import Navigation from './routes/navigation/Navigation'
import Authentication from './routes/authentication/Authentication'
import Shop from './routes/shop/Shop'
import Checkout from './routes/checkout/Checkout'


const App = () => {
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
