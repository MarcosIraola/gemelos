import * as React from "react"
import { Link } from "gatsby"

import brokenpc from '../images/brokenpc.mp4';

const SecondPage = () => (
 <div className='pagina2'>
   <video className='video-pc' src={brokenpc} autoPlay loop muted/>

   <Link className='botonpagina2' to="/page-3">NEXT</Link>
 </div> 
)

export default SecondPage
