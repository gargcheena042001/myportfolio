import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Navbar from './components/projectslider/Sd.jsx'
import Root from './Root.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>

      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='projects' element={<Navbar/>}/>

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>  
  </StrictMode>,
)
