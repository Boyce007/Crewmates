import React from 'react'
import { useState } from 'react'
import { supabase } from '../client'
const Create = () => {
  const [crewmate,setCrewmate] = useState({name:"",speed:0.0,color:""})

  const handleChange = (e) => {
    const {name,value} = e.target;
    setCrewmate((prev)=> {
      return {
        ...prev,
        [name]:value,
      }
    })
  }
  
  const createCrewmate = async (e) => {
    e.preventDefault();
    await supabase
    .from("Crewmates")
    .insert({name:crewmate.title,speed:crewmate.speed,color:crewmate.color})
    .select();
    window.location = "/";

    
  }

  return (
    <div>
      <form>
                <label >Name</label> <br />
                <input type="text" id="title" name="title" onChange={handleChange} /><br />
                <br/>

                <label >Speed</label><br />
                <input type="text" id="author" name="author" onChange={handleChange} /><br />
                <br/>

                <label >Color</label><br />
                <input rows="5" cols="50" id="description" onChange={handleChange}>
                </input>
                <br/>
                <input type="submit" value="Submit" onClick={createCrewmate} />

            </form>
    </div>
  )
}

export default Create
