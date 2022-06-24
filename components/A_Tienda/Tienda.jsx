import React, { useEffect, useState } from 'react'
import useAdmin from '../../Hooks/useAdmin'
import useTienda from '../../Hooks/useTienda'
import CardProductsTienda from '../CardProducts/CardProductsTienda'
import ModalCardsProducts from '../Modal/ModalCardsProducts'
import NavBar from './NavBar'

const Tienda = () => {

    const { products } = useAdmin()


    const { addToCard, localStorageShop, deleteOndeProduct } = useTienda()

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
        
        {viewModal && <ModalCardsProducts product = {productModal} modal={setViewModal} addToCard = {addToCard}/>}

    </div>
    
    
    </>




  )

}

export default Tienda