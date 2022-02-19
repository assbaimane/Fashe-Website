import './ProductDetail.sass';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function ProductDetail(props) {
    //-------------------------- VARIABLES -------------------------

    //-------------------------- FUNCTIONS -------------------------

    //-------------------------- DISPLAY -------------------------

    let params = useParams()

    return (
        <>
            <img src="" alt="" />
            <div className="product-info">
                // props.selectedProduct is the product you clicked on, props.selectedProduct.key permite you to read the value
                <h1>{console.log(props.selectedProduct)}</h1>
                <h2>{props.selectedProduct.price}</h2>
                <p>description</p>
                <div className="product-color">

                </div>
                <div className="product-size">

                </div>
                <div className="item-quantity">
                    <button></button>
                </div>
                <button></button>
            </div>
        </>
    );
}

export default ProductDetail;