import './ProductDetail.sass';
// import { useParams } from 'react-router-dom';
import { useState } from 'react';

function ProductDetail(props) {
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
            <div id='product-detail-page' className="row">
                <div className="product-details-image  col-12 col-md-4">
                    <img className='img-fluid' src={`../${props.selectedProduct.src}`} alt="error" />
                </div>
                <div className="product-details-info col-12 col-md-4">
                    {/* // props.selectedProduct is the product you clicked on, props.selectedProduct.key permite you to read the value */}
                    
                    <h1 className='product-details-name'>{props.selectedProduct.name}</h1>
                    <p className='product-details-description'>
                        {props.selectedProduct.description}</p>
                    <div className="product-details-color dropdown">
                        <label className='color-container'>

                        </label>
                        <button className="btn btn-* dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Color
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">White</a></li>
                            <li><a className="dropdown-item" href="#">Black</a></li>
                            <li><a className="dropdown-item" href="#">Blue</a></li>
                        </ul>
                    </div>
                    <div className="product-details-size">
                        <button className="btn btn-* dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Size
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">XS</a></li>
                            <li><a className="dropdown-item" href="#">S</a></li>
                            <li><a className="dropdown-item" href="#">M</a></li>
                            <li><a className="dropdown-item" href="#">L</a></li>
                            <li><a className="dropdown-item" href="#">XL</a></li>
                        </ul>

                    </div>
                    <div className="finalize-product col-12">
                        <div className="row">
                            <div className="product-details-quantity col-md-6 col-12">
                                <button className='quantity-button' onClick={decreaseQuantity}>-</button>
                                <span>{quantity}</span>
                                <button className='quantity-button' onClick={increaseQuantity}>+</button>
                            </div>
                            <div className='col-md-6 col-12'>
                                <button id="product-detail-add" type="submit">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;