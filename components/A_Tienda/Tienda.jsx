import React, { useEffect, useState } from 'react'
import useAdmin from '../../Hooks/useAdmin'
import CardProductsTienda from '../CardProducts/CardProductsTienda'
import ModalCardsProducts from '../Modal/ModalCardsProducts'

const Tienda = () => {

    const { products } = useAdmin()

    const [viewModal, setViewModal] = useState(false)

    const [productModal, setProductModal] = useState({})


    if(!Object.keys(products).length > 0){

        

        return 'Cargando'
    
    }



  return (


    <>
    <div className=" h-screen">
        <div className="container mx-auto  ">

            <div className="flex gap-3">

                {products?.map(prod => (
            
                    <div key={prod._id}>

                        <CardProductsTienda product = {prod} modal={setViewModal} productModal = {setProductModal}/>
            
                    </div>
            
            
                ))}

            </div>

        </div>
        
        {viewModal && <ModalCardsProducts product = {productModal} modal={setViewModal}/>}

    </div>
    
    
    </>




  )

}

export default Tienda