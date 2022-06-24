
import Head from 'next/head'
import Navigate from '../../components/Admin/Navigate'
import NavBar from '../../components/A_Tienda/NavBar'
import { AdminProvider } from '../../context/AdminProvider'
import { TiendaProvider } from '../../context/TiendaProvider'

const TiendaLayout = ({children}) => {


  return (

    <>
    <Head>

        <title>
            Admin-Tienda
        </title>

        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet"/>

    </Head>

    <AdminProvider>
      <TiendaProvider>

          <NavBar/>

          <div className="">

            {children}

          </div>

      </TiendaProvider>
    </AdminProvider>


</>



  )
}

export default TiendaLayout