import ButtonsCard from '../Buttons/ButtonsCard'

const CardsProducts = () => {
  return (

    <div className="flex flex-col gap-3 shadow-2xl p-4 bg-slate-200 rounded-xl">

        <div className=" relative w-40 h-40 overflow-hidden mx-auto rounded-md">
            <img width={160} className="object-cover absolute"
            src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTIchvcb782DgPvtiZ3b2BffX4PrIdHm7Yxiw-pZoIRupJ9hURO0Qdwk4rIjP2UHj85jWq7lEGdza4_&usqp=CAc" alt="" />
        </div>

        <div className="my-5 flex justify-between items-center">
            <p>Remera</p>
            <p>$2300</p>
        </div>
        
        <ButtonsCard text="Editar" edit={true}/>

        <ButtonsCard text="Eliminar" edit={false}/>

    </div>
  )
}

export default CardsProducts