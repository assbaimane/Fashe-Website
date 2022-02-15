import './Card.sass';
import {useEffect} from 'react';

function Card(props){
    //-------------------- VARIABLES --------------------


    //-------------------- FUNCTIONS --------------------

    //-------------------- DISPLAY ----------------------
    return(
        <div className="col-3 mx-auto my-auto">
            <div className="p-3">
                <img class="img-fluid" src={props.img} alt={props.title} />
                <h5>{props.title}</h5>
                <p>${props.price}.00 </p>
            </div>
        </div>
    );
}

export default Card;