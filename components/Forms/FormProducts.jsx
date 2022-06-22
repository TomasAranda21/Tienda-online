import {Formik} from 'formik'
import React, { useEffect, useState, useRef } from 'react'
import InputProduct from '../Admin/InputProduct'
import useAdmin from '../../Hooks/useAdmin'
import ButtonsForms from '../Buttons/ButtonsForms'
import { BsPlusSquare } from 'react-icons/Bs';

import uploadImages from '../../helpers/uploadImages'

import { ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import idRandom from '../../helpers/idUnique';
import { storage } from '../../config/firebase' 
 
const FormProducts =  ( {name, price, stock, categories, description, talle,color, functionProducts, editing, imgProduct, _id, closeModal } ) => {

  
  const {users, categorias, deleteImg} = useAdmin()
  
  const [img, setImage] = useState()
  
  


  const [urlImg, setUrlImg] = useState({})

  const [imgLoading, setImageLoading] = useState()

  const [nameImg, setNameImg] = useState('')


  const [preview, setPreview] = useState('')

  // const [color, setColor] = useState({})

  // const [talle, setTalle] = useState([])




  const fileRef = useRef();




  useEffect(() => {

    if(img){
      const render = new FileReader();

      render.onloadend = () => {
          setPreview(render.result)
      };

      render.readAsDataURL(img)

      }else{
        setPreview(null)
      }

      

      const fileUploaded = () => {
  
        const file = img
  
        const id = idRandom()

        
        const name = id + '.' + file?.name 


        // Eliminamos el espacio y concatemos los arrays
        const nameSpace = name.split(' ')

        const nameCheck = nameSpace[0].concat(nameSpace[1])
        
        const metadata = {
          contentType: 'image/jpeg'
          
        };

        const nameArray = nameCheck.split('.')



        if(!nameArray[1].startsWith('undefined')){
          
          setNameImg(nameCheck)
  
    
          // Upload file and metadata to the object 'images/mountains.jpg'
          const storageRef = ref(storage, 'images/' + nameCheck);
          const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    
          // Listen for state changes, errors, and completion of the upload.
          uploadTask.on('state_changed',
            (snapshot) => {
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  
              switch (snapshot.state) {
                case 'paused':
  
                  break;
  
                case 'running':
  
                  setImageLoading(true)
  
                  break;
              }
            },
            (error) => {
    
              switch (error.code) {
                case 'storage/unauthorized':
    
                  break;
                case 'storage/canceled':
    
                  break;
    
                case 'storage/unknown':
                  
                  break;
                  
                    default:
                  break;
              }
            },
    
            () => {
              // Upload completed successfully, now we can get the download URL
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                
                setUrlImg(downloadURL);
  
                setImageLoading(false)
  
    
              });
            }
          );
          
        }

      }

      fileUploaded()

    }, [img])
    


  return (

    <div className="flex justify-center mt-20">

        <Formik
        initialValues={{
          name,
          price,
          stock,
          categories,
          description,
          talle,
          color
        }}


        onSubmit={async ({name, price, stock, description, categories, talle, color}, {resetForm}) => {

            const userId = users.map(user => user.id)
            
            const id = userId.toString()
          // Esto lo hago para poder editar el producto sin que este se sobrescriba o que no de duplique
            
            if(editing) {

                if(img === undefined){

                  const urlImg = imgProduct

                  const values = {name, price, stock,categories,color, talle, description, id, urlImg, _id}
  
                  try {
                  
        
                    await functionProducts(values)
      
                    resetForm()
    
                    closeModal(false)
        
                    
                  } catch (error) {
                    
                    console.log(error)
        
                  }
                  
                  return
                }

                // Si imgProduct no tiene nada quiere decir que no tenia imagen, y en el caso que si tenga entonces no editamos la foto

                const values = {name, price, stock,categories, color, talle,  description, id, urlImg, _id}

                try {
                  
                  await functionProducts(values)
    
                  resetForm()
  
                  closeModal(false)
      
                  
                } catch (error) {
                  
                  console.log(error)
      
                }

   
            }else{

              const values = {name, price, stock,categories, color, talle, description, id, urlImg}

              try {
    
                await functionProducts(values)
  
                resetForm()
    
                
              } catch (error) {
                
                console.log(error)
    
              }

            }
  

        }
      
      }
        >

          {({values, handleSubmit, errors, touched, handleChange, setFieldValue }) => (

            <form action="" className={ !editing ? `shadow-2xl p-4 gap-5 rounded-md` : `shadow-2xl flex flex-col w-1/3 p-4 gap-5 rounded-md bg-gray-400`} onSubmit={handleSubmit}>
                  
                   <div className=" relative w-40 h-40 overflow-hidden mx-auto rounded-md shadow-2xl ">
                  
                    <input 
                    type="file" 
                    onChange={e => setFieldValue('img', setImage(e.target.files[0]))}
                    className="hidden" 
                    ref={fileRef} 
                    id='file' 
                    name="img" />

                  {!imgLoading ? 

                  <>
                  
                    <div onClick={(e) => { 
                      
                      e.preventDefault


                      fileRef.current.click()
                    }}

                      className="text-5xl absolute top-1/3 left-1/3 cursor-pointer">
                      <BsPlusSquare/>
                    </div>

                    {preview ? <img src={preview} alt="" className="object-cover absolute cursor-pointer" width={160}  onClick={(e) => { 
                      e.preventDefault

                      deleteImg(nameImg)

                      fileRef.current.click()

                    }}/> : (

                      !editing ? null :

                      <img src={imgProduct} alt="" className="object-cover absolute cursor-pointer" width={160}  onClick={(e) => { 
                        e.preventDefault
                        
                        const imgSplit = imgProduct.split('%2F')[1].split('?alt')[0]

                        deleteImg(nameImg ? nameImg : imgSplit)
  
                        fileRef.current.click()
  
                      }}/>

                    )

                    } 
                  
                  </>
                
                  : <p>Cargando</p>} 

                  </div> 



                  <div className="flex gap-10 mx-auto p-5">
                    <div className="flex flex-col gap-5">

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

                        <div className="flex flex-col gap-1">
                          <label htmlFor="description">Descripcion</label>
                          <textarea name="description" id="description" cols="" rows="4" 
                          value={values.description}
                          onChange={handleChange}
                          className="p-1 px-3 rounded-md bg-slate-100"></textarea>
                        </div>

                    </div>
                    
                    <div className="flex flex-col gap-5">

                      <div className="flex flex-col gap-1">
                        <label htmlFor="categories">Categoria</label>
                        <select name="categories" id="categories" className="capitalize p-1.5 bg-gray-100 rounded-md"
                        onChange={handleChange} value={values.categories}>
                          <option value="">Selecciona una categoria</option>
                          {categorias?.map(cat => (

                              <option value={cat.categories} key={cat._id} >{cat.categories}</option>

                          ))}

                        </select>
                      </div>

                        {/* <FormTalle setTalle={setTalle}/> */}



                        <InputProduct
                          type="text"
                          name="talle"
                          value={values.talle}
                          onChange={handleChange}
                          label="Talle"

                        />
                        <p className="text-sm">Escribir los talles separado por comas ej: s, m, l</p>


                        <InputProduct
                          type="text"
                          name="color"
                          value={values.color}
                          onChange={handleChange}
                          label="color"

                        />
                        <p className="text-sm">Escribir los colores separado por comas ej: Rojo, Blanco, Negro</p>

                       

                      </div>
                    </div>


                    <ButtonsForms text="guardar" />
              </form>

          )}

        </Formik>

    </div>


  )
}

export default FormProducts