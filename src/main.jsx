import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import {BrowserRouter } from 'react-router-dom'
import GlobalStyles from './styles/GrobalStyles'
import AppProvider from './hooks'
import { Elements } from '@stripe/react-stripe-js'
import stripePromise from './config/stripeConfig'
import { ThemeProvider } from 'styled-components'
import { standardTheme } from './styles/themes/standard'
import {Router} from './routes'
//import { router } from './routes'

//import { Header } from './components/Header'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={{ standardTheme }}>
      <AppProvider>
        <Elements stripe={stripePromise}>
        {/* <RouterProvider router={router} /> */}
        <BrowserRouter><Router /></BrowserRouter>
        </Elements>       
        <GlobalStyles />
        <ToastContainer autoClose={2000} />
      </AppProvider>
    </ThemeProvider>
  </StrictMode>,
)
