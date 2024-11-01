import '../main_bottom/index.css'
import img from '../../public/Laye-1.png'

function MainBottom(){
    return(
       <div className='MainBottom'>
            <div className='MainBottomContainer'>

                <div className='ImgBottonContainer'>
                    <img src={img} alt="" />
                </div>

                <div className='TextBottonContainer'>
                    <div className='ColumnText' >
                        
                       
                        <p className='TextOfert' >Oferta especial</p>
                        <h2>Air Jordan edição de colecionador</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex provident neque repellendus possimus tempore temporibus, delectus saepe ut ipsam voluptas.</p>
                        <button className='ColumnButton'> Ver oferta </button>
                        

                    </div>
                </div>

            </div>
       </div> 
    )
}

export default MainBottom;