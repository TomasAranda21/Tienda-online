import React from 'react'

const ButtonsCard = ({type, text, click}) => {

  return (

    <button type={type} onClick={click}
    
        className={text === 'Editar' ? `rounded-md text-blue-700 border-blue-400 border-2 font-semibold p-1 capitalize` : `rounded-md text-red-700 border-red-400 border-2 font-semibold p-1 capitalize`}
   
   >{text}
    
    </button>

  )
}

export default ButtonsCard