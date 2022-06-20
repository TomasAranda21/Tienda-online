import useAdmin from '../../Hooks/useAdmin'
import ButtonsCard from '../Buttons/ButtonsCard'

const CardsProducts = ({setViewModal, setEditProduct}) => {


  const { products } = useAdmin()


  return (

      <>
        {products.length > 0 ? products.map(prod => ( 

          <div key={prod._id} className="flex flex-col gap-3 shadow-2xl p-4 bg-slate-200 rounded-xl w-64">

            <div className=" relative w-40 h-40 overflow-hidden mx-auto rounded-md">
                <img width={160} className="object-cover absolute"
                src={prod.urlImg} alt="" />
            </div>

    
            <div className="my-5 flex justify-between items-center capitalize h-10">
                <p>{prod.name}</p>
                <p>${prod.price}</p>
            </div>


            <div className='grid gap-3'>
              <p className="font-semibold text-sm uppercase">Stock: <span className="font-normal">{prod.stock}</span></p>
              <p  className="font-semibold text-sm uppercase">Categoria: <span className="font-normal">{prod.categories}</span></p>
              <p className="h-20 overflow-y-auto font-semibold text-sm uppercase">Descripción: <span className="font-normal">{prod.description}</span></p>
            </div>

            
            <ButtonsCard text="Editar" click={() => {

              setEditProduct(prod)
              setViewModal(true)
              
            }}/>
    
            <ButtonsCard text="Eliminar" />

          </div>


        )) : null}


{/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque recusandae voluptatibus quod maiores, cumque debitis in ratione ad.</p> */}
      
      </>

  )
}

export default CardsProducts