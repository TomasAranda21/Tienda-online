import React from 'react'
import InputProduct from '../Admin/InputProduct'
import ButtonsForms from '../Buttons/ButtonsForms'
import {Formik} from 'formik'
import { useEffect } from 'react'
import { useState } from 'react'



const FormMybusiness = ({addDataTienda, id, editData}) => {
    
    const [name, setNames] = useState('')
    const [tel, setTel] = useState('')
    const [location, setLocation] = useState('')
    const [email, setEmail] = useState('')


    useEffect(() => {

        if(editData?.name){
            

            setNames(editData?.name)
            setTel(editData?.tel)
            setLocation(editData?.location)
            setEmail(editData?.email)
    
        }
 
    }, [editData])


    
  return (

    <Formik

        initialValues = {{
        
        name,
          logo: "",
          tel: "",
          location: "",
          email: "",

        }}
        
        onSubmit={async (values, {resetForm}) => {


            try {

                await addDataTienda({name, tel, location, email, id})

                setNames('')
                setTel('')
                setLocation('')
                setEmail('')
                
            } catch (error) {
                
                console.log(error)
            }

        }}

        >

          {({handleChange, handleSubmit, values, errors, touched}) => (

            <form action="" className="shadow-2xl p-5 w-2/3 rounded-md" onSubmit={handleSubmit}>

              <div className="mx-auto grid gap-20">
                <h2 className="text-center uppercase font-bold">Datos de mi negocio</h2>

                <div  className="grid gap-5">

                    <InputProduct
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setNames(e.target.value)}
                        label="Nombre de mi negocio"

                    />
                    <InputProduct
                        type="tel"
                        name="tel"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}

                        label="teléfono"

                    />

                    <InputProduct
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                        label="email"

                    />

                    <InputProduct
                        type="text"
                        name="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}

                        label="Ubicación"

                    />
                </div>


                <ButtonsForms text="guardar" />

              </div>

            </form>

          )}


        </Formik>
  )
}

export default FormMybusiness