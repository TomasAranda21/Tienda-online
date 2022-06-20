import React from 'react'
import InputProduct from '../Admin/InputProduct'
import ButtonsForms from '../Buttons/ButtonsForms'
import {Formik} from 'formik'
import { ImCross } from 'react-icons/Im';


const FormCategories = ({addCategories, id, categorias, deleteCategory}) => {

  return (

    <Formik

    initialValues = {{

        categories: ""

    }}
    
    onSubmit={async ({categories}, { resetForm }) => {


      try {

        await addCategories({categories, id})

        resetForm()

      } catch (error) {

        console.log(error)

      }

    }}

    >

      {({handleChange, handleSubmit, values, errors, touched}) => (

        <form action="" className="shadow-2xl p-5 rounded-md" onSubmit={handleSubmit}>

          <div className="mx-auto grid gap-7">
            <h2 className="text-center uppercase font-bold">Categorias para mi tienda</h2>

            <InputProduct
                type="text"
                name="categories"
                value={values.categories}
                onChange={handleChange}
                label="Categorias"

              />

            <div className="flex gap-4 capitalize flex-wrap">

                {categorias?.map(cat => (

                        <div key={cat._id}>
                            {/* Revizar que no esten repetidos ya que react daria error */}
        
                            <p className="font-bold bg-red-300 p-1 px-2 rounded-md flex flex-nowrap items-center gap-2"> {cat.categories} 
                            
                            <span className="cursor-pointer" onClick={() => deleteCategory(id, cat._id)}><ImCross/></span></p> 
                            
                        </div>


                ))}
            </div>
                


            <ButtonsForms text="guardar" />
          </div>

        </form>

      )}


    </Formik>
  )
}

export default FormCategories