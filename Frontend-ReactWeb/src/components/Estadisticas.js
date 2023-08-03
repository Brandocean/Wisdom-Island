import React, { useEffect, useState, useRef } from 'react'
import jwt from 'jwt-decode'
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import './Estadistica.css'
import { Form, Tab, Tabs, Button, Table } from 'react-bootstrap';
import ErrorModal from './ErrorModal';

const StatChart = ({ dataA, dataB, title }) => (
    <div className="col-12 col-md-6 col-lg-3 item gallery-image mx-auto text-center align-items-center">
        <Doughnut
            style={{ display: 'inline' }}
            data={{
                datasets: [
                    {
                        data: [dataA, dataB],
                        backgroundColor: [
                            '#29BB2E',
                            '#f54242'
                        ]
                    }
                ]
            }}
            options={{
                responsive: true,
                circumference: 360,
                rotation: -90,
                plugins: {
                    legend: {
                        position: 'top'
                    },
                }
            }}
        />
        <div className="row">
            <div className="col mx-auto text-center">
                <h6 className="mbr-item-subtitle mbr-fonts-style align-center mb-2 mt-2 display-7">{title}</h6>
            </div>
        </div>
    </div>
);

export const Estadisticas = () => {

    const api = "http://gabverse-env.eba-ppaz8wkp.us-east-1.elasticbeanstalk.com/"

    const [user, setUser] = useState({ wins: 0, loses: 0, experiencia: 0, nivel: 0 });
    // vacío, se ejecuta cada vez que renderiza el componente
    // [], se ejecuta la primera vez que renderiza el componente
    // [estado], se ejecuta solo cuando se actualice el estado, sin bucle
    useEffect(() => {
        getUser()
    }, [user])

    /* Todas las funciones */
    const getUser = async () => {
        const token = localStorage.getItem('token')
        const id = jwt(token).id

        const response = await fetch(`${api}database/usuario/${id}`, {
            headers: {
                'x-access-token': token
            }
        })
        const data = await response.json()
        setUser(data[0])
    }

    const [msj, setMsj] = useState(null);
    useEffect(() => {
        getMsj()
    }, [msj])

    const getMsj = async () => {
        const token = localStorage.getItem('token')
        const id = jwt(token).id
        const response = await fetch(`${api}bridge/mensajeD/${id}`, {
            headers: {
                'x-access-token': token
            }
        })
        const dataM = await response.json()
        setMsj(dataM)
    }

    const form = useRef();
    const [modalShow, setModalShow] = useState(false);
    const [modalData, setModalData] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')
        const id = jwt(token).id

        // console.log({ id })

        const destinatario = form.current.elements["user"].value;
        const contenido = form.current.elements["text"].value;
        const payload = {
            destinatario, contenido,
            idRemitente: id,
        }

        const response = await fetch(
            `${api}bridge/mensaje`,
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

        let titulo, mensaje;
        if (data == "Mismo usuario") {
            setModalShow(true);
            titulo = 'Mensaje no enviado';
            mensaje = 'No puedes mandarte mensajes a ti mismo jaja que troll';
        }
        else if (data == "Valores inválidos") {
            setModalShow(true);
            titulo = 'Mensaje no enviado';
            mensaje = 'Revisa el destinatario';
        }
        else if (data == "Enviado") {
            setModalShow(true);
            titulo = 'Mensaje enviado';
            mensaje = 'Se envió el mensaje exitosamente';
        }
        else {
            setModalShow(true);
            titulo = 'Mensaje no enviado';
            mensaje = 'Ocurrió un error inesperado con el envío del mensaje';
        }
        setModalData({ titulo, mensaje });

        console.log(data);
    }

    // Logros
    const [logro, setLogro] = useState(null);
    useEffect(() => {
        getLogro()
    }, [logro])

    const getLogro = async () => {
        const token = localStorage.getItem('token')
        const id = jwt(token).id
        const response = await fetch(`${api}bridge/usuarioLogroU/${id}`, {
            headers: {
                'x-access-token': token
            }
        })
        const dataL = await response.json()
        setLogro(dataL)
    }

    // Amigos
    const [amigos, setAmigos] = useState(null);
    useEffect(() => {
        getAmigos()
    }, [amigos])

    const getAmigos = async () => {
        const token = localStorage.getItem('token')
        const id = jwt(token).id
        const response = await fetch(`${api}bridge/amigo1/${id}`, {
            headers: {
                'x-access-token': token
            }
        })
        const dataA = await response.json()
        setAmigos(dataA)
    }

    //Numero de Preguntas
    const [preg, setPreg] = useState({ Cpregunta: 0});
    useEffect(() => {
        getPreg()
    }, [preg])

    const getPreg = async () => {
        const token = localStorage.getItem('token')
        const id = jwt(token).id
        const response = await fetch(`${api}bridge/totalP/${id}`, {
            headers: {
                'x-access-token': token
            }
        })
        const dataP = await response.json()
        setPreg(dataP[0])
    }

    // Numero de logros
    const [clog, setClog] = useState({ Clogro: 0});
    useEffect(() => {
        getClog()
    }, [clog])

    const getClog = async () => {
        const token = localStorage.getItem('token')
        const id = jwt(token).id
        const response = await fetch(`${api}bridge/tot/${id}`, {
            headers: {
                'x-access-token': token
            }
        })
        const dataCL = await response.json()
        setClog(dataCL[0])
    }

    // Banco de preguntas
    const [banco, setBanco] = useState(null);
    useEffect(() => {
        getBanco()
    }, [banco])

    const getBanco = async () => {
        const token = localStorage.getItem('token')
        const id = jwt(token).id
        const response = await fetch(`${api}bridge/moduloWebUPT/${id}`, {
            headers: {
                'x-access-token': token
            }
        })
        const dataB = await response.json()
        setBanco(dataB)
    }

    //Mejores por nivel 
    const [bnivel, setBnivel] = useState(null);
    useEffect(() => {
        getBnivel()
    }, [bnivel])

    const getBnivel = async () => {
        const token = localStorage.getItem('token')
        const response = await fetch(`${api}database/usuarioOe`, {
            headers: {
                'x-access-token': token
            }
        })
        const dataBN = await response.json()
        setBnivel(dataBN)
    }

    //Mejores por experiencia
    const [bexp, setBexp] = useState(null);
    useEffect(() => {
        getBexp()
    }, [bexp])

    const getBexp = async () => {
        const token = localStorage.getItem('token')
        const response = await fetch(`${api}database/usuarioOp`, {
            headers: {
                'x-access-token': token
            }
        })
        const dataBE = await response.json()
        setBexp(dataBE)
    }

    return (
        <>
            <div className="container">
                <div className="mbr-section-head">
                    <h3 className="mbr-section-title mbr-fonts-style align-center m-0 display-2 text-center"><strong>Estadísticas</strong></h3>
                    <h4 className="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-2 display-5 text-center">Nivel {user.nivel}</h4>
                </div>
                <div className="row mbr-gallery mt-4">
                    {/* <!-- Imagenes de graficas --> */}
                    <StatChart dataA={user.wins} dataB={user.loses} title={"Wins vs Loses"} />
                    <StatChart dataA={user.experiencia} dataB={1000 - user.experiencia} title={"Experiencia"} />
                    <StatChart dataA={preg.Cpregunta} dataB={178 - preg.Cpregunta} title={"Preguntas"} />
                    <StatChart dataA={clog.Clogro} dataB={10 - clog.Clogro} title={"Logros"} />
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <h3 className="mbr-section-title mb-0 mbr-fonts-style display-2 text-center mb-3">
                            <strong>Información de juego</strong></h3>
                    </div>
                </div>

                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Usuario</th>
                    <th>Nivel</th>
                    <th>Usuario</th>
                    <th>Experiencia</th>
                    </tr>
                </thead>
                <tbody>
                    <tr> 
                        {bnivel && <td>{bnivel.map((bn, idn) => (<p key={idn}>{bn.userName}</p>))}</td>} 
                        {bnivel && <td>{bnivel.map((bn, idn) => (<p key={idn}>{bn.nivel}</p>))}</td>} 
                        {bexp && <td>{bexp.map((be, ide) => (<p key={ide}>{be.userName}</p>))}</td>} 
                        {bexp && <td>{bexp.map((be, ide) => (<p key={ide}>{be.puntos}</p>))}</td>} 
                    </tr>
                </tbody>
                </Table>

                <div className="row justify-content-center mt-4">
                    <div className="col-12 col-md-8">
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="home" title="Horas y Puntaje">
                                <li>Total de horas jugadas: {user.horasJuego}</li>
                                <li>Total de puntos obtenidos: {user.puntos}</li>
                            </Tab>
                            <Tab eventKey="preguntas" title="BancoP">
                                {banco && <ul>{banco.map((preguntas, idw) => (<li key={idw}>{preguntas.categoria} : {preguntas.pregunta}</li>))}</ul>}   
                            </Tab>
                            <Tab eventKey="logros" title="Logros">
                                {logro && <ul>{logro.map((logros, idy) => (<li key={idy}>{logros.nombreLogro}: {logros.descripcion}</li>))}</ul>}
                            </Tab>
                            <Tab eventKey="amigos" title="Amigos">
                                {amigos && <ul>{amigos.map((amigo, idz) => (<li key={idz}>{amigo.userName}</li>))}</ul>}
                            </Tab>
                            <Tab eventKey="mensajes recibidos" title="Mensajes recibidos">
                                {msj && <ul>{msj.map((remit, idx) => (<li key={idx}>{remit.userName}: {remit.contenido}</li>))}</ul>}
                            </Tab>
                            <Tab eventKey="redactar" title="Redactar mensaje">
                                <Form ref={form} onSubmit={handleSubmit}
                                    id="message-form" className="w-100 text-center">
                                    <Form.Group className="mb-1">
                                        <Form.Control type="text" placeholder="Destinatario"
                                            name="user" required />
                                    </Form.Group>
                                    <Form.Group className="mb-1">
                                        <Form.Control type="text" placeholder="Escribe tu mensaje..."
                                            name="text" required />
                                    </Form.Group>
                                    <Button className="w-100"
                                        type="submit" variant="primary">Enviar</Button>
                                </Form>
                                <ErrorModal show={modalShow} title={modalData.titulo} message={modalData.mensaje} onHide={() => setModalShow(false)} />
                            </Tab>
                            <Tab eventKey="" title="Símbologia">
                                <li>1: Geografía</li>
                                <li>2: Matemáticas</li>
                                <li>3: Historia</li>
                                <li>4: Física</li>
                                <li>5: Biología</li>
                                <li>6: Química</li>
                                <li>7: Lengua</li>
                                <li>8: Artes</li>
                                <li>9: Formación cívica y ética</li>
                                <li>10: Tecnología</li>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Estadisticas;
