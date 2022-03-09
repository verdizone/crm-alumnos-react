import React from 'react'
import Formulario from '../components/Formulario'

const EditarAlumno = () => {
  return (
    <>
         <h1 className='text-blue-800 text-4xl font-bold mt-10 px-10'>
           Editar Alumno
         </h1>
         <p className='mt-10 px-10'>Editar la información del alumno.</p> 
         <div>
           <Formulario />
         </div>
        </>
  )
}

export default EditarAlumno