import './Header.sass';
import Logo from '../../images/logo.png.webp'
import { Link } from 'react-router-dom';
import { useState } from 'react';



function Header(){
    // --------------- VARIABLES -----------------
    const [page, setPage] = useState("home");

    // --------------- FUNCTIONS -----------------
    const navigation = (page) => {
        setPage(page)
    };

    // ------------------ VIEW -------------------
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={Logo} className="img-fluid"></img></a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link onClick={() => navigation("home")} to="/" className={(page === "home") ? 'active' : null}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={() => navigation("products")} to="products" className={(page === "products") ? 'active' : null}>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={() => navigation("about")} to="about" className={(page === "about") ? 'active' : null}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={() => navigation("contact")} to="contact" className={(page === "contact") ? 'active' : null}>Contact</Link>
                        </li>
                    </ul>
                    </div>
                    <div className="nav-buttons">
                        <Link to="/fav"><i className="fa-solid fa-heart"></i></Link>
                        <Link  id='cart' to="/cart"><i className="fa-solid fa-bag-shopping"></i></Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Header;