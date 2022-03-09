import React from 'react'
import Formulario from '../components/Formulario'

const IngresarAlumno = () => {
  return (
        <>
         <h1 className='text-blue-800 text-4xl font-bold mt-10 px-10'>
           Ingresar Alumno
         </h1>
         <p className='mt-10 px-10'>Ingresa la información del alumno.</p> 
         <div>
           <Formulario />
         </div>
        </>
  )
}

export default IngresarAlumno