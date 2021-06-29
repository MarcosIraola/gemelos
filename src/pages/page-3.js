import * as React from "react"
import { Link } from "gatsby"

import pc from '../images/pc.mp4';

const ThirdPage = () => (
 <div className='pagina2'>
   <video className='video-pc' src={pc} autoPlay loop muted/>

   <Link className='botonpagina2' to="/page-4">NEXT</Link>
 </div> 
)

export default ThirdPage
