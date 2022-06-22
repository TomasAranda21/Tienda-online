import Head from 'next/head'
import Image from 'next/image'
import Tienda from '../components/A_Tienda/Tienda'
import {AdminProvider} from '../context/AdminProvider'
import { TiendaProvider } from '../context/TiendaProvider'
import TiendaLayout from '../Layout/LayoutPublic/TiendaLayout'

export default function Home() {
  return (

    <AdminProvider>
      <TiendaProvider>


          <TiendaLayout>

              <Tienda/>

          </TiendaLayout>


      </TiendaProvider>


    </AdminProvider>



  )
}
