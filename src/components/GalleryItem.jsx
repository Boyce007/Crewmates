/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const GalleryItem = ({name,speed,color}) => {
  return (
    <div className='gallery-item-container'>
      <p>Name of crewmate:{name}</p>
      <p>Speed of crewmate {speed}mph</p>
      <p>Color of crewmate {color}</p>
    </div>
  )
}

export default GalleryItem
