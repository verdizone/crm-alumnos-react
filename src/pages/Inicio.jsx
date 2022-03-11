import { useEffect, useState } from 'react'


const Inicio = () => {
  
  const [alumnos, setAlumnos] = useState({})

  useEffect(()=>{
    const consultarAlumnosApi = async ()=>{
      try {
        const url = 'http://localhost:4000/alumnos'
        const resultado = await fetch(url)
        const respuesta = await resultado.json()
        setAlumnos(respuesta);
      } catch (error) {
        console.log(error);
      }
    }
    consultarAlumnosApi()
  },[])
  
  return (
    <>
      <h1 className='text-blue-800 text-4xl font-bold mt-10 px-10'>
        Alumnos
      </h1>
      <p className='mt-10 px-10'>En esta parte se muestran los alumnos almacenados.</p> 

      <table>
        <tr>
          <th>Cabecera</th>
        </tr>
        <tr>
          <td>
            Otro
          </td>
        </tr>
      </table>
     
    </>
  )
}

export default Inicio