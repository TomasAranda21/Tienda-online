
import Head from 'next/head'
import Navbar from '../../components/Admin/Navbar'
import Navigate from '../../components/Admin/Navigate'


const AdminLayout = ( {children} ) => {
  return (

<>
    <Head>

        <title>
            Admin-Tienda
        </title>

    </Head>

    <Navbar/>

    <div className="">

        <div className="bg-slate-300">

        <div className="flex">

            <div className="">

                <Navigate/>

            </div>


            <div className="">

                {children}

            </div>

            </div>


        </div>

    </div>

</>



  )
}

export default AdminLayout