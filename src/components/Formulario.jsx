import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Alerta from './Alerta'


    const Formulario = () => {

        const navigate = useNavigate();

        const nuevoAlumnoSchema = Yup.object().shape({
            nombre: Yup.string()
                       .required('El nombre del alumno es obligatorio.'),
            matricula: Yup.string()
                          .required('La matrícula es obligatoria.'),
            graGru: Yup.string()
                       .required('Grado y grupo son obligatorios.'),
            colegio: Yup.string()
                       .required('El nombre del colegio es obligatorio.'),
            fechaNac: Yup.string()
                       .required('Fecha de nacimiento obligatoria.'),
            imgAlu: Yup.string()
                       .required('La fotografía es obligatoria.'),


        })
        const handleSubmit = async (valores)=>{
            const url = 'http://localhost:4000/alumnos'
            const respuesta = await fetch(url, {
                method: 'POST', 
                body: JSON.stringify(valores),  
                headers: {
                    'Content-Type':'application/json'
                }
            })
            // console.log(respuesta)
            await respuesta.json();
            // console.log(resultado)
        }
        return (
    <div className=' mt-5 px-10 md:w-2/3 block mx-auto bg-white py-5 mb-20'>
        <h1 className='text-gray-800 text-2xl text-center'>Ingresar Alumno</h1>
        <Formik
            initialValues={{
                nombre: '',
                matricula: '',
                graGru: '',
                colegio: '',
                fechaNac: '',
                imgAlu: '',


            }}
            onSubmit={ async (values, {resetForm})=>{
                await handleSubmit(values)
                resetForm()
                navigate('/alumnos')
            }}
            validationSchema={nuevoAlumnoSchema}
        >
            {({ errors, touched })=>{
                // console.log(touched)
                return(
            <Form 
                
                 
            >

                {/* Nombre */}
                <div className='mt-5'>
                    <label 
                        className='text-gray-800 text-xl block w-full'
                        htmlFor="nombre">Nombre</label>
                    <Field 
                        className=' bg-gray-100 block w-full mt-3 p-3'
                        type="text" 
                        name="nombre" 
                        id="nombre"
                        placeholder='Ejemplo: Juan Pérez Ávila'
                        
                    />
                    {   
                        errors.nombre && touched.nombre ? (
                            <Alerta>
                                {errors.nombre}
                            </Alerta>
                        ):null
                    }
              
                </div>
                

                {/* Matrícula */}            
                <div className='mt-5'>
                    <label 
                        className='text-gray-800 text-xl block w-full'
                        htmlFor="matricula">Matrícula</label>
                    <Field 
                        className=' bg-gray-100 block w-full mt-3 p-3'
                        type="text" 
                        name="matricula" 
                        id="matricula"
                        placeholder='Ejemplo: 1643'
                        
                    />
                    {   
                        errors.matricula && touched.matricula ? (
                            <Alerta>
                                {errors.matricula}
                            </Alerta>
                        ):null
                    }
              
                </div>


                {/* Grado y Grupo */}
                <div className='mt-5'>
                    <label 
                        className='text-gray-800 text-xl block w-full'
                        htmlFor="graGru">Grado y grupo</label>
                    <Field
                        as="select"
                        className=' bg-gray-100 block w-full mt-3 p-4 mb-5'
                        name="graGru" id="graGru">
                        <option value="">---</option>
                        <option value="">---Preescolar---</option>
                        <option value="K1A">K1A</option>
                        <option value="K1B">K1B</option>
                        <option value="K1C">K1C</option>
                        <option value="K2A">K2A</option>
                        <option value="K2B">K2B</option>
                        <option value="K2C">K2C</option>
                        <option value="K3A">K3A</option>
                        <option value="K3B">K3B</option>
                        <option value="K3C">K3C</option>
                        
                        <option value="">---Primaria Baja---</option>
                        <option value="P1A">P1A</option>
                        <option value="P1B">P1B</option>
                        <option value="P1C">P1C</option>
                        <option value="P2A">P2A</option>
                        <option value="P2B">P2B</option>
                        <option value="P2C">P2C</option>
                        <option value="P3A">P3A</option>
                        <option value="P3B">P3B</option>
                        <option value="P3C">P3C</option>

                        <option value="">---Primaria Alta---</option>
                        <option value="P4A">P4A</option>
                        <option value="P4B">P4B</option>
                        <option value="P4C">P4C</option>
                        <option value="P5A">P5A</option>
                        <option value="P5B">P5B</option>
                        <option value="P5C">P5C</option>
                        <option value="P6A">P6A</option>
                        <option value="P6B">P6B</option>
                        <option value="P6C">P6C</option>

                        <option value="">---Secundaria---</option>
                        <option value="S1A">S1A</option>
                        <option value="S1B">S1B</option>
                        <option value="S1C">S1C</option>
                        <option value="S2A">S2A</option>
                        <option value="S2B">S2B</option>
                        <option value="S2C">S2C</option>
                        <option value="S3A">S3A</option>
                        <option value="S3B">S3B</option>
                        <option value="S3C">S3C</option>
                        
                    </Field>
                    {   
                        errors.graGru && touched.graGru ? (
                            <Alerta>
                                {errors.graGru}
                            </Alerta>
                        ):null
                    }

                </div>
        
                {/* Colegio */}            
                <div className='mt-5'>
                    <label 
                        className='text-gray-800 text-xl block w-full'
                        htmlFor="colegio">Colegio</label>
                    <Field
                        as="select"
                        className=' bg-gray-100 block w-full mt-3 p-4 mb-5'
                        name="colegio" id="colegio">
                        <option value="">---</option>
                        <option value="Albatros">Albatros</option>
                        <option value="Tecnoalbatros">Tecnoalbatros</option>
                    
                    </Field>
                    {   
                        errors.colegio && touched.colegio ? (
                            <Alerta>
                                {errors.colegio}
                            </Alerta>
                        ):null
                    }

                </div>

                {/* Fecha de nacimiento */}
                <div className='mt-5'>
                    <label 
                        className='text-gray-800 text-xl block w-full'
                        htmlFor="fechaNac">Fecha de Nacimiento</label>
                    <Field 
                        className=' bg-gray-100 block w-full mt-3 p-3'
                        type="date" 
                        name="fechaNac" 
                        id="fechaNac"
                        
                    />
                    {   
                        errors.fechaNac && touched.fechaNac ? (
                            <Alerta>
                                {errors.fechaNac}
                            </Alerta>
                        ):null
                    }
                </div>



                {/* Fotografía */}
                <div className='mt-5'>
                    <label 
                        className='text-gray-800 text-xl block w-full'
                        htmlFor="imgAlu">Fotografía</label>
                    <Field 
                        className=' bg-gray-100 block w-full mt-3 p-3'
                        type="file" 
                        name="imgAlu" 
                        id="imgAlu"
                        
                    />
                    {   
                        errors.imgAlu && touched.imgAlu ? (
                            <Alerta>
                                {errors.imgAlu}
                            </Alerta>
                        ):null
                    }
                </div>

                {/* Botón */}
                <div>
                    <button 
                        type='submit'
                        className='bg-blue-800 p-3 text-white block w-full 
                        rounded-sm mt-10 mb-10 font-bold uppercase text-lg 
                        hover:bg-blue-700 transition-colors'>
                        Ingresar Alumno
                    </button>
                </div>
            </Form>
            )}}
        </Formik>
    </div>
  )
}

export default Formulario