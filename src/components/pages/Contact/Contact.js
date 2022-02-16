import './Contact.sass';
import {useEffect} from 'react';
import mapIcon from '../../../images/Contact/icon-position-map.png.webp'


function Contact(props){
    
    // --------------------------- FUNCTIONS ------------------------

    //-------------------------- DISPLAY -------------------------
    return(
        <div>
            <header>
                <div className='contact-banner'></div>
                <h1>Hello</h1>
            </header>
            <div className="contact-container">
                <div className="row">
                    <div id='map' className="col-12 col-md-6">
                        {/* <iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.520625857343!2d-74.00966008459451!3d40.72856827933009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259f2a8c6795f%3A0x60baade8bb5023b2!2s379%20Hudson%20St%2C%20New%20York%2C%20NY%2010014%2C%20USA!5e0!3m2!1sen!2sbe!4v1645016758523!5m2!1sen!2sbe" 
                        width="600" 
                        height="450" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy"></iframe> */}
                    </div>
                    <div className="contact-form col-12 col-md-6">
                        <h2>Send us your message</h2>
                        <form>
                            {/* name */}
                            <input type="text" id='name' name='name' placeholder='Full Name' />
                            {/* phone */}
                            <input type="tel" id='phone' name='phone' placeholder='Phone Number' />
                            {/* email */}
                            <input type="email" id='email' name='email' placeholder='Email Address' />
                            {/* message */}
                            <textarea id='message' name='message' placeholder='Message' />
                            <button type='submit'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;