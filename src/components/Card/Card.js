import './Card.sass';
import { Link } from 'react-router-dom';
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
        <div className="products mx-auto my-auto" className={props.display}>
            <div className="product-card pb-3">
                {/* product status button */}
                {props.item?.state === "New" || props.item?.state === "Old" ? <span>{props.item?.state}</span> : null }

                {/* product photo */}
                <img className="img-fluid productImg" src={props.img} alt={props.title} />
                <div id="card-hover">
                    {/* add to cart button */}
                    <div className="btnContainer">
                        <button id='addInCart' onClick={() => props.addToBag(props.item)}>Add to Cart</button>
                    </div>

                    {/* like button */}
                    <button id='heart'><i className="fa-solid fa-heart" onClick={() => props.addToFav(props.item)}></i></button>
                </div>
            </div>
            <Link onClick={() => {props.setSelectedProduct(props.item)}} to='/products/productDetail'>
                <h5>{props.title}</h5>
            </Link>
            <p> 
                {/* ---- If item is in sale, 20% on and old price is striked, else : display price */}
            {props.item?.state === "Sale" ? <span className='text-danger'><strike className="text-dark">${props.price}.00</strike>  ${(props.item?.price*0.8)}.00</span> : <span>${props.price}.00</span>  }</p>
        </div>
    );
}

export default Card;