import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import { supabase } from '../client';
const EditCrewMate = () => {
    const {id} = useParams();
    const [crewmate,setCrewmate] = useState({id:null,name:"",speed:0,color:""})
    useEffect(()=>{
        const getCrewmate = async () => {
            const {data} = await supabase
            .from("Crewmates")
            .select('name','speed','color','id')
            .eq('id',id)
            
            setCrewmate(data)
        }
        getCrewmate()
        
    },[])
    console.log(crewmate)
  return (
    <div>
      <h1>Edit a Crewmate </h1>
    </div>
  )
}

export default EditCrewMate
