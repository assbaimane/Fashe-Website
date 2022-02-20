import './Fav.sass';
import { useState } from 'react';


function Fav(props){
    // --------------------------- VARIABLES ------------------------
    
    // --------------------------- FUNCTIONS ------------------------

    //-------------------------- DISPLAY -------------------------
    return(
        <>
            {/* //---------------------- BANNER ----------------------- */}
            <div id='FavBanner' className='d-flex align-items-center justify-content-center'>
                <h1>Vos favoris</h1>
            </div>

            {/* ---------------------- EMPTY BAG ---------------------- */}
            {props.favBag  == "" &&
                <div className="row justify-content-center align-items-center text-center container mx-auto my-auto p-5">
                    <h2>Ta liste de favoris est vide</h2>
                    <p>Tu n'as encore aucun article dans ton panier</p>
                </div>
            }

            {/* ---------------------- COMPLETED BAG ---------------------- */}
            {/* ----------  CARTCONTENT ---------- */}
            {props.favBag != "" &&
                <div id='FavContent' className='m-5'>
                    <div id ='FavContentTitle' className="row d-flex align-items-center justify-content-center container text-center m-0">
                        <p className='col-6'>Product</p>
                        <p className='col-2'>Price</p>
                        <p className='col-4'>I want it !</p>
                    </div>

                    <div id ='FavContentItems' className="row">
                        {/* ------ Map all items in the bag to display them ------ */}
                        {props.favBag.map((element, index) => {
                            return (
                                <div className="items row align-items-center justify-content-center align-items-center container text-center m-0">
                                    <div className='col-6 row align-items-center justify-content-center'>
                                        <div className="col-3 p-1 p-md-3 p-lg-4"><img src={element.src} className="img-fluid" alt={element.name} /></div>
                                        <div className="col-9">{element.name}</div>
                                    </div>
                                    <p className='col-2'>${element.price}.00</p>
                                    <button className='col-4' onClick={() =>props.fromFavToBag(element,index)}>Add to Bag </button>
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

export default Fav;