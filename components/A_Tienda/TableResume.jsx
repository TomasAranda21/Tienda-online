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

                    <tr className="border-2" key={prod._id}>

                        <td className="flex items-center gap-5">
                            <img src={prod.urlImg} alt="" width={80} />
                            <p>{prod.name} </p>
                        </td>

                        <td className="">

                            <p>${prod.price}</p>
                        </td>

                        <td>
                            <p>{prod.cantidad}</p>
                            {/* hacer componente de suma de productos */}
                        </td>

                        <td>
                            <p>$1500</p>
                        </td>

                    </tr>

                ))}


                
            </tbody>

        </table>


  )
}

export default TableResume