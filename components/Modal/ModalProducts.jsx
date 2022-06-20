import { Formik } from 'formik'
import React from 'react'
import useAdmin from '../../Hooks/useAdmin'
import FormProducts from '../Admin/FormProducts'

const ModalProducts = ({product, closeModal}) => {

    const { editProduct } = useAdmin()

  return (

    <div className="absolute w-full top-0 pt-5 left-0 backdrop-blur-2xl h-screen backdrop-brightness-50">

        <div className="relative text-center top-14">
        <button onClick={() => closeModal(false)}
        
        className=" text-white text-xl font-bold uppercase bg-orange-400 p-2 px-4 rounded-md">Cerrar</button>

        </div>
        
        <div className="">
            <FormProducts
            name = {product.name}
            price = {product.price}
            stock = {product.stock}
            categories = {product.categories}
            description = {product.description}

            imgProduct = {product.urlImg}
            _id = {product._id}

            closeModal = {closeModal}

            functionProducts = {editProduct}
            
            editing = {true}
            
            />

        </div>
        

    </div>

  )


}

export default ModalProducts