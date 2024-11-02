import React from 'react'
import { Link } from 'react-router-dom'
const Routing = () => {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to="/create"> Createn a Crewmate</Link>
        <Link to={"/Gallery"}> Crewmate Gallery</Link>
      </nav>
    </div>
  )
}

export default Routing
