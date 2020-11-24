import React from 'react';
import web from '../images/darsh-about.jpg';

const About1 = () => {
    return(
        <>
              <section class="about section " id="about">
                <h2 class="section-title">About</h2>

                <div class="about__container bd-grid">
                    <div class="about__img">
                        <img src={web} alt="" />
                    </div>
                    
                    <div>
                        <h2 class="about__subtitle">I'am Darshana</h2>
                        <p class="about__text">Front End Developer focused on creating user-friendly fully responsive web interface with maximized usability and business goals in mind. Provides pixel-perfect, clean, optimized for fast loading speed code. Uses React, and Redux to streamline the development process. Passionate about creating a beautiful front end with delightful user experience. Great interest in improving skills.Proficient in HTML5, CSS3, Javascript, Jquery, Bootstrap3/4/5, ES6, ReactJS, Redux, Adobe Photoshop, to create wireframes for the websites </p>           
                    </div>                                   
                </div>
            </section>
        </>
    );
}

export default About1;