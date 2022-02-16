import './Card.sass';

function Card(props){
    return(

        <div className="mx-auto my-auto" className={props.display}>
            <img className="img-fluid" src={props.img} alt={props.title} />
            <h5>{props.title}</h5>
            <p>${props.price}.00 </p>
        </div>
    );
}

export default Card;