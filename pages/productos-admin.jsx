import ButtonsCard from '../components/Buttons/ButtonsCard'
import CardsProducts from '../components/CardProducts/CardsProducts'
import Pagination from '../components/Pagination/Pagination'
import Admin from './admin'
import { useRouter } from 'next/router';
import { useState } from 'react';
import FormProducts from '../components/Admin/FormProducts';

const productos = () => {

    const [isAdd, setIsAdd] = useState(false)
  

  return (

    <Admin>

            <div className="flex justify-center gap-5">

                <div className="flex gap-5 justify-center p-5 font-medium">
                    <button onClick={() => setIsAdd(false)} className="rounded-md bg-indigo-500 p-2 px-3 text-gray-200">Mis productos</button>
                    <button onClick={() => setIsAdd(true)} className="rounded-md bg-green-600 p-2 px-3 text-gray-200">Agregar Producto</button>
                </div>


                <div className="flex gap-3 items-center ">
                    <input type="text" className="w-52 mx-auto bg-slate-50 px-2 p-1" />

                </div>

            </div>

            {!isAdd ? 
            <>
            

                <div className="flex justify-center my-5">

                    <Pagination/>

                </div>


                <div className="flex justify-center gap-4 flex-wrap p-5">

                
                    <CardsProducts/>
                    {/* <CardsProducts/>
                    <CardsProducts/>
                    <CardsProducts/>
                    <CardsProducts/>
                    <CardsProducts/>
                    <CardsProducts/>
                    <CardsProducts/>
                    <CardsProducts/>
                    <CardsProducts/>
                    <CardsProducts/>
                    <CardsProducts/>
                    <CardsProducts/>
                    <CardsProducts/>
                    <CardsProducts/>
                    <CardsProducts/> */}

                </div>
            </>
        
            : 
                
                <FormProducts />
                    
            }
            


    </Admin>


  )
}

export default productos