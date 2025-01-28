import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar  from './components/Navbar'
import Home from './components/Home'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'



const router = createBrowserRouter(
  [
    {
      path: '/',
      element:
        <div>
          <Navbar />
          <Home/>
          
      </div>
    },
    {
      path: '/pastes',
      element:
        <div>
          <Navbar />
          <Paste/>
          
      </div>
    },
    {
      path: '/pastes/:id',
      element:
        <div>
          <Navbar />
          <ViewPaste/>
          
      </div>
    },
  ]

);
import './App.css'



function App() {
 

  return (
    <>
      <RouterProvider router={router}/>

    </>
  )
}

export default App
