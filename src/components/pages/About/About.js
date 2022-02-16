import './About.sass';
import {useEffect} from 'react';
import aboutBanner from '../../../images/About/banner-about.jpg.webp'
import aboutPhoto from '../../../images/About/about.jpg.webp'


function About(){
    
    // --------------------------- FUNCTIONS ------------------------

    //-------------------------- DISPLAY -------------------------
    return(
        <div>
            <header>
                <div className='img'></div>
                <h1>About</h1>
            </header>
            <div className="about-container">
                <div className="row">
                    <div className="about-image col-12 col-md-4">
                        <img src={aboutPhoto} alt="" />
                    </div>
                    <div className="about-story col-12 col-md-8">
                        <h2>Our Story</h2>
                        <p>Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</p>
                        <figure className="quote">
                            <blockquote>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</blockquote>
                            <figcaption>&ndash; Steve Jobs</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;