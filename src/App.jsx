import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Gallery from './pages/Gallery'
import Routing from './components/Routing'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let element = useRoutes([
    {
      path:'/',
      element: <Home/>
    },
    {
    path:"/create",
    element: <Create/>
    },
    {
      path:"/gallery",
      element:<Gallery/>
    }
  ])

  return (
    <div >
      <Routing/>
      {element}
    </div>
  )
}

export default App
