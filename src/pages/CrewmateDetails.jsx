import React from 'react'
import { useNavigate, useParams,useLocation } from 'react-router-dom'

const CrewmateDetails = () => {
    let {id} = useParams();
    const location = useLocation()
    const crewmate = location.state?.cMate
    const navigate = useNavigate();
  return (
    <div>
      <h1>Crewmate: {crewmate.name}</h1>
      <p>speed: {crewmate.speed}</p>
      <p>Color: {crewmate.color}</p>
      <button onClick={()=>navigate(`/edit/${crewmate.id}`) }>Edit Crewmate</button>
    </div>
  )
}

export default CrewmateDetails
