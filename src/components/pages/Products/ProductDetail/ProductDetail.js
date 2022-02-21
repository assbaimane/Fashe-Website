import './ProductDetail.sass';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function ProductDetail(src, name, price, description) {
    //-------------------------- VARIABLES -------------------------

    //-------------------------- FUNCTIONS -------------------------
    const [quantity, setQuantity] = useState(0);

    function decreaseQuantity() {
        setQuantity(previousQuantity => previousQuantity - 1)
    };

    function increaseQuantity() {
        setQuantity(previousQuantity => previousQuantity + 1)
    };

    //-------------------------- DISPLAY -------------------------

    //let params = useParams()
    

    return (
        <>
            <div className="row">
                <div className="product-details-image col-12 col-md-4">
                    {/* <img src="{elements.Product.src}" alt="" /> */}
                    <img src="{Products.src}" alt="" />
                </div>
                <div className="product-details-info col-12 col-md-4">
                    {/* // props.selectedProduct is the product you clicked on, props.selectedProduct.key permite you to read the value */}
                    
                    <h1 className='product-details-name'>{Products.name}</h1>
                    <h2 className='product-details-price'>{Products.price}</h2>
                    <p className='product-details-description'>{Products.description}</p>
                    <div className="product-details-color dropdown">
                        <button class="btn btn-* dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Color
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">White</a></li>
                            <li><a class="dropdown-item" href="#">Black</a></li>
                            <li><a class="dropdown-item" href="#">Blue</a></li>
                        </ul>
                    </div>
                    <div className="product-details-size">
                        <button class="btn btn-* dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Size
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">XS</a></li>
                            <li><a class="dropdown-item" href="#">S</a></li>
                            <li><a class="dropdown-item" href="#">M</a></li>
                            <li><a class="dropdown-item" href="#">L</a></li>
                            <li><a class="dropdown-item" href="#">XL</a></li>
                        </ul>

                    </div>
                    <div className="product-details-quantity">
                        <button className='quantity-button' onClick={decreaseQuantity}>-</button>
                        <span>{quantity}</span>
                        <button className='quantity-button' onClick={increaseQuantity}>+</button>
                    </div>
                    <div className="product-detail-add">
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;