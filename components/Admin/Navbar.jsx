import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (

    <header className="bg-slate-700">

        <nav className="container mx-auto flex text-gray-200 justify-between p-4 text-2xl font-bold uppercase items-center">
            <Link href="/admin">

                <a>Admin</a>            

            </Link>

            <Link href="/">

                <a className="border-full border-2 text-xl rounded-full p-3">Ien</a>            

            </Link>

        </nav>

    </header>

  )
}

export default Navbar