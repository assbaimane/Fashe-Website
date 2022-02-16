import './Home.sass';
import Card from '../../Card/Card'
import {useEffect} from 'react';
import '../../../../node_modules/bootstrap/dist/js/bootstrap'
import Slide1 from '../../../images/Home/Carousel/carousel-01.jpg.webp'
import Slide2 from '../../../images/Home/Carousel/carousel-02.jpg.webp'
import Slide3 from '../../../images/Home/Carousel/carousel-03.jpg.webp'
import ComingSoon1 from '../../../images/Home/ComingSoon/cs-01.jpg.webp'
import ComingSoon2 from '../../../images/Home/ComingSoon/cs-02.jpg.webp'
import ComingSoon3 from '../../../images/Home/ComingSoon/cs-03.jpg.webp'

function Home(){
    let products = require("../../../data/products.json");
    products.splice(0,4);
    var currentProduct = "BestSeller";

    let sortState = (state) => {
        if (state == "BestSeller"){
            currentProduct = "BestSeller";
            return currentProduct;
        }
        else if (state == "New"){
            currentProduct = "New";
            return currentProduct;
        }
        else if(state == "Sale"){
            currentProduct = "Sale";
            return currentProduct;
        }
        else if(state == "Old"){
            currentProduct = "Old";
            return currentProduct;
        }
        else{
            currentProduct = "BestSeller"
            console.log("Pay Attention, no state found")
        }
    }

    //-------------------------- DISPLAY -------------------------
    return(
        <>
        {/* //---------------------- CAROUSSEL ----------------------- */}
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Slide1} className="d-block w-100" alt="Jeans"></img>
                    <div className="carousel-caption text-center text-light">
                        <h1>Leather bags</h1>
                        <p>New Collection</p>
                        <button href="#" className='text-secondary bg-white'>SHOP NOW</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Slide2} className="d-block w-100" alt="Black sweat"></img>
                    <div className="carousel-caption text-center text-light">
                        <h1>Original sweats</h1>
                        <p>New Collection</p>
                        <button href="#" className='text-secondary bg-white'>SHOP NOW</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Slide3} className="d-block w-100" alt="Marine t-shirt"></img>
                    <div className="carousel-caption text-center text-light">
                        <h1>Lulu creation</h1>
                        <p>New Collection</p>
                        <button href="#" className='text-secondary bg-white'>SHOP NOW</button>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        {/* //---------------------- COMING SOON ----------------------- */}
        <div id ="ComingSoon" className="row container mt-3 mb-3 mx-0 mx-auto">
            <div className="col-4">
                <img className="img-fluid" src={ComingSoon1}></img>
                <button className="bg-white text-dark">COMING SOON</button>
            </div>
            <div className="col-4">
                <img className="img-fluid" src={ComingSoon2}></img>
                <button className="bg-white text-dark">COMING SOON</button>
            </div>
            <div className="col-4">
                <img className="img-fluid" src={ComingSoon3}></img>
                <button className="bg-white text-dark">COMING SOON</button>
            </div>
        </div>

        {/* //---------------------- OUR PRODUCTS ----------------------- */}
        <div id ="OurProducts" className="row container mx-auto mt-5 mb-5">
            <h2 className='text-center'>Our Products</h2>
            <div className="row">
                <ul>
                    <li onClick={() => sortState("BestSeller")}>Best Seller</li>
                    <li onClick={() => sortState("New")}>New</li>
                    <li onClick={() => sortState("Sale")}>Sale</li>
                    <li onClick={() => sortState("Old")}>Old</li>
                </ul>
            </div>
            {/* -------------- Products -------------- */}
            <div className="row">
                {products.map((element) => 
                    {sortState("BestSeller") == "BestSeller" &&
                        <Card 
                            key = {element.id}
                            img = {element.src}
                            title = {element.name}
                            price = {element.price}
                        />
                        {alert(sortState())}
                    }
                )}
            </div>
        </div>

        {/* //------------------- HOME FOOTER BANNER -------------------- */}
        <div id ="HomeBanner" className="row text-light text-center mx-0">
            <div>
                <h2>The Beauty<br></br>LOOKBOOK</h2>
                <p><i class="fa-solid fa-play"></i> PLAY VIDEO</p>
            </div>
        </div>
        </>
    );
}

export default Home;