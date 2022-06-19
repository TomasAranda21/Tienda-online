import Navigate from '../components/Admin/Navigate'
import Head from 'next/head'
import Navbar from '../components/Admin/Navbar'
import { AdminProvider } from '../context/AdminProvider'

const Admin = ({children}) => {

  return (
    <>
        <AdminProvider>
            
            <Head>

                <title>
                    Admin-Tienda
                </title>

            </Head>

            <Navbar/>

            <div className="">

                <div className="bg-slate-300 h-screen">

                    <div className="flex">


                        <Navigate/>



                        <div className="w-full mx-auto">

                            {children}

                        </div>

                    </div>

                </div>

            </div>

        </AdminProvider>

    </>

  )

}

export default Admin