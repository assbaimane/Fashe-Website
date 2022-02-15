import './Home.sass';
import {useEffect} from 'react';
import '../../../../node_modules/bootstrap/dist/js/bootstrap'
import Slide1 from '../../../images/Home/Carousel/carousel-01.jpg.webp'
import Slide2 from '../../../images/Home/Carousel/carousel-02.jpg.webp'
import Slide3 from '../../../images/Home/Carousel/carousel-03.jpg.webp'


function Home(){
    // --------------------------- FUNCTIONS ------------------------

    //-------------------------- DISPLAY -------------------------
    return(
        //---------------------- CAROUSSEL -----------------------
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={Slide1} class="d-block w-100" alt="Jeans"></img>
                    <div className="carousel-caption text-center text-light">
                        <h1>Leather bags</h1>
                        <p>New Collection</p>
                        <button href="#" className='text-secondary bg-white'>SHOP NOW</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={Slide2} class="d-block w-100" alt="Black sweat"></img>
                    <div className="carousel-caption text-center text-light">
                        <h1>Original sweats</h1>
                        <p>New Collection</p>
                        <button href="#" className='text-secondary bg-white'>SHOP NOW</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={Slide3} class="d-block w-100" alt="Marine t-shirt"></img>
                    <div className="carousel-caption text-center text-light">
                        <h1>Lulu creation</h1>
                        <p>New Collection</p>
                        <button href="#" className='text-secondary bg-white'>SHOP NOW</button>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Home;