import React from 'react'
import { useState,useEffect } from 'react'
import { supabase } from '../client'
import GalleryItem from '../components/GalleryItem'
const Gallery = () => {
  const [crewmates,setCrewmates] = useState([])
  useEffect(()=> {
    const fetchCrewmates = async () => {
      const {data} = await supabase
      .from("Crewmates")
      .select()
      setCrewmates(data)
    }
    fetchCrewmates();
    console.log(crewmates)
  },[crewmates])
  return (
    <div>
      <h1>View all crewmates</h1>
      {crewmates.map(crewmate=>(
        <GalleryItem
        key={crewmate.id} 
        name={crewmate.name}
        color={crewmate.color} 
        speed={crewmate.speed}/>
      ))}
    
    </div>
  )
}

export default Gallery
