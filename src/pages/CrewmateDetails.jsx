import React from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
const CrewmateDetails = () => {
    let {id} = useParams();
    const location = useLocation()
    const crewmate = location.state?.cMate
  return (
    <div>
      <h1>Crewmate: {crewmate.name}</h1>
      <p>speed: {crewmate.speed}</p>
      <p>Color: {crewmate.color}</p>
    </div>
  )
}

export default CrewmateDetails
