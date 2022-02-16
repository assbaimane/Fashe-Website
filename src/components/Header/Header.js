import './Header.sass';
import Logo from '../../images/logo.png.webp'
import { Link } from 'react-router-dom';

function Header(){

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={Logo} className="img-fluid"></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#"><Link to="/">Home</Link></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"><Link to="/products">Products</Link></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"><Link to="/about">About</Link></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"><Link to="/contact">Contact</Link></a>
                        </li>
                    </ul>
                    </div>
                    <button><Link to="/fav"><i className="fa-solid fa-heart"></i></Link></button>
                    <button><Link to="/cart"><i className="fa-solid fa-bag-shopping"></i></Link></button>
                </div>
            </nav>
        </div>
    );
}

export default Header;