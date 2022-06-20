import ButtonsCard from '../Buttons/ButtonsCard'
import CardsProducts from '../CardProducts/CardsProducts'
import Pagination from '../Pagination/Pagination'
import { useRouter } from 'next/router';
import { useState } from 'react';
import FormProducts from '../Admin/FormProducts';
import { BiSearchAlt } from 'react-icons/Bi';
import ModalProducts from '../Modal/ModalProducts';
import useAdmin from '../../Hooks/useAdmin';

const AllProducts = () => {

    const [isAdd, setIsAdd] = useState(false)

    const [viewModal,  setViewModal] = useState(false)

    const [editProduct, setEditProduct] = useState({})

    const {addProducts} = useAdmin()



  return (
   <>
   
    <div className="flex justify-center gap-5 items-center relative">

        <div className="flex gap-5 justify-center p-5 font-medium">
            <button onClick={() => setIsAdd(false)} className="rounded-md bg-indigo-500 p-2 px-3 text-gray-200">Mis productos</button>
            <button onClick={() => setIsAdd(true)} className="rounded-md bg-green-600 p-2 px-3 text-gray-200">Agregar Producto</button>
        </div>


        <div className=" flex gap-2 bg-slate-50 items-center px-1 text-xl border border-slate-400 rounded-md">
            <BiSearchAlt/> <input type="text" className="bg-slate-50 p-1 text-md outline-0 " /> 

        </div>

    </div>

        {!isAdd ? 
        <>
        <div className="flex justify-center my-5">

            <Pagination/>

        </div>


        <div className="flex justify-center gap-4 flex-wrap p-5">

            <CardsProducts setViewModal={setViewModal} setEditProduct={setEditProduct}/>

        </div>
        </>

        : 

        <FormProducts name={""} price={""} stock={""} categories={""} description={""} functionProducts={addProducts} editing={false}/>
            
        }

        {viewModal ? <ModalProducts closeModal={ setViewModal } product={editProduct}/> : null}
   
   
   
   </>
  )
}

export default AllProducts