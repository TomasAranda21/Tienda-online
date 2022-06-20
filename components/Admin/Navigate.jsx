import Link from 'next/link'
import LinksNavigate from './LinksNavigate'


const Navigate = () => {
  return (


    <div className=" border-y-0 border-gray-800 border-2 text-gray-200 h-screen bg-slate-700">

      <div className="flex flex-col items-center my-10 gap-2 text-2xl font-bold">
        <div className="h-20 overflow-hidden w-20 rounded-full mx-auto" >

          <img className=" object-cover"
          src="https://us.123rf.com/450wm/martialred/martialred1608/martialred160800018/61263271-cuenta-de-usuario-perfil-del-icono-del-c%C3%ADrculo-plana-para-aplicaciones-y-sitios-web.jpg?ver=6" alt="" />           

        </div>
        <p>Tomas</p>
      </div>

        <div className="flex gap-20 flex-col px-10 w-52 mt-20 text-center">
          
                
              <LinksNavigate text="Mi negocio"  link="/mi-negocio"/>


              <LinksNavigate text="Productos" link="/productos-admin"/>


              <LinksNavigate text="Clientes"/>

              <LinksNavigate text="Ventas"/>
              


              <LinksNavigate text="Salir"/>

        </div>

    </div>


  )
}

export default Navigate