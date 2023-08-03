import React, {useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ErrorModal from './ErrorModal';
import Row from 'react-bootstrap/Row';

import './LoginForm.css'

export const LoginForm = () => {
    const form = useRef();
    const navigate= useNavigate();
    const [modalShow, setModalShow] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(form.current)

      const api = "http://gabverse-env.eba-ppaz8wkp.us-east-1.elasticbeanstalk.com/"

      const response = await fetch(`${api}api/login`,
                                      { method: 'POST', body:formData}
                                  );
      const data = await response.json();
  
      if(data.token !== ''){
        localStorage.setItem('token', data.token);
        // sessionStorage.setItem('token', data.token);
        // let fecha = new Date();
        // fecha.setTime(fecha.getTime() + (3600*1000))
        // document.cookie = `token=${data.token}; expires=${fecha.toUTCString()}`;
        navigate('/cursos', {replace: true}); 
      }else{
        setModalShow(true);
      }
      //Recuperar información del form
    }
  
    return (
      <Container className="body">
        <Row id="main-container" className="d-grid h-100">
        <Form ref={form} onSubmit={handleSubmit}
              id="sign-in-form" className="w-100 text-center">
          <h3 className="mbr-fonts-style mb-4 display-2"><strong>Login</strong></h3>
          <img src="https://images.vexels.com/media/users/3/192766/isolated/preview/4f88f359135b09c5e43ae3a420b6c7f1-ilustracion-de-isla-de-palmera.png"
              alt="Imagen del Tec" className="login-logo mb-4"/>
          <Form.Group className="mb-1">
            <Form.Control type="text" placeholder="Nombre de usuario"
                          name="user" required />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Control type="password" placeholder="Contraseña"
                          name="password" required />
          </Form.Group>
          <Button className="w-100" 
                  type="submit" variant="primary">Iniciar sesion</Button>
        </Form>
        <ErrorModal show={modalShow} title='Error master!' message='Usuario o contraseña incorrectos' onHide={() => setModalShow(false)}/>
        </Row>
      </Container>
    )
}

export default LoginForm;