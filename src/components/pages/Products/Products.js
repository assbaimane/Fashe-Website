import './Products.sass';
import Card from '../../Card/Card';
import { useState } from 'react';

function Products(){
    //-------------------------- VARIABLES -------------------------
    let products = require("../../../data/products.json");
    const [currentCategory, setCurrentCategory] = useState("All");

    //-------------------------- FUNCTIONS -------------------------
    let sortCategory = (category) => {
        setCurrentCategory(category);
    }

    //-------------------------- DISPLAY -------------------------
    return(
       <>
            {/* //---------------------- BANNER ----------------------- */}
            <div id='ProductsBanner'>
                <div className='text-center'>
                    <h1>Product</h1>
                    <p>New Arrivals Women Collection</p>
                </div>
            </div>

            {/* //---------------------- PRODUCTS ----------------------- */}
            <div id='ProductsBody' className='container mt-5'>
                <div className="row">
                    {/* ------ Categories and Filters ------ */}
                    <div className="col-3">
                        <div className="categories m-3">
                            <h3>Categories</h3>
                            <ul>
                                <li onClick={() => sortCategory("All")}>All</li>
                                <li onClick={() => sortCategory("Women")}>Women</li>
                                <li onClick={() => sortCategory("Kids")}>Kids</li>
                                <li onClick={() => sortCategory("Mens")}>Men</li>
                                <li onClick={() => sortCategory("Accessories")}>Accessoire</li>
                            </ul>
                        </div>

                        <div className="filters m-3">
                            <h3>Filter</h3>
                            <div className="searchContainer d-flex align-items-center border">
                                <input type="text" className="border border-none col-9"></input>
                                <i class="fa-solid fa-magnifying-glass col-3 text-center"></i>
                            </div>
                        </div>

                    </div>

                    {/* ----------- Products card ----------- */}
                    <div className="col-9">
                        <div className="row">
                            {/* --------- All category ---------- */}
                            {products.filter(elem => elem.category === currentCategory).map((element) => {
                                return (
                                    <Card
                                        key={element.id}
                                        display={"col-4"}
                                        img={element.src}
                                        title={element.name}
                                        price={element.price}
                                    />
                                )})
                            }

                            {/* --------- Specific Category ---------- */}
                            {(currentCategory == "All") && products.map((element) => {
                                return (
                                    <Card
                                        key={element.id}
                                        display={"col-4"}
                                        img={element.src}
                                        title={element.name}
                                        price={element.price}
                                    />
                                )})
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Products;