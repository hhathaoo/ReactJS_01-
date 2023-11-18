import { IC_Drawer, IMG_Logo } from '../../assets'
import './index.css'

function HomePage(){
    return(
        <div className='container'>
            <div className='header-container'>
                <div className='header-container_left'>
                    <img src={IMG_Logo} className='img-logo'/>
                    <img src={IC_Drawer} className='img-drawer'/>
                </div>
                <div>
                    <span>+86 852 346 000</span>
                    <button>
                    Reservations
                    </button>
                </div>
            </div>
            <div className='body-container'>
               <span>Blogs - Two Columns</span>
               <h6>It is easy way to create your beautiful blog for daily</h6>
            </div>
        </div>
    )
}

export default HomePage