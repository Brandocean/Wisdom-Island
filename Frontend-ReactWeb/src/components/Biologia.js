import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Biologia.css'

export const Biologia = () => {
    const navigate = useNavigate();

    const goBProcesos = () => {
        navigate('/bprocesos', {replace: true})
    }
    
  return (
    <div class="container">
        <div class="mbr-section-head">
            <h4 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2 text-center"><strong>Temario Biologia</strong></h4>
        </div>
        <div class="row mt-4">
            <div class="item features-image сol-12 col-md-6 col-lg-6">
                <div class="item-wrapper">
                    <div class="item-img">
                        <img src="https://statics-diariomedico.uecdn.es/cms/2014/10/27/genoma.jpg" alt="Mobirise Website Builder" className="topic-logo"/>
                    </div>
                    <div class="item-content">
                        <h5 class="item-title mbr-fonts-style display-5">Procesos</h5>
                        
                        
                    </div>
                    <div class="mbr-section-btn item-footer mt-2"><a class="btn btn-primary item-btn display-17 mb-3" onClick={goBProcesos}>Empieza!</a></div>
                </div>
            </div>
            <div class="item features-image сol-12 col-md-6 col-lg-6">
                <div class="item-wrapper">
                    <div class="item-img">
                        <img src="https://plustatic.com/496/conversions/partes-celulas-social.jpg" alt="Mobirise Website Builder" className="topic-logo"/>
                    </div>
                    <div class="item-content">
                        <h5 class="item-title mbr-fonts-style display-5">Células</h5>
                        
                        
                    </div>
                    <div class="mbr-section-btn item-footer mt-2"><a href="" class="btn btn-primary item-btn display-7" target="_blank">Empieza!</a></div>
                </div>
            </div>
            <div class="item features-image сol-12 col-md-6 col-lg-6">
                <div class="item-wrapper">
                    <div class="item-img">
                        <img src="https://personalinjurydoctorgroup.com/wp-content/uploads/2020/05/image-1-37.jpg" alt="Mobirise Website Builder" className="topic-logo"/>
                    </div>
                    <div class="item-content">
                        <h5 class="item-title mbr-fonts-style display-5">Energía y transponte</h5>
                        
                        
                    </div>
                    <div class="mbr-section-btn item-ftitleooter mt-2"><a href="" class="btn btn-primary item-btn display-7 mb-3" target="_blank">Empieza!</a></div>
                </div>
            </div>
            <div class="item features-image сol-12 col-md-6 col-lg-6">
                <div class="item-wrapper">
                    <div class="item-img">
                        <img src="https://www.fundacionaquae.org/wp-content/uploads/2014/11/charles-darwin-evolucion-concepto-e1627489621751.jpg" alt="Mobirise Website Builder" title="" className="topic-logo"/>
                    </div>
                    <div class="item-content">
                        <h5 class="item-title mbr-fonts-style display-5">Evolución</h5>
                        
                        
                    </div>
                    <div class="mbr-section-btn item-footer mt-2"><a href="" class="btn btn-primary item-btn display-7" target="_blank">Empieza!</a></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Biologia;