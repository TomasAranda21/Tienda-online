import React, { useEffect } from 'react'
import { useState } from 'react'
import useAdmin from '../../Hooks/useAdmin'
import FormCategories from '../Forms/FormCategories'
import FormMybusiness from '../Forms/FormMybusiness'

const MyBusiness = () => {

  const {users, addCategories, categorias, deleteCategory, dataBus, addDataTienda, editDataBus, editData} = useAdmin()

    
    const userId = users?.map(user => user.id)
            
    const id = userId?.toString()

  

  return (


    <div className="grid grid-cols-2 p-5 mt-20 justify-items-center">

          <div className="w-2/3 grid gap-8">

              <div className="grid gap-4 shadow-2xl bg-slate-300 p-6">
                <h2 className="text-xl text-center underline">Mis datos</h2>

                    <div key={dataBus?.tel}>
                        <p>Nombre de mi negocio: <span>{dataBus?.name}</span></p>
                        <p>Teléfono: <span>{dataBus?.tel}</span></p>
                        <p>Email: <span>{dataBus?.email}</span></p>
                        <p>Ubicación: <span>{dataBus?.location}</span></p>
                        
                        
                        <button onClick={() => editDataBus(dataBus)}
                        className="border-blue-500 border-2 p-2 w-1/2 mx-auto mt-3 font-semibold bg-blue-200 rounded-sm">Editar</button>
                            
                    </div>

              </div>

              <FormCategories addCategories={addCategories} id={id} categorias={categorias} deleteCategory={deleteCategory}/>

          </div>


          <FormMybusiness addDataTienda={addDataTienda} id={id} editData={editData}/>


        </div>



  )
}

export default MyBusiness