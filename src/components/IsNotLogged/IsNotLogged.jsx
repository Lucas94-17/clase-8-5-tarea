import { useNavigate } from "react-router-dom" // esto me va a permitir navegar
import { useEffect } from "react";

export const IsNotLogged = ({children}) => {
    const navigate = useNavigate(); // esto lo que hace , es permitirte navegar
    
    useEffect(() =>{
        if (!localStorage.getItem("usuario")) {
            navigate("/login")
        }
    })
    return children
}
//Creo el archivo IsLogged.jsx y lo exporto