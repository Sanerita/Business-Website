import React from 'react';
import Smilingchef from '../assets/Smiling-chef.png' 

const AboutPage = () => {
  return (
    <div id='about'>
    <div className='about'>
    <h2>About Us</h2>

    {/* <section id="newsletter"> */}
      <div class="news-container" id="newsletter" >
        <h1>Subscribe To Our Newsletter</h1>
        <form>
          <input type="email" placeholder="Enter Email..." required/>
          <button type="submit" className="button_1">Subscribe</button>
        </form>
      </div>
    {/* </section> */}

    <div className="about-image">
        <img src={Smilingchef} alt="" />
      </div>

      
      </div>
    </div>
     );
}

export default AboutPage;
