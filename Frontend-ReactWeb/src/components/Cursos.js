import React from 'react'
import { useNavigate } from 'react-router-dom'
import './assets/mbr-additional.css'

export const Cursos = () => {
    const navigate = useNavigate();

    const goBiologia = () => {
        navigate('/biologia', {replace: true})
    }

    return (
        <section data-bs-version="5.1" className="features4 cid-sZaSwyyh0K" id="features4-5">
    
    <div className="mbr-overlay"></div>
    <div className="container">
        <div className="mbr-section-head">
            <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2 text-center">
                <strong>Cursos</strong></h4>
            <h5 className="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-2 display-5 text-center">"Nunca pares de aprender, mientras te diviertes"</h5>
        </div>
        {/* -- Primera fila -- */}
        <div className="row mt-4">
            <div className="item features-image сol-12 col-md-6 col-lg-4">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src="https://encolombia.com/wp-content/uploads/2021/09/Biologia.jpg" alt="Mobirise Website Builder" title=""/>
                    </div>
                    <div className="item-content">
                        <h5 className="item-title mbr-fonts-style display-5"><strong>Biología</strong></h5>
                        
                        <p className="mbr-text mbr-fonts-style mt-3 display-7">En este curso aprenderás todo sobre la naturaleza, las células y mucho más.</p>
                    </div>
                    <div className="mbr-section-btn item-footer mt-2"><a className="btn item-btn btn-black display-7" onClick={goBiologia}>Vamos!</a></div>
                </div>
            </div>
            <div className="item features-image сol-12 col-md-6 col-lg-4">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src="https://aptus.com.ar/wp-content/uploads/2019/11/ciencias.jpg" alt="Mobirise Website Builder" title=""/>
                    </div>
                    <div className="item-content">
                        <h5 className="item-title mbr-fonts-style display-5"><strong>Geografía</strong></h5>
                        
                        <p className="mbr-text mbr-fonts-style mt-3 display-7">Descripción de Geografía </p>
                    </div>
                    <div className="mbr-section-btn item-footer mt-2"><a href="" className="btn item-btn btn-black display-7" target="_blank">Vamos!</a></div>
                </div>
            </div>
            <div className="item features-image сol-12 col-md-6 col-lg-4">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src="https://images.ecestaticos.com/ZnJeZaKyGmTw1Ry4nsNkd6_miBs=/0x64:1252x769/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fb45%2F161%2F2b4%2Fb451612b46782078431528832573321f.jpg" alt="Mobirise Website Builder" title=""/>
                    </div>
                    <div className="item-content">
                        <h5 className="item-title mbr-fonts-style display-5"><strong>Historia</strong></h5>
                        
                        <p className="mbr-text mbr-fonts-style mt-3 display-7">Descripción de Historia</p>
                    </div>
                    <div className="mbr-section-btn item-footer mt-2"><a href="" className="btn item-btn btn-black display-7" target="_blank">Canjear puntos</a></div>
                </div>
            </div>

        </div>
        {/* <!-- Fin de primera fila --> */}
        {/* <!-- Segunda fila --> */}
        <div className="row mt-4">
            <div className="item features-image сol-12 col-md-6 col-lg-4">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src="https://okdiario.com/img/2017/02/01/fisica-fuerzas-fundamentales-655x368.jpeg" alt="Mobirise Website Builder" title="" />
                    </div>
                    <div className="item-content">
                        <h5 className="item-title mbr-fonts-style display-5"><strong>Fisica</strong></h5>
                        
                        <p className="mbr-text mbr-fonts-style mt-3 display-7">Descripción de Fisica</p>
                    </div>
                    <div className="mbr-section-btn item-footer mt-2"><a href="Fisica.html#content17-h" className="btn item-btn btn-black display-7" target="_self">Vamos!</a></div>
                </div>
            </div>
            <div className="item features-image сol-12 col-md-6 col-lg-4">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src="https://t2.pb.ltmcdn.com/es/posts/7/9/8/la_quimica_del_amor_existe_una_formula_cientifica_4897_orig.jpg" alt="Mobirise Website Builder" title=""/>
                    </div>
                    <div className="item-content">
                        <h5 className="item-title mbr-fonts-style display-5"><strong>Quimica</strong></h5>
                        
                        <p className="mbr-text mbr-fonts-style mt-3 display-7"> Descripción de Quimica </p>
                    </div>
                    <div className="mbr-section-btn item-footer mt-2"><a href="" className="btn item-btn btn-black display-7" target="_blank">Vamos!</a></div>
                </div>
            </div>
            <div className="item features-image сol-12 col-md-6 col-lg-4">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src="https://educacion30.b-cdn.net/wp-content/uploads/2020/03/fondo-matematicas_23-2148146270.jpg" alt="Mobirise Website Builder" title=""/>
                    </div>
                    <div className="item-content">
                        <h5 className="item-title mbr-fonts-style display-5"><strong>Matemáticas</strong></h5>
                        
                        <p className="mbr-text mbr-fonts-style mt-3 display-7">Descripción de Matemáticas</p>
                    </div>
                    <div className="mbr-section-btn item-footer mt-2"><a href="" className="btn item-btn btn-black display-7" target="_blank">Canjear puntos</a></div>
                </div>
            </div>

        </div>
        {/* <!-- Fin de segunda fila -->
        <!-- Tercera fila --> */}
        <div className="row mt-4">
            <div className="item features-image сol-12 col-md-6 col-lg-4">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src="https://3.bp.blogspot.com/-zuwzoMeBgDo/V5izU7LIFKI/AAAAAAAABEc/FDJxXrHULj8ETbrIckzL93FRhATSteRMQCLcB/s1600/solidaridad.jpg" alt="Mobirise Website Builder" title=""/>
                    </div>
                    <div className="item-content">
                        <h5 className="item-title mbr-fonts-style display-5"><strong>Formacion civica y etica</strong></h5>
                        
                        <p className="mbr-text mbr-fonts-style mt-3 display-7">Descripción de Formacion civica y etica</p>
                    </div>
                    <div className="mbr-section-btn item-footer mt-2"><a href="" className="btn item-btn btn-black display-7" target="_blank">Vamos!</a></div>
                </div>
            </div>
            <div className="item features-image сol-12 col-md-6 col-lg-4">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src="https://s1.eestatic.com/2022/01/04/curiosidades/lenguaje/639946235_220880961_1024x576.jpg" alt="Mobirise Website Builder" title=""/>
                    </div>
                    <div className="item-content">
                        <h5 className="item-title mbr-fonts-style display-5"><strong>Lengua</strong></h5>
                        
                        <p className="mbr-text mbr-fonts-style mt-3 display-7"> Descripción de Lengua </p>
                    </div>
                    <div className="mbr-section-btn item-footer mt-2"><a href="" className="btn item-btn btn-black display-7" target="_blank">Vamos!</a></div>
                </div>
            </div>
            <div className="item features-image сol-12 col-md-6 col-lg-4">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src="https://uvp.mx/uvpblog/wp-content/uploads/2021/07/Artes-Visuales.jpg" alt="Mobirise Website Builder" title=""/>
                    </div>
                    <div className="item-content">
                        <h5 className="item-title mbr-fonts-style display-5"><strong>Artes</strong></h5>
                        
                        <p className="mbr-text mbr-fonts-style mt-3 display-7">Descripción de Artes</p>
                    </div>
                    <div className="mbr-section-btn item-footer mt-2"><a href="" className="btn item-btn btn-black display-7" target="_blank">Canjear puntos</a></div>
                </div>
            </div>

        </div>
        {/* <!-- Fin de tercera fila -->
        <!-- Inicio de cuarta fila --> */}
        <div className="row mt-4">
            <div className="item features-image сol-12 col-md-6 col-lg-4">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src="https://computacioninteractiva.com/wp-content/uploads/2019/11/Tecnolog%C3%ADa-digital-01.png" alt="Mobirise Website Builder" title=""/>
                    </div>
                    <div className="item-content">
                        <h5 className="item-title mbr-fonts-style display-5"><strong>Tecnología</strong></h5>
                        
                        <p className="mbr-text mbr-fonts-style mt-3 display-7">Descripción de Tecnología</p>
                    </div>
                    <div className="mbr-section-btn item-footer mt-2"><a href="" className="btn item-btn btn-black display-7" target="_blank">Vamos!</a></div>
                </div>
            </div>
        </div>
        {/* <!-- Fin de cuarta fila --> */}
    </div>
</section>
    )
}

export default Cursos;