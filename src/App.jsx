import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './routes/error/ErrorPage'
import Home from './routes/home/Home'
import Navigation from './routes/navigation/Navigation'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Navigation />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
