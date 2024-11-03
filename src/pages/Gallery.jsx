import React from 'react'
import { useState,useEffect } from 'react'
import { supabase } from '../client'
import GalleryItem from '../components/GalleryItem'
import { Link } from 'react-router-dom'
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
  },[crewmates])
  return (
    <div>
      <h1>View all crewmates</h1>
      {crewmates.map(crewmate=>(
        <Link key={crewmate.id} to={`/crewmate/${crewmate}`} state={{cMate:crewmate}}> 
          <GalleryItem
          key={crewmate.id} 
          name={crewmate.name}
          color={crewmate.color} 
          speed={crewmate.speed}/>
        </Link>
      ))}
    </div>
  )
}

export default Gallery
