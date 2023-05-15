
//INSTALAMOS REACT-ROUTER-DOM E IMPORTAMOS LO SIGUIENTE
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "./App.css"


import { Login } from '../src/views/Login/Login' //IMPORTAMOS EL LOGIN
import { Home } from '../src/views/Home/Home' //ACA IMPORTAMOS HOME
import {Registro} from '../src/views/Register/Registro'
import { IsLogged } from './components/IsLogged'; // ISLOGED SIRVE PARA TENER UN CONTROL DEL LOGIN , O SEA SI UN USUARIO INGRESA Y SE LOGEA
import { NavBar } from './components/NavBar'
import {Cursos} from './views/Cursos'


function App() {

  return (
    <>
      <BrowserRouter>{/*DENTRO DEL BROWSERROUTER(ES EL RUTEO DE LA APP) ESTARAN LAS RUTAS*/}
        <NavBar />
        <Routes>{/* Esto es como un switch y controla si lo que esta en el path corresponde con lo que esta en el url del navegador o no*/}
          <Route path='/' element={<Home />} /> {/*ACA PONGO LA RUTA DE HOME , ARRIBA LO IMPORTO*/}
          <Route path='/login' element={<IsLogged><Login /></IsLogged>} /> {/* Route tiene 2 elementos path es la ruta  , y element que es la pagina que quiero crear*/}

          <Route path='/login' element={<Cursos />} /> 
          <Route path='/Registro' element={<Registro />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
