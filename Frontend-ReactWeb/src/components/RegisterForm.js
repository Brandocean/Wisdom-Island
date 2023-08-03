import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ErrorModal from "./ErrorModal";
import Row from "react-bootstrap/Row";

import "./LoginForm.css";

export const RegisterForm = () => {
  const form = useRef();
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token')

    const userName = form.current.elements["user"].value;
    const correo = form.current.elements["email"].value;
    const contrasenia = form.current.elements["password"].value;
    const edad = parseInt(form.current.elements["age"].value);
    const rol = parseInt(form.current.elements["rol"].value);
    const skin = parseInt(form.current.elements["skin"].value);
    const payload = {
      userName,
      correo,
      contrasenia,
      edad,
      rol,
      skin,
    };

    console.log({ payload });

    const api = "http://gabverse-env.eba-ppaz8wkp.us-east-1.elasticbeanstalk.com/"
    // http://localhost:3001/api/register

    const response = await fetch(`${api}api/register`,
                                  {
                                      method: 'POST',
                                      headers: {
                                        'x-access-token': token,
                                        'Content-Type': 'application/json'
                                      },
                                    body: JSON.stringify(payload)
                                  }
                                );
    const data = await response.json();
    
    // console.log(data);

    let titulo, mensaje;
    if (data === "Usuario creado") {
      setModalShow(true);
      titulo = 'Usuario creado';
      mensaje = 'Se creó el usuario exitosamente. Favor de iniciar sesión';
    }
    else if (data === "Valores inválidos") {
      setModalShow(true);
      titulo = 'Error!';
      mensaje = 'Valores inválidos';
    }
    else if (data === "Error al crear el usuario") {
      setModalShow(true);
      titulo = 'Error al crear el usuario';
      mensaje = 'Fallo en la conexión con la base de datos, usuario o correo existentes';
    }
    else if (data === "Correo existente") {
      setModalShow(true);
      titulo = 'Error al crear el usuario';
      mensaje = 'El correo ya existe';
    }
    else if (data === "Usuario existente") {
      setModalShow(true);
      titulo = 'Error al crear el usuario';
      mensaje = 'El usuario ya existe';
    }
    setModalData({ titulo, mensaje });

    console.log(data);
  };

  return (
    <Container className="body">
      <Row id="main-container" className="d-grid h-100">
        <Form
          ref={form}
          onSubmit={handleSubmit}
          id="sign-in-form"
          className="w-100 text-center"
        >
          <h3 className="mbr-fonts-style mb-4 display-2">
            <strong>Regístrate</strong>
          </h3>
          <img
            src="https://images.vexels.com/media/users/3/192766/isolated/preview/4f88f359135b09c5e43ae3a420b6c7f1-ilustracion-de-isla-de-palmera.png"
            alt="Imagen del Tec"
            className="login-logo mb-4"
          />
          <Form.Group className="mb-3" controlId="formBasicUser">
            <Form.Control
              type="text"
              placeholder="Nombre de usuario"
              name="user"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Correo"
              name="email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              minLength="3"
              placeholder="Contraseña"
              name="password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEdad">
            <Form.Control
              type="number"
              min="10"
              max="99"
              placeholder="Edad"
              name="age"
              required
            />
          </Form.Group>

          <Form.Select
            className="mb-3"
            aria-label="Default select example"
            name="rol"
          >
            <option>Escoge un rol</option>
            <option value="1">Estudiante</option>
            <option value="2">Maestro/a</option>
          </Form.Select>

          <Form.Select
            className="mb-3"
            aria-label="Default select example"
            name="skin"
          >
            <option>Escoge una skin</option>
            <option value="1">Hombre</option>
            <option value="2">Mujer</option>
            <option value="3">Helicoptero</option>
          </Form.Select>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="He leído términos y condiciones"
            />
          </Form.Group>
          <Button className="w-100" variant="primary" type="submit">
            Regístrate
          </Button>
        </Form>
        <ErrorModal show={modalShow} 
        title={modalData.titulo} 
        message={modalData.mensaje} 
        onHide={() => setModalShow(false)} />
      </Row>
    </Container>
  );
};

export default RegisterForm;
