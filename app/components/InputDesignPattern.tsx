import React from 'react'

const InputDesignPattern = ({
  text, 
  inputType,
  inputId,
  placeholder
}:{
  text : string
  inputType : string
  inputId : string
  placeholder : string

}) => {
  return (
    <div>
      <label htmlFor={inputId}>{text}</label>
      <input 
        type={inputType}
        name={inputId}
        id={inputId}
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputDesignPattern