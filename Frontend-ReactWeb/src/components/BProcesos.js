import React from 'react'
import { Accordion } from 'react-bootstrap';

export const BProcesos = () => {
  return (
    <div class="container">
      <div className="row justify-content-center">
          <div className="col-12 col-md-8">
              <h3 className="mbr-section-title mb-4 mbr-fonts-style display-2 text-center">
                  <strong>Biología: Procesos</strong></h3>
          </div>
      </div>
      
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header><strong>Producción de energía</strong></Accordion.Header>
          <Accordion.Body>
            La producción de energía en este tema hace referencia a los diferentes
            pasos y etapas que existen para producir energía en las células a partir de la degradación/oxidación de las 
            macromoléculas principales.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><strong>Información general</strong></Accordion.Header>
          <Accordion.Body>
            El proceso de producción de energía está dividida en dos secciones principales: La glucólisis y la respiración (aerobea) o la fermentación (anaerobea).
            En estas, se degradan las macromoleculas principales para producir ATP que es la unidad fundamental de energía en las células.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header><strong>Puntos clave</strong></Accordion.Header>
          <Accordion.Body>
          - La etapa de glucólisis genera 2 moléculas de ATP y se lleva a cabo en el citoplasma. <br></br>
          - Las macromoléculas principales para la producción de energía son el almidón y el glucógeno. <br></br>
          - Existen múltiples procesos dentro de la producción de energía, como la hidrólisis y la fosforilación. <br></br>
          - Los organismos aerobios llevana cabo la respiración, mientras que los no aerobios utilizan la fermentación. <br></br>
          - La etapa de respiración celular produce entre 30 y 32 ATPs y se lleva a cabo en la mitocondria. <br></br>
          - La etapa de fermentación no produce ATPs extras. <br></br>
          - Las coenzimas Nad+ y FAD ayudan a transportar los electrones liberados en la separación.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header><strong>Videos de apoyo sugeridos</strong></Accordion.Header>
          <Accordion.Body>
            - <a href="https://youtu.be/ZCjI6eazbaE" target="_blank">ATP [La moneda energética de la célula]</a> <br></br>
            - <a href="https://youtu.be/qUFKCIyMZQg" target="_blank">PANORAMA GENERAL de la oxidación de la glucosa [INTRO glucólisis y respiración celular]</a> <br></br>
            - <a href="https://youtu.be/y40VePoRag4" target="_blank">GLUCÓLISIS [Paso a paso con repaso y resumen final]</a> <br></br>
            - <a href="https://youtu.be/L2ydeTGEU-8" target="_blank">Glucólisis anaeróbica y aeróbica [FERMENTACIÓN Y RESPIRACIÓN]</a> <br></br>
            - <a href="https://youtu.be/VWxnqQvbtfs" target="_blank">EL CICLO DE KREBS [Paso a paso con repaso y resumen final]</a> <br></br>
            - <a href="https://youtu.be/HKnP-A3feb8" target="_blank">Cadena de transporte de electrones y fosforilación oxidativa</a> <br></br>
            - <a href="https://youtu.be/8_HSOHJrpks" target="_blank">RENDIMIENTO ENERGÉTICO GLOBAL de la oxidación de la glucosa</a> <br></br>
            - <a href="https://youtu.be/kiflNhR1GWw" target="_blank">REGULACIÓN de la GLUCÓLISIS y la RESPIRACIÓN CELULAR</a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header><strong>Apoyos externos</strong></Accordion.Header>
          <Accordion.Body>
          - <a href="https://www.nationalgeographic.com.es/ciencia/metabolismo-tu-cuerpo-visto-como-central-energia_15856" target="_blank">Metabolismo: tu cuerpo visto como una central de energía</a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header><strong>Niveles de dificultad disponibles</strong></Accordion.Header>
          <Accordion.Body>
          Esta sección cuenta actualmente con 4 niveles de dificultad y 36 preguntas.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

    </div> //Container
  )
}

export default BProcesos;
