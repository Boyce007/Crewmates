import React from 'react'
import { Link } from 'react-router-dom'
import "./components.css"
const Routing = () => {
  return (
    <div className='routing-container'>
        <Link to='/' style={{margin:20,textDecoration: 'none',color:'black'}} >Home</Link>
        <Link to="/create" style={{margin:20,textDecoration: 'none',color:'black'}} > Create a Crewmate!</Link>
        <Link to={"/Gallery"} style={{margin:20,textDecoration: 'none',color:'black'}} > Crewmate Gallery</Link>
        
    </div>
  )
}

export default Routing
