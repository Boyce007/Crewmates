import React from 'react'
const CrewmateForm = ({handleSubmit,crewmateValue,setCrewmateValue}) => {
const colors = ["Red","Green","Blue","Purple","Yellow","Orange","Pink","Rainbow"]

const handleChange = (e) => {
    const {name,value} = e.target;
    setCrewmateValue((prev)=> {
      return {
        ...prev,
        [name]:value,
      }})
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
                      checked={crewmateValue.color===color}
                      onChange={handleChange}
                      style={{display:'flex'}}
                      name="color"
                       />
                    
                </label>
                ))}        
                <br/>
                <button type="submit" value="Submit" >Submit</button>

        </form>
    </div>
  )
}

export default CrewmateForm
