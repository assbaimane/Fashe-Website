import './Cart.sass';
import {useEffect, useState} from 'react';


function Cart(props){
    // // --------------------------- VARIABLES ------------------------
    
    // --------------------------- FUNCTIONS ------------------------


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
                                        <div className="col-3 p-4"><img src={element.src} className="img-fluid" alt={element.name} /></div>
                                        <div className="col-9">{element.name}</div>
                                    </div>
                                    <p className='col-2'>${element.price}.00</p>
                                    <p className='col-2' id="QuantityButton">
                                        <button>-</button>
                                        <span className='p-1'>{element.quantity}</span>
                                        <button>+</button>
                                    </p>
                                    <p className='col-3'>${element.price * element.quantity}.00</p>
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