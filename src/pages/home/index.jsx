import { IC_Drawer, IMG_Logo, Food_1, Food_2 } from '../../assets'
import './index.css'

function HomePage() {
    return (
        <div>

            <div className='container'>
                <div className='header-container'>
                    <div className='header-container_left'>
                        <img src={IMG_Logo} className='img-logo' />
                        <img src={IC_Drawer} className='img-drawer' />
                    </div>
                    <div className='header-container_right'>
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

                <div className='body'>
                    <div className='body_food-1'>
                        <img src={Food_1} className='food-1' />
                        <h5>
                            Fruit and vegetables and protection against diseases
                        </h5>
                        <h4>
                            -----------------------------------------------------
                        </h4>
                        <h6>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </h6>
                        <h3>
                            Read More
                        </h3>


                    </div>

                    <div className='body_food-2'>
                    <img src={Food_2} className='food-2' />
                    <h5>
                    Asparagus spring Salad with Rocket, Goat's Cheese
                        </h5>
                        <h4>
                            -----------------------------------------------------
                        </h4>
                        <h6>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </h6>
                        <h3>
                            Read More
                        </h3>



                    </div>
                    

                </div>
           
        </div>
    )
}

export default HomePage