
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

        <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
        />

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