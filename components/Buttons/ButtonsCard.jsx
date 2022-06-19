import React from 'react'

const ButtonsCard = ({type, text, clases, edit}) => {

    const color = edit ? "blue" : "red"

  return (

    <button type={type} 
        className={`rounded-md text-${color}-700 border-${color}-400 border-2 font-semibold p-1 capitalize`}
    >{text}
    
    </button>

  )
}

export default ButtonsCard