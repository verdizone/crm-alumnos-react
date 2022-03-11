import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='md:flex'>
      <div className='md:w-2/6 md:h-screen bg-blue-800'>
        <h1 className='text-white text-4xl font-bold text-center pt-10'>CRM - Alumnos</h1>
        <nav>
            <Link
                className='text-white block w-full text-2xl px-3 hover:text-blue-300 mt-10' 
                to="/alumnos">Alumnos
            </Link>
            <Link 
                className='text-white block w-full text-2xl p-3 hover:text-blue-300' 
                to="/alumnos/agregar">Ingresar Alumno
            </Link>
            <Link 
                className='text-white block w-full text-2xl p-3 hover:text-blue-300' 
                to="/alumnos/editar/7">Editar Alumno
            </Link>
        </nav>
      </div>
      <div className='md:w-4/6 md:h-screen overflow-scroll'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout