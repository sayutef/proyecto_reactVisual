import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Contacto from './components/pages/contacto.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
    },
    {
      path: '/contacto',
      element: <Contacto/>
      },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)
