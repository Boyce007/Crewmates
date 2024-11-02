import React from 'react'
import { Link } from 'react-router-dom'
import "./Routing.css"
const Routing = () => {
  return (
    <div className='routing-container'>
        <Link to='/' style={{margin:20}}>Home</Link>
        <Link to="/create" style={{margin:20}}> Create a Crewmate</Link>
        <Link to={"/Gallery"} style={{margin:20}}> Crewmate Gallery</Link>
     
    </div>
  )
}

export default Routing
