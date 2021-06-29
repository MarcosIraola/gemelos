import * as React from "react"
import './index.css';
import { Link } from "gatsby";

import adn from '../images/adn.mp4';
import binario from '../images/binario.mp4';

const IndexPage = () => (
  <div className='contenedor'>

    <video className='video-adn' src={adn} autoPlay loop muted/>

    <video className='video-binario' src={binario} autoPlay loop muted/>
    
    <div className='titulo'>
      <h1 className='screentext'>LXS GEMELXS</h1>
    </div>

    <div className='subtitulo1'>
      <p className='screentext'>
        C:\Users\dna-test\gemelxs\donotplay\acces\src
      </p>
    </div>

    <div className='subtitulo2'>
      <p className='screentext'>
        29/06/2024 / Reporte incial - Dia 64      <br/>
            Los procedimientos inciciales dieron resultado y podemos comprender ahora la raiz de la neurosis <br/>
            y podemos comprender eficazmente como se replica eso en la sinapsis de los individuos, o quizas el individio unico. <br/>
            Me remito a pensar en los ultimos avances del campo pensando que quizas podamos, los tres juntos, traspasar una mente humana. <br/>
            La raiz de mi investigacion y por asi decirlo la chispa que la ha encendido se encuentra en Haiti, donde los nativos me instruyeron
            en la mastica del vudu. <br/>
            Hemos podido encontrar el nexo entre los muertos y los vivos, entre la mente y lo real. Bautista y Vidal, mi dos sujetos, van a ser 
            los primeros en cruzar el umbral.<br/>
          
      </p>
    </div>

    <textarea className='textarea' spellcheck="false"/>

    <Link className='boton' to="/page-2">ACEPTAR</Link>
    {/* <button className='boton'>ACEPTAR</button> */}
    

    
  </div>
  
)

export default IndexPage
