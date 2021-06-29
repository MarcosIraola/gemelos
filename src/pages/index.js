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
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
        pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In 
        enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. 
        Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, 
        eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra qu
      </p>
    </div>

    <textarea className='textarea' spellcheck="false"/>

    <Link className='boton' to="/page-2">ACEPTAR</Link>
    {/* <button className='boton'>ACEPTAR</button> */}
    

    
  </div>
  
)

export default IndexPage
