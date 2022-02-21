import './Cart.sass';
import { useState } from 'react';


function Cart(props){
    // --------------------------- VARIABLES ------------------------
    const [itemsQuantity, setitemsQuantity] = useState([...props.shopBag]) 

    // --------------------------- FUNCTIONS ------------------------
    const deleteProduct = (index) =>{
        alert("tu essaye de supprimer quelque chose")
        let copyBag = [...props.shopBag];
        copyBag.splice(index, 1);
        console.log(copyBag);
        props.setShopBag(copyBag);
    }
    
    
    const reduceQuantity = (element, index) =>{
        if (element.quantity === 1){
            let deletion = "Do you want to delete "+element.name+" from your shopbag ?"
            if (window.confirm(deletion)) {
                deleteProduct(index);
              } else {
                console.log("on reste à 1");
              }
        }
        else{
            let updatedArray = [...props.shopBag];
            updatedArray[index].quantity--;
            setitemsQuantity(updatedArray);
            console.log("Le produit "+ (index+1) + " est "+element.quantity+"x dans le panier");
        }
    }

    const increaseQuantity = (element, index) =>{
        let updatedArray = [...props.shopBag];
        updatedArray[index].quantity++;
        setitemsQuantity(updatedArray);
        console.log("Le produit "+ (index+1) + " est "+element.quantity+"x dans le panier");
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
                    <h2>Ton panier est vide</h2>
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
                        {props.shopBag.map((element, index) => {
                            return (
                                <div className="items row align-items-center justify-content-center align-items-center container text-center m-0">
                                    <div className='col-md-5 col-12 row align-items-center justify-content-center'>
                                        <div className="col-3 p-1 p-md-3 p-lg-4"><img src={element.src} className="img-fluid" alt={element.name} /></div>
                                        <div className="col-9">{element.name}</div>
                                    </div>
                                    <p className='col-md-2 col-4'>${element.price}.00</p>
                                    <p className='col-md-2 col-4' id="QuantityButton">
                                        <button onClick={()=>reduceQuantity(element, index)}>-</button>
                                        <span className='p-1'>
                                            {element.quantity}
                                        </span>
                                        <button onClick={()=>increaseQuantity(element, index)}>+</button>
                                    </p>
                                    <p className='col-md-3 col-4'>${element.price * element.quantity}.00</p>
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