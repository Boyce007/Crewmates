import React from 'react'

const RadioGroup = () => {
  return (
    <div>
       <label>
        <input type="radio" value="Red" checked={props.selectedOption === 'option1'} onChange={props.handleChange} />
        Option 1
      </label>
      <br />
      <label>
        <input type="radio" value="Green" checked={props.selectedOption === 'option2'} onChange={props.handleChange} />
        Option 2
      </label>
      <br />
      <label>
        <input type="radio" value="option3" checked={props.selectedOption === 'option3'} onChange={props.handleChange} />
        Option 3
      </label>
    </div>
  )
}

export default RadioGroup
