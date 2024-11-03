import React from 'react'
import { useState } from 'react'
import { supabase } from '../client'
import './pages.css'
const Create = () => {
  const [crewmate,setCrewmate] = useState({name:"",speed:0.0,color:""})
  const colors = ["Red","Green","Blue","Purple","Yellow","Orange","Pink","Rainbow"]

  const handleChange = (e) => {
    const {name,value} = e.target;
    setCrewmate((prev)=> {
      return {
        ...prev,
        [name]:value,
      }})
  }
  
  
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
      <form>
                <label >Name</label> <br />
                <input type="text" id="name" name="name"  onChange={handleChange} /><br />
                <br/>

                <label >Speed</label><br />
                <input type="text" id="speed" name="speed"  onChange={handleChange} /><br />
                <br/>

                <label >Color</label><br />
                {colors.map(color=>(
                <label style={{display:'flex',flexDirection:"row-reverse",justifyContent:"center"}} key={color}>
                  {color}
                    <input
                     type="radio"
                      value={color}
                      checked={crewmate.color===color}
                      onChange={handleChange}
                      style={{display:'flex'}}
                      name="color"
                       />
                    
                </label>
                ))}        
                <br/>
                <input type="submit" value="Submit" onClick={createCrewmate} />

            </form>
    </div>
  )
}

export default Create
