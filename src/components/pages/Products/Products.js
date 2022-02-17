import './Products.sass';
import Card from '../../Card/Card';
import { useState } from 'react';

function Products() {
    //-------------------------- VARIABLES -------------------------
    const products = require("../../../data/products.json");
    const [currentCategory, setCurrentCategory] = useState("All");
    const saleProducts = products.filter(product => product.state.includes("Sale"));
    const [foundProducts, setFoundProducts] = useState(products);

    //-------------------------- FUNCTIONS -------------------------
    const sortCategory = (category) => {
        setCurrentCategory(category);
    }

    const filter = (e) =>{
        const keyword = e.target.value;

        if (keyword !== ''){
            const results = products.filter((product) =>{
                return product.name.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setFoundProducts(results); 
            setCurrentCategory("Research");
        }

        else{  //If you clear the search bar, it redisplays all results 
            setFoundProducts(products);
            setCurrentCategory("All");
        }
    }

    //-------------------------- DISPLAY -------------------------
    return (
        <>
            {/* //---------------------- SALEITEMS ----------------------- */}
            <div id='SaleItemsBanner' className='text-center m-0 p-0'>
                <p>Le nombre de produit en solde est de {saleProducts.length}</p>
            </div>

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

                        {/* ---------- Search Bar ---------- */}
                        <div className="filters m-3">
                            <h3>Filter</h3>

                            <form action="/" method="get" className='d-flex align-items-center border p-3'>
                                <div className="col-9 text-truncate d-flex align-items-center">
                                    <input
                                        type="search"
                                        onChange={filter}
                                        placeholder="Search products..."
                                        name="productResearch"
                                        className=' border-0 d-block text-truncate'
                                    />
                                </div>
                                <button className='col-3 p-1'><i className="fa-solid fa-magnifying-glass text-center"></i></button>
                            </form>
                        </div>

                    </div>

                    {/* ----------- Products card ----------- */}
                    <div className="col-9">
                        <div className="row">
                            {/* --------- Filter : All category ---------- */}
                            {products.filter(elem => elem.category === currentCategory).map((element) => {
                                return (
                                    <Card
                                        key={element.id}
                                        display={"col-4"}
                                        img={element.src}
                                        title={element.name}
                                        price={element.price}
                                    />
                                )
                            })
                            }

                            {/* --------- Filter : Specific Category ---------- */}
                            {(currentCategory == "All") && products.map((element) => {
                                return (
                                    <Card
                                        key={element.id}
                                        display={"col-4"}
                                        img={element.src}
                                        title={element.name}
                                        price={element.price}
                                    />
                                )
                            })
                            }

                            {/* --------- Search : Specific Item ---------- */}
                            {(currentCategory == "Research") &&
                                <div>
                                    <h2>Maybe you are looking for this</h2>
                                    <div className="row">
                                        {foundProducts.map((element) => {
                                            return (
                                                <Card
                                                    key={element.id}
                                                    display={"col-4"}
                                                    img={element.src}
                                                    title={element.name}
                                                    price={element.price}
                                                />
                                            )}
                                        )}
                                    </div>
                                </div>
                            }
                        
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Products;