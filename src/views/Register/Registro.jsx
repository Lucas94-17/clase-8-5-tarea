//ACA IMPORTO BOOSTRAP NUEVAMENTE (LOS ESTILOS)

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


//ACA ARMO EL REGISTRO , LA FUNCION Y LO QUE TENGA ADENTRO 
export const Registro = () => (
    <Container className='mt-4'> {/*ACA USO UN CONTENEDOR TAMBIEN SACADO DE BOOSTRAP*/}
        
    <Form style={{width : 500,margin : "auto"}}>{/*ACA EMPIEZO ARMANDO EL FORMULARIO SACADO DE BOOSTRAP , TAMBIEN LE AGREGO UNA ESTILO DE CON EL ATRIBUTO STYLE*/}
        <h1>Iniciar Sesion</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
        Submit
        </Button>
    </Form>
    </Container>
)