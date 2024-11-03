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
    <GalleryItem 
     name={crewmates[0].name}
     color={crewmates[0].color} 
     speed={crewmates[0].speed}/>
    </div>
  )
}

export default Gallery
