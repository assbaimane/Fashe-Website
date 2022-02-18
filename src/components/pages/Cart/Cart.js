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
                <div className="container mx-auto my-auto">
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
                                <div className="row align-items-center justify-content-center container text-center m-0 border border-secondary">
                                    <div className='col-5 row align-items-center justify-content-center'>
                                        <div className="col-3"><img src={element.src} className="img-fluid" alt={element.name} /></div>
                                        <div className="col-9">{element.name}</div>
                                    </div>
                                    <p className='col-2'>{element.price}€</p>
                                    <p className='col-2'>Quantity to add</p>
                                    <p className='col-3'>Total to add</p>
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