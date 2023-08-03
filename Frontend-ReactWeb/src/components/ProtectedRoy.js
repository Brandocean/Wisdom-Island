import React from 'react'
import { Navigate } from 'react-router-dom';


//Esto es para entrar a una ruta cuando estas logeado
//Agregar verify
const ProtectedRoy = ({children}) => {
    // IF token es valido
    const token = localStorage.getItem('token');
    if(!token) 
        return <Navigate to='/' />
    return children
}

export default ProtectedRoy;