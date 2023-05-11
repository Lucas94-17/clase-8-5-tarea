//ACA IMPORTO BOOSTRAP NUEVAMENTE (LOS ESTILOS)

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState , useEffect } from 'react';//IMPORTO USESTATE de REACT
import axios from "axios" //import AXIOS
import { useNavigate } from "react-router-dom"; //importamos useNavigate

//ACA ARMO GETUSUARIO QUE SIRVE PARA MANDAR UN AXIOS , SE FIJA SI EL PASSWORD ESTA BIEN , SI ESTA BIEN LE PASA EL VALOR 
export const getUsuario = async (mail, password) => {
	// console.log(mail)
	const resp = await axios(`http://localhost:3005/usuarios?usuario=${mail}`)

	const { data } = resp
	// console.log(data)

	if (data.length > 0) {
		let validar = data.find(user => {
			return user.password === password
		})

		if (validar) {
			return data
		} else {
			return []
		}
	}
}

//ACA ARMO EL LOGIN , LA FUNCION Y LO QUE TENGA ADENTRO 
export const Login = () => {
    const [userEmail,setUserEmail] =useState("");  //ACA QUIERO ASIGNARLE EL ESTATO USESTATE  
    const [userPassword,setUserPassword] =useState("");
    const navigate = useNavigate();

    const handleClick = () => //LO QUE HACE ACA ES , SI ME LOGEO , ME LLEVA A HOME , Y SI NOS DESLOGEAMOS , NOS LLEVA A LOGIN
		getUsuario(userEmail, userPassword).then(datos => {
			const { password, ...rest } = datos[0] //LOS "..." LE SACA LOS CORCHETES , LO QUE HACE ACA ES SACAR PASSWORD , Y QUE LO DEMAS QUEDE AGRUPADO EN LA VARIABLE "RES"
			//setUserData(datos)
			localStorage.setItem("usuario", JSON.stringify(rest))
			navigate("/")
		})
    //AGREGO EL RETURN EXPLICITO PARA PODER AGREGAR LO QUE ESTA DENTRO DEL COMPONENTE
    return(
        <Container className='mt-4'> {/*ACA USO UN CONTENEDOR TAMBIEN SACADO DE BOOSTRAP*/}
            
        <Form style={{width : 500,margin : "auto"}}>{/*ACA EMPIEZO ARMANDO EL FORMULARIO SACADO DE BOOSTRAP , TAMBIEN LE AGREGO UNA ESTILO DE CON EL ATRIBUTO STYLE*/}
            <h1>Iniciar Sesion</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={userEmail} onChange={event => setUserEmail(event.target.value)}/>{/*ACA HACEMOS COMO EN JS QUE HACEMOS EL EVENTO DE USUARIO CON ONCHANGE Y LUEGO LE ASIGNAMOS AL EVENTO */}
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={userPassword} onChange={event => setUserPassword(event.target.value)}/> {/*ACA HACEMOS COMO EN JS QUE HACEMOS EL EVENTO DE USUARIO CON ONCHANGE Y LUEGO LE ASIGNAMOS AL EVENTO */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <Button onClick={handleClick} variant="primary" type="button"> {/*LUEGO DECLARAMOS LA INSTANCIA DE ONCLICK Y DENTRO HANDLECLICK QUE ARRIBA LO DECLARAMOS Y CAMBIAMOS EL VALOR DE TYPE POR BUTTON*/}
            Submit
            </Button>
        </Form>
        </Container>
    )
}