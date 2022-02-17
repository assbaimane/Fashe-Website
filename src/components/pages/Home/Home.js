import './Home.sass';
import Card from '../../Card/Card';
import { useState } from 'react';
import '../../../../node_modules/bootstrap/dist/js/bootstrap';
import Slide1 from '../../../images/Home/Carousel/carousel-01.jpg.webp';
import Slide2 from '../../../images/Home/Carousel/carousel-02.jpg.webp';
import Slide3 from '../../../images/Home/Carousel/carousel-03.jpg.webp';
import ComingSoon1 from '../../../images/Home/ComingSoon/cs-01.jpg.webp';
import ComingSoon2 from '../../../images/Home/ComingSoon/cs-02.jpg.webp';
import ComingSoon3 from '../../../images/Home/ComingSoon/cs-03.jpg.webp';

function Home() {
    //------------------------------- VARIABLES ------------------------------
    let products = require("../../../data/products.json");
    const [currentProduct, setCurrentProduct] = useState("BestSeller");

    //------------------------------- FUNCTIONS ------------------------------
    let sortState = (state) => {
        setCurrentProduct(state);
    }

    //--------------------------------- VIEW ---------------------------------
    return (
        <>
            {/* //---------------------- CAROUSSEL ----------------------- */}
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
                        <img src={Slide1} className="d-block w-100" alt="Jeans"></img>
                        <div className="carousel-caption text-center text-light">
                            <h1><span>New Arrivals</span></h1>
                            <p>Women's Collection 2022</p>
                            <button href="#" className='bg-white'>SHOP NOW</button>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={Slide2} className="d-block w-100" alt="Black sweat"></img>
                        <div className="carousel-caption text-center text-light">
                            <h1><span>100% Cotton Sweaters</span></h1>
                            <p>New Collection</p>
                            <button href="#" className='bg-white'>SHOP NOW</button>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={Slide3} className="d-block w-100" alt="Marine t-shirt"></img>
                        <div className="carousel-caption text-center text-light">
                            <h1><span>Lulu creation</span></h1>
                            <p>New Collection</p>
                            <button href="#" className='bg-white'>SHOP NOW</button>
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
            <div id="ComingSoon" className="row container mt-3 mb-3 mx-0 mx-auto">
                <div className="ComingSoonItems col-12 col-md-4 pt-4">
                    <img id='watch' className="img-fluid" src={ComingSoon1}></img>
                    <button className="bg-white text-dark">COMING SOON</button>
                </div>
                <div className="ComingSoonItems col-12 col-md-4 pt-4">
                    <img className="img-fluid" src={ComingSoon2}></img>
                    <button className="bg-white text-dark">COMING SOON</button>
                </div>
                <div className="ComingSoonItems col-12 col-md-4 pt-4">
                    <img id='sunglasses' className="img-fluid" src={ComingSoon3}></img>
                    <button className="bg-white text-dark">COMING SOON</button>
                </div>
            </div>

            {/* //---------------------- OUR PRODUCTS ----------------------- */}
            <div id="OurProducts" className="row container mx-auto mt-5 mb-5">
                <h2 className='text-center mt-5 mt-md-0 mb-3 mb-md-0'>Our Products</h2>

                {/* ---------------- Filters ---------------- */}
                <div className="OurProductsNav row mb-3 mb-md-0">
                    <ul>
                        <li onClick={() => sortState("BestSeller")} className={(currentProduct === "BestSeller") ? 'active' : null}>Best Seller</li>
                        <li onClick={() => sortState("New")} className={(currentProduct === "New") ? 'active' : null}>New</li>
                        <li onClick={() => sortState("Sale")} className={(currentProduct === "Sale") ? 'active' : null}>Sale</li>
                        <li onClick={() => sortState("Old")} className={(currentProduct === "Old") ? 'active' : null}>Old</li>
                    </ul>
                </div>

                {/* ---------------- Products ---------------- */}
                <div className="row">
                    {products.filter(elem => elem.state === currentProduct).map((element) => {
                        return (
                            <Card
                                key={element.id}
                                display={"col-12 col-md-3 pb-4 pb-md-0"}
                                img={element.src}
                                title={element.name}
                                price={element.price}
                            />
                        )})
                    }
                </div>
            </div>

            {/* //------------------- HOME FOOTER BANNER -------------------- */}
            <div id="HomeBanner" className="row text-light text-center mx-0">
                <div>
                    <h2>The Beauty<br></br><span>LOOKBOOK</span></h2>
                    <p><i className="fa-solid fa-play"></i> PLAY VIDEO</p>
                </div>
            </div>
        </>
    );
}

export default Home;