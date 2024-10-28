import '../main_bottom/index.css'
import img from '../img/Laye 1.png'

function Bottom(){
    return(
    <div className="Container">
     
   <div className="container_content">

    <div className="containerimg">
     <img src={img} alt="" srcset="" />
    </div>
    <div className="containerText">
    <label>Oferta especial</label>
    <h1>Air Jordan edição de colecionador</h1>
    <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</label>
    <button>Ver oferta</button>
    </div>

   </div>



    </div>
    )
}

export default Bottom;