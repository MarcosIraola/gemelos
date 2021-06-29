import * as React from "react"
import { Link } from "gatsby"

import pccarteles from '../images/pccarteles.mp4';

const ForthPage = () => (
 <div className='pagina2'>
   <video className='video-pc' src={pccarteles} autoPlay loop muted/>

   <Link className='botonpagina2' to="/">HOME</Link>
 </div> 
)

export default ForthPage
