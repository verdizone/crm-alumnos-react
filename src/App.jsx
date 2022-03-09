
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Inicio from './pages/Inicio'
import EditarAlumno from './pages/EditarAlumno'
import IngresarAlumno from './pages/IngresarAlumno'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='alumnos' element={<Layout />}>
          <Route index element={<Inicio />}/>
          <Route path='agregar' element={<IngresarAlumno />}/>
          <Route path='editar/:id' element={<EditarAlumno />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App