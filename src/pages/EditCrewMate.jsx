import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
const EditCrewMate = () => {
    const {id} = useParams();
    const [crewmate,setCrewmate] = useState({id:null,name:"",speed:0,color:""})
    

  return (
    <div>
      <h1>{id} </h1>
    </div>
  )
}

export default EditCrewMate
