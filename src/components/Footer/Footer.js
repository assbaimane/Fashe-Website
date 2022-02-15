import './Footer.sass'
import paypal from '../../images/Footer/Payment Methods/pay-paypal.png.webp'
import visa from '../../images/Footer/Payment Methods/pay-visa.png.webp'
import mastercard from '../../images/Footer/Payment Methods/pay-mastercard.png.webp'
import amex from '../../images/Footer/Payment Methods/pay-express.png.webp'
import discover from '../../images/Footer/Payment Methods/pay-discover.png.webp'
import facebook from '../../images/Footer/Social Media/facebook.png'
import instagram from '../../images/Footer/Social Media/instagram.png'
import pinterest from '../../images/Footer/Social Media/pinterest.png'
import snapchat from '../../images/Footer/Social Media/snapchat.png'
import youtube from '../../images/Footer/Social Media/youtube.png'

function Footer(){
    return(
        <div className='footer'>
            <div className="footer-top row">
                <div className="get-in-touch col-12 col-md-5 text-sm-center text-start">
                    <h2>Get In Touch</h2>
                    <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                    <div className="social-media">
                        <img src={facebook} alt="Facebook" />
                        <img src={instagram} alt="Instagram" />
                        <img src={pinterest} alt="Pinterest" />
                        <img src={snapchat} alt="Snapchat" />
                        <img src={youtube} alt="Youtube" />
                    </div>
                </div>
                <div className="links col-12 col-md-3">
                    <h2>Links</h2>
                    <p>Search</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Returns</p>
                </div>
                <div className="links col-12 col-md-3">
                    <h2>Links</h2>
                    <p>Search</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Returns</p>
                </div>
            </div>
            <div className="footer-bottom row text-center">
                <div className="payment-methods col-12">
                    <img src={paypal} alt="PayPal" />
                    <img src={visa} alt="Visa Card" />
                    <img src={mastercard} alt="MasterCard" />
                    <img src={amex} alt="American Express Card" />
                    <img src={discover} alt="Discover Card" />
                </div>
                <p className='col-12'>Copyright &copy; All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;