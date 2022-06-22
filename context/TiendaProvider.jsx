import React, { createContext } from 'react'

const TiendaContext = createContext()

export const TiendaProvider = ({children}) => {

  return (

    <TiendaContext.Provider
    value={{
        
    }}
    >

        {children}
    </TiendaContext.Provider>

  )
}

export default TiendaContext