import './Card.sass';

function Card(props){
    return(

        <div className="mx-auto my-auto" className={props.display}>
            <div className="product-card">
                <img className="img-fluid" src={props.img} alt={props.title} />
                <div id="card-hover">
                    <button id='cart'>Add to Cart</button>
                    <button id='heart'><i className="fa-solid fa-heart"></i></button>
                </div>
            </div>
            <h5>{props.title}</h5>
            <p>${props.price}.00 </p>
        </div>
    );
}

export default Card;