import './Card.sass';
import {useEffect, useState} from 'react';
import Products from '../pages/Products/Products';

function Card(props){
    // --------------------------- VARIABLES ------------------------
    // const [shopBag, setShopBag] = useState([])  

    // --------------------------- FUNCTIONS ------------------------
    // const addToBag = (element) =>{
    //     console.log("Heyyy, tu as ajouté ça à ton panier " + element)
    // }

    // ----------------------------- VIEW ---------------------------
    return(
        <div className="mx-auto my-auto" className={props.display}>
            <div className="product-card">
                <img className="img-fluid" src={props.img} alt={props.title} />
                <div id="card-hover">
                    <button id='add-to-cart' onClick={(param) => props.addToBag(props.item)}>Add to Cart</button>
                    <button id='heart'><i className="fa-solid fa-heart"></i></button>
                </div>
            </div>
            <h5>{props.title}</h5>
            <p>${props.price}.00 </p>
        </div>
    );
}

export default Card;