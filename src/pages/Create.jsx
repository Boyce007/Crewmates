import React from 'react'
import { useState } from 'react'
import { supabase } from '../client'
import CrewmateForm from '../components/CrewmateForm'
import './pages.css'
const Create = () => {
  const [crewmate,setCrewmate] = useState({name:"",speed:0.0,color:""})
 
  
  const createCrewmate = async (e) => {
    e.preventDefault();
    await supabase
    .from("Crewmates")
    .insert({name:crewmate.name,speed:crewmate.speed,color:crewmate.color})
    .select();
    window.location = "/";    
  }

  return (
    <div className='create-crewmate-container'>
      <h1>Create a crewmate</h1>
      <img src="src/assets/createCrewmate.png" alt="" />
      <CrewmateForm
      handleSubmit={createCrewmate}
      crewmateValue={crewmate}
      setCrewmateValue={setCrewmate}
      />
    </div>
  )
}

export default Create
