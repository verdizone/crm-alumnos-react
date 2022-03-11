import React from 'react'

const Alerta = ({children}) => {
  return (
    <div 
        className='bg-red-800 text-white rounded-sm p-3 mt-5 
        text-center uppercase text-sm font-bold shadow-sm'>
        {children}
        
    </div>
  )
}

export default Alerta