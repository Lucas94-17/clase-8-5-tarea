import { useEffect , useState } from 'react'; //ESTO FUNCIONA PARA MANEJAR LOS DATOS EN EL COMPONENTE 
import { NavLink , useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';//ACA SE PEGAN LOS LINKS COPIADOS DEL BOOSTRAP PARA REACT
import Button from 'react-bootstrap/Button';
import axios from "axios"


const getCursos = async () => { //ES LO QUE HACE ES TRAER LOS CURSOS
	const resp = await axios(`http://localhost:3005/cursos`)
	const { data } = resp
	// console.log(data)
	return data
}

export const NavBar = () => {
  const [cursos, setCursos] = useState()
    const navigate = useNavigate()
    
    const handleClick = () => {
        localStorage.clear();
        navigate("/login");
    }

    useEffect(() => {//Este useEffect se ejecuta una sola vez porque tiene el array de dependencia vacio
      if (localStorage.getItem("usuario")) {//Esto chequea si existe en el localstorage "usuario"
        getCursos().then(cursos => setCursos(cursos))
      }
    }, [])

    return(
      <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Academy</Navbar.Brand> {/*ACA ESTA EL NAVBAR COPIADO DE REACT*/}
              <Nav className="me-auto">
                <NavLink to="/">Home</NavLink> {/* CAMBIAMOS EL NAV.LINK DE BOOSTRAP POR NAVLINK*/}
                  {!localStorage.getItem("usuario") && (
                  <>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/registro">Register</NavLink>
                  </>
                  )}
                  <NavLink to="/Cursos">Cursos</NavLink>
                  {localStorage.getItem("usuario") && ( 
                    <NavDropdown title="Cursos" id="dropdown"> {/*ACA SE HACE EL SELECT CON BOOSTRAP , Y LAS OPCIONES DEL MISMO SELECT SE HACEN CON LOGICA PARA QUE VARIEN SEGUN EL CURSO DE LA BASE DE DATOS*/}
                      {cursos?.map(curso => (
                        <NavLink key={curso.id} to={`/curso/${curso.id}`}>
                          {curso.title}
                        </NavLink>
                      ))}
                    </NavDropdown>
                  )}
              </Nav>
              {localStorage.getItem("usuario") && (
                <Button onClick={handleClick} variant="dark" >
                    Cerrar Sesion
                </Button>
              )}
              {/*LO QUE HACE ACA ES OCULTAR EL BOTON , POR LA CONDICION DE QUE SI HAY UN USUARIO LOGEADO EN EL LOCALSTORAGE ESTO SE VUELVE FALSO*/}
          </Container>
      </Navbar>
    )
}