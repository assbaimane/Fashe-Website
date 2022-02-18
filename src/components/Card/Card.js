import './Card.sass';
import {useEffect, useState} from 'react';
import Products from '../pages/Products/Products';

function Card(props){
    // --------------------------- VARIABLES ------------------------
    // const [shopBag, setShopBag] = useState([])  
    // const [productStatus, setSpan] = useState("");

    // --------------------------- FUNCTIONS ------------------------
    // const addToBag = (element) =>{
    //     console.log("Heyyy, tu as ajouté ça à ton panier " + element)
    // }
    // const productState = (productStatus) => {
    //     setSpan(productStatus)
    // };

    // ----------------------------- VIEW ---------------------------
    return(
        <div className="products mx-auto my-auto" className={props.display}>
            <div className="product-card">
                {/* product status button */}
                {/* <span>{props.stat}=productState</span> */}
                {/* product photo */}
                <img className="img-fluid" src={props.img} alt={props.title} />
                <div id="card-hover">
                    {/* add to cart button */}
                    <button id='add-to-cart' onClick={(param) => props.addToBag(props.item)}>Add to Cart</button>

                    {/* like button */}
                    <button id='heart'><i className="fa-solid fa-heart"></i></button>
                </div>
            </div>
            <h5>{props.title}</h5>
            <p>${props.price}.00 </p>
        </div>
    );
}

export default Card;