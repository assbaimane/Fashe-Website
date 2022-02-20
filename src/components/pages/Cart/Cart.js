import './Cart.sass';
import { useEffect, useState } from 'react';


function Cart(props){
    // --------------------------- VARIABLES ------------------------
    const [itemsQuantity, setitemsQuantity] = useState([...props.shopBag])
    const [totalPrice, setTotalPrice] = useState(0);

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
                setTotalPrice(totalPrice => (totalPrice - element.price));
              } else {
                console.log("on reste à 1");
              }
        }
        else{
            let updatedArray = [...props.shopBag];
            updatedArray[index].quantity--;
            setitemsQuantity(updatedArray);
            setTotalPrice(totalPrice => (totalPrice - element.price));
            console.log("Le produit "+ (index+1) + " est "+element.quantity+"x dans le panier");
        }
    }

    const increaseQuantity = (element, index) =>{
        let updatedArray = [...props.shopBag];
        updatedArray[index].quantity++;
        setitemsQuantity(updatedArray);
        setTotalPrice(totalPrice => (totalPrice + element.price));
        console.log("Le produit "+ (index+1) + " est "+element.quantity+"x dans le panier");
    }

    useEffect(() =>{ //Wait for all element to display before to calcul the total price
        setTimeout(
            props.shopBag.map((element) => {
                return(
                    setTotalPrice(totalPrice => (totalPrice + (element.price * element.quantity)))
                );
            })
        ,2000);
    },[])

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
                    {/* ------------ Products Column Title --------------- */}
                    <div id ='CartContentTitle' className="row d-flex align-items-center justify-content-center container text-center m-0">
                        <p className='col-5'>Product</p>
                        <p className='col-2'>Price</p>
                        <p className='col-2'>Quantity</p>
                        <p className='col-3'>Total</p>
                    </div>

                    {/* -------------------- Products -------------------- */}
                    <div id ='CartContentItems' className="row">
                        {/* ------ Map all items in the bag to display them ------ */}
                        {props.shopBag.map((element, index) => {
                            return (
                                <div className="items row align-items-center justify-content-center align-items-center container text-center m-0">
                                    <div className='col-5 row align-items-center justify-content-center'>
                                        <div className="col-3 p-1 p-md-3 p-lg-4"><img src={element.src} className="img-fluid" alt={element.name} /></div>
                                        <div className="col-9">{element.name}</div>
                                    </div>
                                    <p className='col-2'>${element.price}.00</p>
                                    <p className='col-2' id="QuantityButton">
                                        <button onClick={()=>reduceQuantity(element, index)}>-</button>
                                        <span className='p-1'>
                                            {element.quantity}
                                        </span>
                                        <button onClick={()=>increaseQuantity(element, index)}>+</button>
                                    </p>
                                    <p className='col-3'>${(element.quantity * element.price)}.00</p>
                                </div>
                            );
                        }
                        )}
                    </div>

                    {/* ----------- Total price ----------- */}
                    <div className="total row mt-3 offset-6 col-6 align-items-center">
                        <p className='col-4'>Total : $<span>{totalPrice}.00</span></p>
                        <button className='col-8 bg-dark text-light rounded'>Proceed to payement</button>
                    </div>
                </div>
            }
        </>
    );
}

export default Cart;