import { useState } from 'react';
import { AiOutlineShopping } from 'react-icons/Ai';
import useTienda from '../../Hooks/useTienda';
import ShoppingModal from '../Modal/ShoppingModal';

const NavBar = () => {

    const [shopModal, setShopModal] = useState(false)

    const { localStorageShop, deleteOndeProduct} = useTienda()


  return (


    <>
    <div className="py-5 bg-gray-300 mb-5">
        <header className="container mx-auto ">

            <nav className="flex gap-4 justify-between pt-5 items-center text-neutral-700">
                <div className="flex gap-12 text-sm font-semibold ">
                        <img src="https://technext.github.io/cozastore/images/icons/logo-01.png" alt="" width="150"/>

                    <div className="flex gap-8">
                        <a href="">Inicio</a>
                        <a href="">Tienda</a>
                        <a href="">Nosotros</a>
                        <a href="">Contacto</a>
                    </div>
                </div>

                <div className="text-3xl">

                    <button onClick={() => setShopModal(true)}><AiOutlineShopping/></button>

                    

                </div>
            </nav>




        </header>

    </div>


    {shopModal && <ShoppingModal setShopModal={setShopModal} productsShop={localStorageShop} deleteOndeProduct={deleteOndeProduct}/> }

    

    </>



  )
}

export default NavBar