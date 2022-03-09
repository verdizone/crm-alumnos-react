import React from 'react'

const Formulario = () => {
  return (
    <div className=' mt-5 px-10 md:w-2/3 block mx-auto bg-white py-5 mb-20'>
        <h1 className='text-gray-800 text-2xl text-center'>Ingresar Alumno</h1>
        <form action="">
            <div className='mt-5'>
                <label 
                    className='text-gray-800 text-xl block w-full'
                    htmlFor="nombre">Nombre</label>
                <input 
                    className=' bg-gray-100 block w-full mt-3 p-3'
                    type="text" 
                    name="nombre" 
                    id="nombre"
                    placeholder='Ejemplo: Juan Pérez Ávila'
                     
                />
            </div>
            <div className='mt-5'>
                <label 
                    className='text-gray-800 text-xl block w-full'
                    htmlFor="nombre">Fecha de Nacimiento</label>
                <input 
                    className=' bg-gray-100 block w-full mt-3 p-3'
                    type="date" 
                    name="nombre" 
                    id="nombre"
                     
                />
            </div>
            <div className='mt-5'>
                <label 
                    className='text-gray-800 text-xl block w-full'
                    htmlFor="nombre">Fecha de Nacimiento</label>
                <input 
                    className=' bg-gray-100 block w-full mt-3 p-3'
                    type="date" 
                    name="nombre" 
                    id="nombre"
                     
                />
            </div>
            <div className='mt-5'>
                <label 
                    className='text-gray-800 text-xl block w-full'
                    htmlFor="nombre">Fecha de Nacimiento</label>
                <input 
                    className=' bg-gray-100 block w-full mt-3 p-3'
                    type="date" 
                    name="nombre" 
                    id="nombre"
                     
                />
            </div>
            <div>
                <button 
                    className='bg-blue-800 p-3 text-white block w-full 
                    rounded-sm mt-10 mb-10 font-bold uppercase text-lg 
                    hover:bg-blue-700 transition-colors'>
                    Ingresar Alumno
                </button>
            </div>
        </form>
    </div>
  )
}

export default Formulario