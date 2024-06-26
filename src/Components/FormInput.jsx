import React from 'react'
import "./CSS/FormInput.css"

const FormInput = (props) => {
  return (
    <div className='input-box'>
      <input name={props.name} id={props.id} className='input-name'/>
      <label htmlFor={props.id} className="input-name-label">{props.label}:</label>
    </div>
  )
}

export default FormInput