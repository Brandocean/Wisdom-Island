import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate('/login', {replace: true})
  }

  const goRegister = () => {
    navigate('/register', {replace: true})
  }

  return (
    <div className="container">
        <div className="row justify-content-end">
            <div className="col-12 col-lg-7 centerDiv">
                <h1 className="mb-3 display-1"><strong>Wisdom Island</strong></h1>
                <div className="mt-3">
                    <div className="btn btn-warning display-7 me-2" onClick={goLogin}>Iniciar sesión</div>
                    <a className="btn btn-black display-7" onClick={goRegister}>Registrarse</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;