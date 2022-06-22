
import Head from 'next/head'
import Navigate from '../../components/Admin/Navigate'

const TiendaLayout = ({children}) => {


  return (

    <>
    <Head>

        <title>
            Admin-Tienda
        </title>

        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet"/>

    </Head>

    <div className="">

       {children}

    </div>

</>



  )
}

export default TiendaLayout