import Link from 'next/link'
import LinksNavigate from './LinksNavigate'


const Navigate = () => {
  return (


    <div className=" border-y-0 border-gray-800 border-2 h-screen">

        <div className="flex gap-20 flex-col px-10 mt-40 w-52">
                
          {/* <div className="grid gap-8"> */}

              <LinksNavigate text="Productos" link="/productos-admin"/>


              <LinksNavigate text="Clientes"/>

              <LinksNavigate text="Ventas"/>
              
              <LinksNavigate text="Mi negocio"  link="/mi-negocio"/>

          {/* </div> */}

          <LinksNavigate text="Salir"/>

        </div>

    </div>


  )
}

export default Navigate