import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './routes/error/ErrorPage'
import Home from './routes/home/Home'
import Navigation from './routes/navigation/Navigation'
import SignIn from './routes/sign-in/SignIn'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigation />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/signin',
          element: <SignIn />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
