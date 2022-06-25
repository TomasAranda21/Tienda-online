import React from 'react'

const TableResume = ({products}) => {
  return (

      
      <table className="w-2/3 mt-20 border-2 ">
          <thead className="">

                <tr className="">
                    <th className="">Producto</th>
                    <th className="">Precio</th>
                    <th className=''>Cant</th>
                    <th className="">Subtotal</th>
                </tr>

            </thead>
            
            <tbody className=''>

                {products?.map (prod => (

                    <tr className="border-2 " key={prod._id}>

                        <td className="flex items-center gap-5">
                                <img src={prod.urlImg} alt="" width={80} />
                                <p>{prod.name} </p>
                        </td>

                        <td className="text-center">

                            <p>${prod.price}</p>
                        </td>

                        <td className="text-center">
                            <div className=" justify-center">

                                {/* <p>-</p>
                                <p>{prod.cantidad}</p>
                                <p>+</p> */}
                                <div className="flex mx-auto gap-2 items-center w-32 h-12 rounded-sm overflow-hidden border-2">

                                <button className="w-11 text-xl border-r-2 font-bold" type="button"
                                   
                                    >-</button>

                                    {/* <input type="number" className="w-11 text-center outline-none" ref={refNumber} value={numberProduct} 
                                    onChange={() => setNumberProduct(numberProduct)}/>  */}
                                    <p className="w-11 text-center outline-none">{prod.cantidad}</p>


                                    <button  type="button"
                                    
                                    className=" w-11 text-xl border-l-2 font-bold">+</button>

                                </div>

                            </div>
                            {/* hacer componente de suma de productos */}


                        </td>

                        <td className="text-center">
                            <p>$1500</p>
                        </td>

                    </tr>

                ))}


                
            </tbody>

        </table>


  )
}

export default TableResume