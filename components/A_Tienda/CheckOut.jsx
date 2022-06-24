import React from 'react'
import Link from 'next/link'

import useTienda from '../../Hooks/useTienda'
import DescriptionShopping from './DescriptionShopping'
import TableResume from './TableResume'

const CheckOut = () => {

    const { localStorageShop } = useTienda()


  return (
    
    <div className="flex flex-col w-2/3 mx-auto">

        <div className="flex items-center gap-2 text-sm">

            <Link href='/'>
                <p>Home</p>
            </Link>

            <p className="text-gray-500"> {'>'} </p>

            <p className="text-gray-400">Shoping Cart</p>

        </div>



        <div className="flex items-center justify-around">

            <TableResume products={localStorageShop}/>


            <DescriptionShopping/>


        </div>




    </div>

  )


}

export default CheckOut