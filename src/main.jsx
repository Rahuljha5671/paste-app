import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './store.js'
import { Provider } from 'react-redux'
import {Toaster} from 'react-hot-toast'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
    <App />
    <Toaster/>
  </Provider>
  ,
)
