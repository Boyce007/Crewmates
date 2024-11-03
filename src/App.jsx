import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Gallery from './pages/Gallery'
import Routing from './components/Routing'
import CrewmateDetails from './pages/CrewmateDetails'
import './App.css'

function App() {

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
      element:<Gallery/>,
  
    },
    {
      path:"crewmate/:id",
      element:<CrewmateDetails/>,
    },
  ])

  return (
    <div >
      <Routing/>
      {element}
    </div>
  )
}

export default App
