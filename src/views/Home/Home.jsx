//CREO EL ARCHIVO HOME CON SU RESPECTIVA CARPETA , TAMBIEN LLAMADA HOME

//ACA IMPORTO BOOSTRAP NUEVAMENTE (LOS ESTILOS)

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom" //ACA IMPORTO LINK DE REACT-ROUTER-DOM
import home2 from "../../images/home2.png" //ACA IMPORTO LA IMAGEN HOME2.PNG
import "../../css/home.css" //ACA IMPORTO EL CSS DE HOME.CSS

//ACA ARMO EL HOME , LA FUNCION Y LO QUE TENGA ADENTRO 
export const Home = () => (
    <Container className="mt-4">
		<div className="contanier home-container">
			<div className="row">
				<div className="col-6">
					<h1 className="font-weight-bold">
						La plataforma
						<br />
						de aprendizaje
						<br /> para desarrolladores
					</h1>
					<Link to="/registro" className="btn btn-outline-info mt-3">
						Crea tu cuenta
					</Link>
					<p className="text-grey">Únete a los mas de 500.000 estudiantes</p>
				</div>
				<div className="col-6">
					<img src={home2} alt="portada1" />
				</div>
			</div>
			<div className="row">
				<div className="col-8 offset-2 parrafito text-grey">
					<p>
						Aprende desarrollo web con HTML5, CSS y JavaScript. Backend con Python. React, Go, Laravel.
						Desarrollo móvil con Android, Flutter y mucho más. <b>Desde tu casa.</b>
					</p>
				</div>
			</div>
		</div>
	</Container>
)