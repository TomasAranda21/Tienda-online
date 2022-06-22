import { AiOutlineShopping } from 'react-icons/Ai';

const NavBar = () => {



    
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

                    <button><AiOutlineShopping/></button>

                    

                </div>
            </nav>




        </header>

    </div>

    </>



  )
}

export default NavBar