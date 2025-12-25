import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './Components/CartProvider/CartProvider.jsx'

 createRoot(document.getElementById('root')).render(

  <StrictMode>
  <BrowserRouter basename='/'>
  <CartProvider>
         <App />
  </CartProvider>
   
  </BrowserRouter>
 
  </StrictMode>,
)
