import React from 'react'
import ReactDOM from 'react-dom/client'
import { inject } from '@vercel/analytics'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router'
import AuthProvider from './Providers/AuthProvider'

// Initialize Vercel Web Analytics
inject()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
