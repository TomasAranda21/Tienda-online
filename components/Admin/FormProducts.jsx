import {Formik} from 'formik'
import React, { useEffect } from 'react'
import InputProduct from './InputProduct'
import useAdmin from '../../Hooks/useAdmin'
 
const FormProducts = () => {

  const {users, addProducts} = useAdmin()

  console.log(users)


  return (

    <div className="flex justify-center mt-20">

        <Formik
        initialValues={{
          name: "",
          price: "",
          stock: 0,
          description: "",
        }}


        onSubmit={async ({name, price, stock, description}) => {

          const userId = users.map(user => user.id)
          
          const id = userId.toString()

          const values = {name, price, stock, description, id}


          try {

             await addProducts(values)
            
          } catch (error) {
            console.log(error)
          }

        }}
        >

          {({values, handleSubmit, errors, touched, handleChange }) => (

              <form action="" className="shadow-2xl flex flex-col w-1/3 p-4 gap-5 rounded-md" onSubmit={handleSubmit}>

                  <div className=" relative w-40 h-40 overflow-hidden mx-auto rounded-md shadow-2xl">
                    <img width={160} className="object-cover absolute"
                    src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTIchvcb782DgPvtiZ3b2BffX4PrIdHm7Yxiw-pZoIRupJ9hURO0Qdwk4rIjP2UHj85jWq7lEGdza4_&usqp=CAc" alt="" />
                  </div>


                  <div className="flex flex-col gap-2 w-1/2 mx-auto">
                      <InputProduct
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        label="Nombre"

                      />
                      <InputProduct
                        type="number"
                        name="price"
                        value={values.price}
                        onChange={handleChange}
                        label="Precio"
                      />

                      <InputProduct
                        type="number"
                        name="stock"
                        value={values.stock}
                        onChange={handleChange}
                        label="stock"
                      />

                    </div>

                    <div className="grid gap-1 w-1/2 mx-auto">
                      <label htmlFor="description">Descripcion</label>
                      <textarea name="description" id="description" cols="" rows="4" 
                      value={values.description}
                      onChange={handleChange}
                      className="p-1 px-3 rounded-md bg-slate-100"></textarea>
                    </div>


                    <button type="submit" className="w-1/2 mx-auto bg-blue-500 rounded-md text-gray-200 p-3 font-semibold">Guardar</button>
              
              </form>

          )}

        </Formik>

    </div>


  )
}

export default FormProducts