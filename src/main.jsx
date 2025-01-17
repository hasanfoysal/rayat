import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Design from './Components/Design/Design';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root ></Root>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/skills',
        element: <Skills></Skills>
      },
      {
        path:'/projects',
        element:<Projects></Projects>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <div className='bg-black'>
   <div className='w-full h-screen absolute top-0 left-0 '>
    <Design></Design>
 </div>,
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
  </div>
)
