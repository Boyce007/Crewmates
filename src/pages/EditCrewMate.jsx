import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import { supabase } from '../client';
import CrewmateForm from '../components/CrewmateForm';
const EditCrewMate = () => {
    const {id} = useParams();
    const [crewmate,setCrewmate] = useState({id:null,name:"",speed:0,color:""})
    useEffect(()=>{
        const getCrewmate = async () => {
            const {data} = await supabase
            .from("Crewmates")
            .select('name,speed,color')
            .eq('id',id)
            setCrewmate(data[0])
        }
        
        getCrewmate()
        
    },[])

    const updateCrewmate = async (e) => {
        e.preventDefault();
        await supabase
        .from("Crewmates")
        .update({name:crewmate.name,speed:crewmate.speed,color:crewmate.color})
        .eq('id',id)
        window.location = "/";
        alert("crewmate updated sucessful")


    }

    const deleteCrewmate = async (e) => {
        e.preventDefault();
        await supabase
        .from("Crewmates")
        .delete()
        .eq('id',id)
        window.location = "/";

    }

  return (
    <div>
      <h1>Edit a Crewmate </h1>
      <h2>Current Info:</h2>
      <p>Name:{crewmate.name},Speed:{crewmate.speed},Color:{crewmate.color}</p>
      <CrewmateForm
      handleSubmit={updateCrewmate}
      crewmateValue={crewmate}
      setCrewmateValue={setCrewmate}
      />
      <button onClick={deleteCrewmate} >Delete</button>

    </div>
  )
}

export default EditCrewMate
