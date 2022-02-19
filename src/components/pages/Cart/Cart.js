import './Cart.sass';
import { useState } from 'react';


function Cart(props){
    // --------------------------- VARIABLES ------------------------
    const [itemsQuantity, setitemsQuantity] = useState(...props.shopBag) 

    // --------------------------- FUNCTIONS ------------------------
    const reduceQuantity = (element,amount) =>{
        element.quantity--;
        setitemsQuantity(amount);
    }

    const increaseQuantity = (amount) =>{
        amount++;
        setitemsQuantity(amount);
    }

    //-------------------------- DISPLAY -------------------------
    return(
        <>
            {/* //---------------------- BANNER ----------------------- */}
            <div id='CartBanner' className='d-flex align-items-center justify-content-center'>
                <h1>Panier</h1>
            </div>

            {/* ---------------------- EMPTY BAG ---------------------- */}
            {props.shopBag  == "" &&
                <div className="row justify-content-center align-items-center text-center container mx-auto my-auto p-5">
                    <h1>Ton panier est vide</h1>
                    <p>Tu n'as encore aucun article dans ton panier</p>
                </div>
            }

            {/* ---------------------- COMPLETED BAG ---------------------- */}
            {/* ----------  CARTCONTENT ---------- */}
            {props.shopBag != "" &&
                <div id='CartContent' className='m-5'>
                    <div id ='CartContentTitle' className="row d-flex align-items-center justify-content-center container text-center m-0">
                        <p className='col-5'>Product</p>
                        <p className='col-2'>Price</p>
                        <p className='col-2'>Quantity</p>
                        <p className='col-3'>Total</p>
                    </div>

                    <div id ='CartContentItems' className="row">
                        {/* ------ Map all items in the bag to display them ------ */}
                        {props.shopBag.map((element) => {
                            return (
                                <div className="items row align-items-center justify-content-center align-items-center container text-center m-0">
                                    <div className='col-5 row align-items-center justify-content-center'>
                                        <div className="col-3 p-1 p-md-3 p-lg-4"><img src={element.src} className="img-fluid" alt={element.name} /></div>
                                        <div className="col-9">{element.name}</div>
                                    </div>
                                    <p className='col-2'>${element.price}.00</p>
                                    <p className='col-2' id="QuantityButton">
                                        <button onClick={()=>reduceQuantity(itemsQuantity)}>-</button>
                                        {/* --- By default --- */}
                                        {itemsQuantity == null &&
                                        <span className='p-1'>
                                            {/* {setitemsQuantity(element.quantity)} */}
                                        </span>
                                        }
                                        {/* --- After + or - items --- */}
                                        {itemsQuantity !== null &&
                                        <span className='p-1'>
                                            {/* {itemsQuantity} */}
                                        </span>
                                        }
                                        <button onClick={()=>increaseQuantity(itemsQuantity)}>+</button>
                                    </p>
                                    <p className='col-3'>${element.price *itemsQuantity}.00</p>
                                </div>
                            );
                        }
                        )}
                    </div>
                </div>
            }
        </>
    );
}

export default Cart;